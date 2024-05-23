import * as React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Breakpoint } from '@mui/material/styles';
import CodePen from "ts-react-codepen-embed";
import CircularProgress from "@mui/material/CircularProgress";

import { ExerciseProps } from "./ExerciseProps";
import CodePenItemContentParser from "@/src/services/exercises/CodePenItemContentParser";
import { credentialsExtractor } from "@/src/services/exercises/CodePenItemContentExtractor";
import { useWidth } from "../../hooks/muiHooks";

const useStyles = makeStyles(
    () => ({
        embeddedContainer: {
            margin: "5%",
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

interface EmbeddedPenExerciseProps extends ExerciseProps {
    isScriptLoaded?: boolean;
}

const MAPPING_HEIGHTS: { [b in Breakpoint]: number } = {
    xs: 288,
    sm: 384,
    md: 384,
    lg: 640,
    xl: 768,
};

const EmbeddedPenExercise = (props: EmbeddedPenExerciseProps) => {
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
export default EmbeddedPenExercise;
