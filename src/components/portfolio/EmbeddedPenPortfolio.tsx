import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {PortfolioProps} from "./PortfolioProps";
import CodePen from "react-codepen-embed";
import CodePenItemContentParser from "../../services/portfolio/CodePenItemContentParser";
import {credentialsExtractor} from "../../services/portfolio/CodePenItemContentExtractor";

const styles = (theme: Theme) => createStyles({});

interface EmbeddedPenPortfolioProps extends PortfolioProps, WithStyles<typeof styles> {
}

function EmbeddedPenPortfolio(props: EmbeddedPenPortfolioProps) {
    const {title, link, content} = props;
    const contentParser = CodePenItemContentParser.newParser(content);
    const {user, hash} = contentParser.parseContent(credentialsExtractor);

    return (
        <div>
            <CodePen
                user={user}
                hash={hash}
                title={title}
                loader={() => <div>Loading...</div>}
            />
        </div>
    );
}

export default withStyles(styles)(EmbeddedPenPortfolio);