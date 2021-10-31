import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { Items } from "rss-parser";
import { CodepenEmbedScriptTagBuilder, ScriptTagBuilder } from "ts-react-codepen-embed";

import RssFeedsParser from "../../services/portfolio/RssFeedsParser";
import EmbeddedPenPortfolio from "./EmbeddedPenPortfolio";

const styles = (theme: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {
    parser: RssFeedsParser;
    rssFeedUrl: string;
}

interface State {
    items: Items[];
    loaded: boolean;
    error?: string;
}

class EmbeddedPenPortfolios extends React.Component<Props, State> {
    private scriptTagBuilder: ScriptTagBuilder;

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = { loaded: false, items: [] };

        this.scriptTagBuilder = new CodepenEmbedScriptTagBuilder()
            .setAsync(true)
            .withOnLoadHandler(() => this.setState({ loaded: true }))
            .withOnErrorHandler(() => this.setState({ error: "Failed to load the pen" }));
    }

    componentDidMount(): void {
        this.props.parser
            .parseUrl(this.props.rssFeedUrl)
            .then((items) => this.setState({ items }))
            .then(() => this.scriptTagBuilder.appendTo(document.body))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.items.map(({ content = "", link = "", title = "" }: Items, index: number) => (
                    <EmbeddedPenPortfolio
                        key={`${index}_${title}`}
                        content={content}
                        link={link}
                        title={title}
                        isScriptLoaded={this.state.loaded}
                    />
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(EmbeddedPenPortfolios);
