import React, { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core";
import CircularProgress, { CircularProgressProps } from "@material-ui/core/CircularProgress";
import LinearProgress, { LinearProgressProps } from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import Section from "@/src/components/common/Section";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            pomodoroTracker: {
                padding: theme.spacing(3),
            },
            form: {},
            timerContainer: {
                marginTop: theme.spacing(8),
            },
            timer: {
                height: theme.spacing(3),
            },
        }),
    { name: "MuiMyPomodoroTracker" },
);

const CircularProgressWithLabel = (
    props: CircularProgressProps & {
        value: number;
    },
) => (
    <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Typography variant="caption" component="div" color="textSecondary">
                {Math.round(props.value)}%
            </Typography>
        </Box>
    </Box>
);

const LinearProgressWithLabel = (
    props: LinearProgressProps & {
        text?: string;
    },
) => {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} className={classes.timer} />
            </Box>
            {props.text && (
                <Box minWidth={35}>
                    <Typography variant="h3" color="textSecondary">
                        {props.text}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

const SECONDS_IN_ONE_MINUTE = 60;

const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / SECONDS_IN_ONE_MINUTE);
    const remainSeconds = seconds % SECONDS_IN_ONE_MINUTE;
    return `${minutes.toString().padStart(2, "0")}:${remainSeconds.toString().padStart(2, "0")}`;
};

const PomodoroTracker = () => {
    const classes = useStyles();

    const DEFAULT_POMODORO_DURATION = 25;
    const DEFAULT_BREAK_DURATION = 5;

    const [pomodoroDuration, setPomodoroDuration] = useState(DEFAULT_POMODORO_DURATION);
    const [breakDuration, setBreakDuration] = useState(DEFAULT_BREAK_DURATION);
    const [isTimerRunning, setTimerRunning] = useState(false);
    const [remainSeconds, setRemainSeconds] = useState(DEFAULT_POMODORO_DURATION * SECONDS_IN_ONE_MINUTE);

    const timeoutRef = useRef<ReturnType<typeof setInterval>>();

    const handleDurationChange: (
        setter: Dispatch<SetStateAction<number>>,
    ) => React.ChangeEventHandler<HTMLInputElement> = useCallback(
        (setter) => (event) => {
            try {
                const parsedValue = parseInt(event.target.value);
                if (parsedValue > 0) {
                    setter(parsedValue);
                }
            } catch (e) {}
        },
        [],
    );

    const handleStartClick = useCallback(() => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current);
        }
        if (!isTimerRunning) {
            timeoutRef.current = setInterval(() => {
                setRemainSeconds((s) => s - 1);
            }, 1000);
        }
        setTimerRunning((r) => !r);
    }, [isTimerRunning]);

    const handleResetClick = useCallback(() => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current);
        }
        setTimerRunning(false);
        setRemainSeconds(pomodoroDuration * SECONDS_IN_ONE_MINUTE);
    }, [pomodoroDuration]);

    const timerPercentage = (remainSeconds / (pomodoroDuration * SECONDS_IN_ONE_MINUTE)) * 100;

    const timerText = formatTime(remainSeconds);
    return (
        <Section
            id="pomodoro"
            hasDivider={true}
            title="Pomodoro Tracker"
            subtitle="A simple tracking tools for the pomodoro technique">
            <div className={classes.pomodoroTracker}>
                <form className={classes.form} autoComplete="off">
                    <TextField
                        id="input--pomodoro-duration"
                        label="Pomodoro duration"
                        helperText="in minutes"
                        variant="filled"
                        type="number"
                        value={pomodoroDuration}
                        onChange={handleDurationChange(setPomodoroDuration)}
                        fullWidth
                        disabled={isTimerRunning}
                    />
                    <TextField
                        id="input--break-duration"
                        label="Break duration"
                        helperText="in minutes"
                        variant="filled"
                        type="number"
                        value={breakDuration}
                        onChange={handleDurationChange(setBreakDuration)}
                        fullWidth
                        disabled={isTimerRunning}
                    />

                    <Button variant="contained" color="primary" onClick={handleStartClick}>
                        {isTimerRunning ? "Pause" : "Start"}
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleResetClick}>
                        Reset
                    </Button>
                </form>
                <div className={classes.timerContainer}>
                    <LinearProgressWithLabel value={timerPercentage} text={timerText} />
                </div>
            </div>
        </Section>
    );
};
export default PomodoroTracker;
