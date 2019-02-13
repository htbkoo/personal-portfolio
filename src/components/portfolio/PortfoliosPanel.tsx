import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

import {Items} from "rss-parser";

import CodePenRssFeedsParser from "../../services/portfolio/CodePenRssFeedsParser";
import Portfolio from "./DirectlyDisplayHtmlContentPortfolio";
import Section from "../common/Section";

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
        return (
            <Section
                id="portfolio"
                hasDivider={true}
                title="Portfolio"
                subtitle="Some of my previous works"
            >
                <div>
                    {this.state.items.map(toPortfolioComponent)}
                </div>
            </Section>
        );
    }
}

function toPortfolioComponent({content = "", link = "", title = ""}: Items, index: number) {
    return <Portfolio content={content} link={link} title={title} key={`${index}_${title}`}/>
}

export default withStyles(styles)(PortfoliosPanel);