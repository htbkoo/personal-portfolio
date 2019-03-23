import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import Section from "../common/Section";
import {PortfoliosFactory} from "./PortfoliosFactory";

const styles = (theme: Theme) => createStyles({
    portfolio: {
        margin: "5%"
    }
});

interface PortfoliosPanelProps extends WithStyles<typeof styles> {
    portfoliosFactory: PortfoliosFactory
}

interface PortfoliosPanelState {
    portfolios: React.ReactNode[]
}

class PortfoliosPanel extends React.Component<PortfoliosPanelProps, PortfoliosPanelState> {
    constructor(props: Readonly<PortfoliosPanelProps>) {
        super(props);

        this.state = {
            portfolios: []
        };
    }

    componentDidMount(): void {
        this.props.portfoliosFactory.createPortfolios()
            .then(portfolios => this.setState({portfolios}))
    }

    render(): React.ReactNode {
        return (
            <Section
                id="portfolio"
                hasDivider={true}
                title="Portfolio"
                subtitle="Some of my previous works"
            >
                <div>
                    {this.state.portfolios}
                </div>
            </Section>
        );
    }
}

export default withStyles(styles)(PortfoliosPanel);