import * as React from "react";
import { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import Section from "../common/Section";
import { PortfoliosFactory } from "./PortfoliosFactory";

const useStyles = makeStyles(
    () =>
        createStyles({
            portfolioPanel: {},
        }),
    { name: "MuiMyPortfoliosPanel" },
);

interface PortfoliosPanelProps {
    portfoliosFactory: PortfoliosFactory;
}

const PortfoliosPanel = ({ portfoliosFactory }: PortfoliosPanelProps) => {
    const classes = useStyles();

    const [portfolios, setPortfolios] = useState<React.ReactNode>([]);

    useEffect(() => {
        portfoliosFactory.createPortfolios().then((portfolios) => setPortfolios(portfolios));
    }, [portfoliosFactory]);

    return (
        <Section id="portfolio" hasDivider={true} title="Portfolio" subtitle="Some of my previous works">
            <div className={classes.portfolioPanel}>{portfolios}</div>
        </Section>
    );
};
export default PortfoliosPanel;
