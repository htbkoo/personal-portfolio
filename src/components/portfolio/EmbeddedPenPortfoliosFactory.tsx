import * as React from "react";
import {Items} from "rss-parser";
import {CodepenEmbedScriptTagBuilder, ScriptTagBuilder} from "responsive-react-codepen-embed";

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
    error?: string,
}

class PenPortfolios extends React.Component<PenPortfoliosProps, PenPortfoliosState> {

    private _mounted: boolean = false;
    private scriptTagBuilder: ScriptTagBuilder;

    constructor(props: Readonly<PenPortfoliosProps>) {
        super(props);
        this.state = {loaded: false, items: []};

        this.scriptTagBuilder = new CodepenEmbedScriptTagBuilder()
            .setAsync(true)
            .withOnLoadHandler(this.handleScriptLoad.bind(this))
            .withOnErrorHandler(this.handleScriptError.bind(this));
    }

    componentDidMount(): void {
        this._mounted = true;

        this.props.parser.parseUrl(this.props.rssFeedUrl)
            .then(items => this.setState({items}))
            .then(() => this.scriptTagBuilder.appendTo(document.body))
            .catch(error => console.log(error));
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
                        isScriptLoaded={this.state.loaded}
                    />)
                )}
            </div>
        );
    }

    private handleScriptLoad() {
        // do not do anything if the component is already unmounted.
        if (!this._mounted) return;

        this.setState({loaded: true,});
    }

    private handleScriptError() {
        if (!this._mounted) return;

        this.setState({error: 'Failed to load the pen'});
    }
}