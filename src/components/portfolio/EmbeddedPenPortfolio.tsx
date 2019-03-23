import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import CodePen from "react-codepen-embed";
import CircularProgress from "@material-ui/core/CircularProgress";

import {PortfolioProps} from "./PortfolioProps";
import CodePenItemContentParser from "../../services/portfolio/CodePenItemContentParser";
import {credentialsExtractor} from "../../services/portfolio/CodePenItemContentExtractor";

const styles = (theme: Theme) => createStyles({
    embeddedContainer: {
        margin: "5%"
    }
});

interface EmbeddedPenPortfolioProps extends PortfolioProps, WithStyles<typeof styles> {
}

function EmbeddedPenPortfolio(props: EmbeddedPenPortfolioProps) {
    const {title, content, classes} = props;
    const contentParser = CodePenItemContentParser.newParser(content);
    const {user, hash} = contentParser.parseContent(credentialsExtractor);

    return (
        <div className={classes.embeddedContainer}>
            <CodePen
                user={user}
                hash={hash}
                title={title}
                height={512}
                loader={() => <CircularProgress/>}
            />
        </div>
    );
}

export default withStyles(styles)(EmbeddedPenPortfolio);