import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import CodePen from "ts-react-codepen-embed";
import CircularProgress from "@material-ui/core/CircularProgress";
import withWidth from "@material-ui/core/withWidth";

import { PortfolioProps } from "./PortfolioProps";
import CodePenItemContentParser from "../../services/portfolio/CodePenItemContentParser";
import { credentialsExtractor } from "../../services/portfolio/CodePenItemContentExtractor";

const styles = (theme: Theme) => createStyles({
    embeddedContainer: {
        margin: "5%"
    }
});

interface EmbeddedPenPortfolioProps extends PortfolioProps, WithStyles<typeof styles> {
    isScriptLoaded?: boolean
}

const MAPPING_HEIGHTS: { [b in Breakpoint]: number } = {
    xs: 288,
    sm: 384,
    md: 384,
    lg: 640,
    xl: 768,
};

function EmbeddedPenPortfolio(props: EmbeddedPenPortfolioProps) {
    const { title, content, isScriptLoaded, classes } = props;
    const contentParser = CodePenItemContentParser.newParser(content);
    const { user, hash } = contentParser.parseContent(credentialsExtractor);

    return (
        <div className={classes.embeddedContainer}>
            <CodePen
                user={user}
                hash={hash}
                title={title}
                height={getHeight()}
                loader={() => <CircularProgress/>}
                defaultTab="result"
                shouldLoadScript={false}
                overrideAsLoaded={isScriptLoaded}
            />
        </div>
    );

    function getHeight() {
        const width: Breakpoint = (props as any).width;
        return MAPPING_HEIGHTS[width];
    }
}

export default withWidth()(withStyles(styles)(EmbeddedPenPortfolio));
