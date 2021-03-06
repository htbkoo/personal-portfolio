import React from "react";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { GitHubMarkImg } from "./GitHubMarkImg";
import { version } from "../../../package.json";

const LINK_TO_GITHUB_REPO = "https://github.com/htbkoo/personal-portfolio";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    linkIconContainer: {
        marginLeft: theme.spacing(1),
    },
}));

export function VersionText() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <a href={LINK_TO_GITHUB_REPO} target="_blank" rel="noopener noreferrer">
            <div className={classes.container}>
                <div>
                    v{version}-{process.env.REACT_APP_GIT_SHA}
                </div>
                <div className={classes.linkIconContainer}>
                    <GitHubMarkImg color={theme.palette.type === "dark" ? "white" : "black"} />
                </div>
            </div>
        </a>
    );
}
