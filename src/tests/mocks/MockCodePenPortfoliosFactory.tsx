import * as React from "react";

import { PortfoliosFactory } from "../../components/portfolio/PortfoliosFactory";
import DirectlyDisplayHtmlContentPortfolio from "../../components/portfolio/DirectlyDisplayHtmlContentPortfolio";
import mockCodePenRssFeeds from "./mockCodePenRssFeeds";

export default class MockCodePenPortfoliosFactory implements PortfoliosFactory {
    createPortfolios() {
        return Promise.resolve(
            mockCodePenRssFeeds.map((feed, i) => <DirectlyDisplayHtmlContentPortfolio key={i} {...feed} />),
        );
    }
}
