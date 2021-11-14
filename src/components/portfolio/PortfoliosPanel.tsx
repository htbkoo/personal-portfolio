import * as React from "react";
import { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import Section from "../common/Section";
import { PortfoliosFactory } from "./PortfoliosFactory";

const useStyles = makeStyles(() =>
    createStyles({
        portfolioPanel: {},
    }),
);

interface PortfoliosPanelProps {
    portfoliosFactory: PortfoliosFactory;
}

export default ({ portfoliosFactory }: PortfoliosPanelProps) => {
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
