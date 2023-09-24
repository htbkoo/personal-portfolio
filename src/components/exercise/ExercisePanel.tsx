import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import Section from "../common/Section";
import RssFeedsLoader from "@/src/services/exercise/RssFeedsLoader";

const useStyles = makeStyles(
    () =>
        createStyles({
            exercisePanel: {},
        }),
    { name: "MuiMyExercisePanel" },
);

interface ExercisePanelProps {
    exercisesLoader: RssFeedsLoader;
}

const ExercisePanel = ({ exercisesLoader }: ExercisePanelProps) => {
    const classes = useStyles();

    return (
        <Section id="exercise" hasDivider={true} title="Exercise" subtitle="Some of my previous works">
            <div className={classes.exercisePanel}></div>
        </Section>
    );
};
export default ExercisePanel;
