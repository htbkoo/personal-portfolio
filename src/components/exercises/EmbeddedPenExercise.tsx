import * as React from "react";
import makeStyles from "@mui/styles/makeStyles";
import CircularProgress from "@mui/material/CircularProgress";
import CodePen from "ts-react-codepen-embed";

import { ExerciseProps } from "./ExerciseProps";
import CodePenItemContentParser from "@/src/services/exercises/CodePenItemContentParser";
import { credentialsExtractor } from "@/src/services/exercises/CodePenItemContentExtractor";
import { useCodepenEmbedScriptTag } from "@/src/hooks/useCodepenEmbedScriptTag";
import Section from "@/src/components/common/Section";

const useStyles = makeStyles(
    (theme) => ({
        embeddedContainer: {
            marginTop: theme.spacing(4),
        },
    }),
    { name: "MuiMyEmbeddedPenPortfolio" },
);

const EmbeddedPenExercise = ({ title, content }: ExerciseProps) => {
    const classes = useStyles();

    const { loaded } = useCodepenEmbedScriptTag();

    const contentParser = CodePenItemContentParser.newParser(content);
    const { user, hash } = contentParser.parseContent(credentialsExtractor);

    return (
        <Section id="codePenExercise" hasDivider={true} title={title}>
            <div className={classes.embeddedContainer}>
                <CodePen
                    user={user}
                    hash={hash}
                    title={title}
                    height={0.75 * window.screen.availHeight}
                    loader={() => <CircularProgress />}
                    defaultTab="result"
                    shouldLoadScript={false}
                    overrideAsLoaded={loaded}
                />
            </div>
        </Section>
    );
};
export default EmbeddedPenExercise;
