import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import {Items} from "rss-parser";

import CodePenRssFeedsParser from "./services/CodePenRssFeedsParser";

const styles = (theme: Theme) => createStyles({});

interface PortfoliosPanelProps extends WithStyles<typeof styles> {
    rssFeedUrl: string,
    parser: CodePenRssFeedsParser
}

interface PortfoliosPanelState {
    items: Items[]
}

class PortfoliosPanel extends React.Component<PortfoliosPanelProps, PortfoliosPanelState> {
    constructor(props: Readonly<PortfoliosPanelProps>) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount(): void {
        this.props.parser.parseUrl(this.props.rssFeedUrl)
            .then(items => this.setState({items}))
    }

    render(): React.ReactNode {
        return <div>

        </div>;
    }

}

export default withStyles(styles)(PortfoliosPanel);