import * as React from "react";

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

    async createPortfolios() {
        return <EmbeddedPenPortfolios parser={this.parser} rssFeedUrl={this.rssFeedUrl}/>;
    }
}
