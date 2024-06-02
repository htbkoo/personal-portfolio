import * as React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Section from "../common/Section";
import { loadExercisesSubPagesMetadata } from "@/src/services/exercises/loadExercisesSubPagesMetadata";
import Divider from "@mui/material/Divider";
import { useSubPages } from "@/src/hooks/useSubPages";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            exercisesPanel: {
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
            },
            loadingSpinner: {
                marginTop: theme.spacing(2),
            },
            exerciseLink: {
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
            },
            exerciseLinkText: {},
        }),
    { name: "MuiMyExercisePanel" },
);

const LINK_TEXT_STYLE = {
    align: "center",
    fontSize: "1.5rem",
} as const;

const ExercisesPanelContent = () => {
    const classes = useStyles();

    const { loading, data, error } = useSubPages({ getSubPages: loadExercisesSubPagesMetadata });

    if (loading) {
        return <CircularProgress className={classes.loadingSpinner} />;
    }

    if (!data) {
        // TODO: improve this / handle error
        return null;
    }

    return (
        <>
            {Object.values(data).map(({ name, url, icon }, i) => (
                <>
                    {i > 0 && <Divider />}
                    <div className={classes.exerciseLink}>
                        <Link key={name} href={`exercises${url}`} passHref>
                            <MuiLink component="div" color="inherit" underline="always">
                                <ListItemButton tabIndex={-1}>
                                    <ListItemText
                                        primary={name}
                                        primaryTypographyProps={LINK_TEXT_STYLE}
                                        className={classes.exerciseLinkText}
                                    />
                                </ListItemButton>
                            </MuiLink>
                        </Link>
                    </div>
                </>
            ))}
        </>
    );
};

const ExercisesPanel = () => {
    const classes = useStyles();

    return (
        <Section id="exercises" hasDivider={true} title="Exercises" subtitle="Some of my previous works">
            <div className={classes.exercisesPanel}>
                <ExercisesPanelContent />
            </div>
        </Section>
    );
};
export default ExercisesPanel;
