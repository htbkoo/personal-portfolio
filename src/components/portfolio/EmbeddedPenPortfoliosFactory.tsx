import * as React from "react";
import {Items} from "rss-parser";

import RssFeedsParser from "../../services/portfolio/RssFeedsParser";
import {PortfoliosFactory} from "./PortfoliosFactory";
import EmbeddedPenPortfolio from "./EmbeddedPenPortfolio";
import {CircularProgress} from "@material-ui/core";

export default class EmbeddedPenPortfoliosFactory implements PortfoliosFactory {
    private readonly parser: RssFeedsParser;
    private readonly rssFeedUrl: string;

    constructor(parser: RssFeedsParser, rssFeedUrl: string) {
        this.parser = parser;
        this.rssFeedUrl = rssFeedUrl;
    }

    createPortfolios() {
        // return
        // return Promise.resolve([<CircularProgress/>]);
        return Promise.resolve(<PenPortfolios parser={this.parser} rssFeedUrl={this.rssFeedUrl}/>);
    }
}

/*

interface PortfoliosPanelProps extends WithStyles<typeof styles> {
rssFeedUrl: string,
parser: RssFeedsParser
}


import RssFeedsParser from "../../services/portfolio/RssFeedsParser";



this.props.parser.parseUrl(this.props.rssFeedUrl)
    .then(items => this.setState({items}))

{
    this.state.items.map(({content = "", link = "", title = ""}: Items, index: number) =>
        <div className={this.props.classes.portfolio} key={`${index}_${title}`}>
            <Portfolio content={content} link={link} title={title}/>
        </div>
    )
}
*/

interface PenPortfoliosProps {
    parser: RssFeedsParser;
    rssFeedUrl: string;
}

interface PenPortfoliosState {
    portfolios: React.ReactNode[],
    loaded: boolean,
    loading: boolean,
    error?: string,
}

const SCRIPT_URL = 'https://production-assets.codepen.io/assets/embed/ei.js';

class PenPortfolios extends React.Component<PenPortfoliosProps, PenPortfoliosState> {

    private _mounted: boolean = false;

    constructor(props: Readonly<PenPortfoliosProps>) {
        super(props);
        this.state = {loaded: false, loading: true, portfolios: []};
    }

    componentDidMount(): void {
        this._mounted = true;

        this.props.parser.parseUrl(this.props.rssFeedUrl)
            .then(items =>
                items.map(({content = "", link = "", title = ""}: Items, index: number) =>
                    (<EmbeddedPenPortfolio key={`${index}_${title}`} content={content} link={link} title={title}
                                           isScriptLoaded={true}/>)
                )
            )
            .then(portfolios => this.setState({portfolios}))
            .then(() => {
                // load the codepen embed script
                const script = document.createElement('script');
                script.src = SCRIPT_URL;
                script.async = true;
                script.onload = () => {
                    // do not do anything if the component is already unmounted.
                    if (!this._mounted) return;

                    this.setState({
                        loaded: true,
                        loading: false
                    });
                };
                script.onerror = () => {
                    if (!this._mounted) return;

                    this.setState({
                        error: 'Failed to load the pen'
                    });
                };

                document.body.appendChild(script);
            });
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        return (
            <div>
                {this.state.portfolios}
            </div>
        );
    }
}