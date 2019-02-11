import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import {Items} from "rss-parser";

import CodePenRssFeedsParser from "../../services/CodePenRssFeedsParser";
import Portfolio from "./Portfolio";

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
            {this.state.items.map(toPortfolioComponent)}
        </div>;
    }
}

function toPortfolioComponent(item: Items, index: number) {
    const {content = "", link = "", title = ""} = item;
    return <Portfolio content={content} link={link} title={title} key={`${index}_${title}`}/>
}

export default withStyles(styles)(PortfoliosPanel);