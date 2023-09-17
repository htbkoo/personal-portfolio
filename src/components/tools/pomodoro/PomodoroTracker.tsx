import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import Section from "@/src/components/common/Section";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            pomodoroTracker: {
                padding: theme.spacing(3),
            },
        }),
    { name: "MuiMyPomodoroTracker" },
);

const PomodoroTracker = () => {
    const classes = useStyles();

    return (
        <Section
            id="pomodoro"
            hasDivider={true}
            title="Pomodoro Tracker"
            subtitle="A simple tracking tools for the pomodoro technique">
            <div className={classes.pomodoroTracker}>Pomodoro</div>
        </Section>
    );
};
export default PomodoroTracker;
