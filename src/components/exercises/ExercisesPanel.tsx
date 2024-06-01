import * as React from "react";
import { useEffect, useState } from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { SubPagesType } from "@/src/model/SectionMetadata";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import classNames from "classnames";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { parsePxValue } from "@/src/utils/cssUtils";
import ListItemText from "@mui/material/ListItemText";

import Section from "../common/Section";
import { loadExercisesSubPagesMetadata } from "@/src/services/exercises/loadExercisesSubPagesMetadata";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            exercisesPanel: {
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
            },
            loadingSpinner: {
                paddingTop: theme.spacing(2),
            },
            exerciseLink: {
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
            },
            exerciseLinkText: {
                // textAlign: "center",
            },
        }),
    { name: "MuiMyExercisePanel" },
);

interface SubPagesMetadataDataType {
    loading: boolean;
    data: SubPagesType | null;
    error: any | null;
}

const useExercisesSubPagesMetadata = () => {
    const [{ data, error, loading }, setState] = useState<SubPagesMetadataDataType>({
        loading: true,
        data: null,
        error: null,
    });

    useEffect(() => {
        loadExercisesSubPagesMetadata()
            .then((res) => {
                setState({ loading: false, data: res.data, error: res.error });
            })
            .catch((error) => {
                setState({ loading: false, error, data: null });
            });
    }, []);

    return { loading, data, error };
};

const ExercisesPanelContent = () => {
    const classes = useStyles();

    const { loading, data, error } = useExercisesSubPagesMetadata();

    if (loading) {
        return <CircularProgress className={classes.loadingSpinner} />;
    }

    if (!data) {
        console.log(`no data?`);
        // TODO: improve this
        return null;
    }

    // TODO: eliminate duplication with `<DrawerItems/>`
    return (
        <>
            {Object.values(data).map(({ name, url, icon }, i) => (
                <>
                    {i > 0 && <Divider />}
                    <div className={classes.exerciseLink}>
                        <Link key={name} href={`exercises${url}`} passHref>
                            <MuiLink component="div" color="inherit" underline="always">
                                {/*<ListItemButton component="a" href={`exercises${url}`} tabIndex={-1}>*/}
                                <ListItemButton tabIndex={-1}>
                                    <ListItemText
                                        primary={name}
                                        primaryTypographyProps={{
                                            align: "center",
                                            fontSize: "1.5rem",
                                        }}
                                        className={classes.exerciseLinkText}
                                    />
                                </ListItemButton>
                            </MuiLink>
                        </Link>
                    </div>
                </>
                // <div>
                //     <Button
                //         key={name}
                //         component={NextLinkComposed}
                //         to={{
                //             pathname: `exercises${url}`,
                //             // query: {name: 'test'},
                //         }}>
                //         {name}
                //     </Button>
                // </div>
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
