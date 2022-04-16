import React from "react";
import { Link, makeStyles } from "@material-ui/core";

import { GitHubMarkImg, useGitHubMarkImgColorBasedOnTheme } from "./GitHubMarkImg";
import { version } from "../../../package.json";

const LINK_TO_GITHUB_REPO = "https://github.com/htbkoo/personal-portfolio";

const useStyles = makeStyles(
    (theme) => ({
        container: {
            display: "flex",
            flexDirection: "row",
        },
        linkIconContainer: {
            marginLeft: theme.spacing(1),
        },
    }),
    { name: "MuiMyVersionText" },
);

export function VersionText() {
    const classes = useStyles();

    return (
        <Link
            color="inherit"
            underline="always"
            href={LINK_TO_GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer">
            <div className={classes.container}>
                <div>
                    v{version}-{process.env.NEXT_PUBLIC_GIT_SHA}
                </div>
                <div className={classes.linkIconContainer}>
                    <GitHubMarkImg color={useGitHubMarkImgColorBasedOnTheme()} />
                </div>
            </div>
        </Link>
    );
}
