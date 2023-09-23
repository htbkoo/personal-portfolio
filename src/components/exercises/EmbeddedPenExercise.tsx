import * as React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Breakpoint } from '@mui/material/styles';
import CodePen from "ts-react-codepen-embed";
import CircularProgress from "@mui/material/CircularProgress";

import { ExerciseProps } from "./ExerciseProps";
import CodePenItemContentParser from "@/src/services/exercises/CodePenItemContentParser";
import { credentialsExtractor } from "@/src/services/exercises/CodePenItemContentExtractor";
import { useWidth } from "../../hooks/muiHooks";
import { useCodepenEmbedScriptTag } from "@/src/hooks/useCodepenEmbedScriptTag";

const useStyles = makeStyles(
    () => ({
        embeddedContainer: {
            margin: "5%",
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

const MAPPING_HEIGHTS: { [b in Breakpoint]: number } = {
    xs: 288,
    sm: 384,
    md: 384,
    lg: 640,
    xl: 768,
};

const EmbeddedPenExercise = ({ title, content }: ExerciseProps) => {
    const classes = useStyles();
    const width = useWidth();

    const { loaded } = useCodepenEmbedScriptTag();

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
                overrideAsLoaded={loaded}
            />
        </div>
    );
};
export default EmbeddedPenExercise;
