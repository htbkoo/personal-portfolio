import * as React from "react";
import { useEffect, useState } from "react";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import Section from "../common/Section";
import { ExercisesFactory } from "./ExercisesFactory";

const useStyles = makeStyles(
    () =>
        createStyles({
            exercisePanel: {},
        }),
    { name: "MuiMyExercisePanel" },
);

interface ExercisePanelProps {
    exercisesFactory: ExercisesFactory;
}

const ExercisePanel = ({ exercisesFactory }: ExercisePanelProps) => {
    const classes = useStyles();

    const [exercises, setExercises] = useState<React.ReactNode>([]);

    useEffect(() => {
        exercisesFactory.createExercises().then((exercises) => setExercises(exercises));
    }, [exercisesFactory]);

    return (
        <Section id="exercise" hasDivider={true} title="Exercise" subtitle="Some of my previous works">
            <div className={classes.exercisePanel}>{exercises}</div>
        </Section>
    );
};
export default ExercisePanel;
