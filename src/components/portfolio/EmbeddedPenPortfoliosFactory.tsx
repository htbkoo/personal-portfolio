import * as React from "react";
import {Items} from "rss-parser";

import RssFeedsParser from "../../services/portfolio/RssFeedsParser";
import {PortfoliosFactory} from "./PortfoliosFactory";
import EmbeddedPenPortfolio from "./EmbeddedPenPortfolio";

export default class EmbeddedPenPortfoliosFactory implements PortfoliosFactory {
    private readonly parser: RssFeedsParser;
    private readonly rssFeedUrl: string;

    constructor(parser: RssFeedsParser, rssFeedUrl: string) {
        this.parser = parser;
        this.rssFeedUrl = rssFeedUrl;
    }

    createPortfolios() {
        return Promise.resolve(<PenPortfolios parser={this.parser} rssFeedUrl={this.rssFeedUrl}/>);
    }
}

interface PenPortfoliosProps {
    parser: RssFeedsParser;
    rssFeedUrl: string;
}

interface PenPortfoliosState {
    items: Items[],
    loaded: boolean,
    loading: boolean,
    error?: string,
}

const SCRIPT_URL = 'https://production-assets.codepen.io/assets/embed/ei.js';

class PenPortfolios extends React.Component<PenPortfoliosProps, PenPortfoliosState> {

    private _mounted: boolean = false;

    constructor(props: Readonly<PenPortfoliosProps>) {
        super(props);
        this.state = {loaded: false, loading: true, items: []};

        this.loadScript = this.loadScript.bind(this);
    }

    componentDidMount(): void {
        this._mounted = true;

        this.props.parser.parseUrl(this.props.rssFeedUrl)
            .then(items => this.setState({items}))
            .then(() => this.loadScript(true));
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        return (
            <div>
                {this.state.items.map(({content = "", link = "", title = ""}: Items, index: number) =>
                    (<EmbeddedPenPortfolio
                        key={`${index}_${title}`}
                        content={content}
                        link={link}
                        title={title}
                        isScriptLoaded={!this.state.loading}
                    />)
                )}
            </div>
        );
    }

    private loadScript(isPreFlight) {
        // load the codepen embed script
        const script = document.createElement('script');
        script.src = SCRIPT_URL;
        if (isPreFlight) {
            script.onload = () => {
                // do not do anything if the component is already unmounted.
                if (!this._mounted) return;

                this.setState({
                    loaded: true,
                    loading: false
                });

                this.loadScript(false);
            };
            script.onerror = () => {
                if (!this._mounted) return;

                this.setState({
                    error: 'Failed to load the pen'
                });
            };
        }
        document.body.appendChild(script);
    }
}