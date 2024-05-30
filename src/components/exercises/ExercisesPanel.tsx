import * as React from "react";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import Section from "../common/Section";
import RssFeedsLoader from "@/src/services/exercises/RssFeedsLoader";

const useStyles = makeStyles(
    () =>
        createStyles({
            exercisesPanel: {},
        }),
    { name: "MuiMyExercisePanel" },
);

interface ExercisePanelProps {
    exercisesLoader: RssFeedsLoader;
}

const ExercisesPanel = ({ exercisesLoader }: ExercisePanelProps) => {
    const classes = useStyles();

    return (
        <Section id="exercises" hasDivider={true} title="Exercises" subtitle="Some of my previous works">
            <div className={classes.exercisesPanel}></div>
        </Section>
    );
};
export default ExercisesPanel;
