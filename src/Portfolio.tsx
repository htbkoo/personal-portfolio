import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import RssParser, {Items} from "rss-parser";

import CodePenRssFeedsParser from "./services/CodePenRssFeedsParser";

const styles = (theme: Theme) => createStyles({});

interface PortfolioProps extends WithStyles<typeof styles> {
    rssFeedUrl: string,
    parser: CodePenRssFeedsParser
}

interface PortfolioState {
    items: Items[]
}

class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
    constructor(props: Readonly<PortfolioProps>) {
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

export default withStyles(styles)(Portfolio);