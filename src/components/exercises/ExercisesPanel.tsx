import * as React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

import Section from "../common/Section";
import { loadExercisesSubPagesMetadata } from "@/src/services/exercises/loadExercisesSubPagesMetadata";
import { SubPagesLinksPanel } from "@/src/components/common/SubPagesLinksPanel";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            exercisesPanel: {
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
            },
        }),
    { name: "MuiMyExercisePanel" },
);

const ExercisesPanel = () => {
    const classes = useStyles();

    return (
        <Section id="exercises" hasDivider={true} title="Exercises" subtitle="Some of my previous works">
            <div className={classes.exercisesPanel}>
                <SubPagesLinksPanel
                    urlPrefix="exercises"
                    getSubPages={loadExercisesSubPagesMetadata}
                />
            </div>
        </Section>
    );
};
export default ExercisesPanel;
