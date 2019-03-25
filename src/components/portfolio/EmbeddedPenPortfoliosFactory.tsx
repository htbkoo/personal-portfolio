import * as React from "react";
import {CodepenEmbedScriptTagBuilder, ScriptTagBuilder} from "responsive-react-codepen-embed";

import RssFeedsParser from "../../services/portfolio/RssFeedsParser";
import {PortfoliosFactory} from "./PortfoliosFactory";
import EmbeddedPenPortfolios from "./EmbeddedPenPortfolios";

export default class EmbeddedPenPortfoliosFactory implements PortfoliosFactory {
    private readonly parser: RssFeedsParser;
    private readonly rssFeedUrl: string;

    constructor(parser: RssFeedsParser, rssFeedUrl: string) {
        this.parser = parser;
        this.rssFeedUrl = rssFeedUrl;
    }

    createPortfolios() {
        return Promise.resolve(<EmbeddedPenPortfolios parser={this.parser} rssFeedUrl={this.rssFeedUrl}/>);
    }
}