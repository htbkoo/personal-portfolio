import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import CodePen from "ts-react-codepen-embed";
import CircularProgress from "@material-ui/core/CircularProgress";

import { PortfolioProps } from "./PortfolioProps";
import CodePenItemContentParser from "../../services/portfolio/CodePenItemContentParser";
import { credentialsExtractor } from "../../services/portfolio/CodePenItemContentExtractor";
import { useWidth } from "../../hooks/muiHooks";

const useStyles = makeStyles(
    () => ({
        embeddedContainer: {
            margin: "5%",
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

interface EmbeddedPenPortfolioProps extends PortfolioProps {
    isScriptLoaded?: boolean;
}

const MAPPING_HEIGHTS: { [b in Breakpoint]: number } = {
    xs: 288,
    sm: 384,
    md: 384,
    lg: 640,
    xl: 768,
};

const EmbeddedPenPortfolio = (props: EmbeddedPenPortfolioProps) => {
    const classes = useStyles();
    const width = useWidth();

    const { title, content, isScriptLoaded } = props;
    const contentParser = CodePenItemContentParser.newParser(content);
    const { user, hash } = contentParser.parseContent(credentialsExtractor);

    return (
        <div className={classes.embeddedContainer}>
            <CodePen
                user={user}
                hash={hash}
                title={title}
                height={MAPPING_HEIGHTS[width]}
                loader={() => <CircularProgress />}
                defaultTab="result"
                shouldLoadScript={false}
                overrideAsLoaded={isScriptLoaded}
            />
        </div>
    );
};
export default EmbeddedPenPortfolio;
