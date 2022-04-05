import * as React from "react";

import { PortfolioProps } from "./PortfolioProps";

interface DirectlyDisplayHtmlContentPortfolioProps extends PortfolioProps {}

const DirectlyDisplayHtmlContentPortfolio = (props: DirectlyDisplayHtmlContentPortfolioProps) => {
    const { title, link, content } = props;
    return (
        <div>
            <div>
                <a href={link}>{title}</a>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};
export default DirectlyDisplayHtmlContentPortfolio;
