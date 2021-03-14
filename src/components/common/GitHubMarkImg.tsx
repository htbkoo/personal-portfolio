import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

import GitHubMark120Plus from "img/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png";

const DEFAULT_MAX_ICON_SIZE = 16;

const useStyles = makeStyles<Theme, { size: number }>({
    icon: {
        maxWidth: ({ size }) => size,
        maxHeight: ({ size }) => size,
    },
});

export function GitHubMarkImg({ size = DEFAULT_MAX_ICON_SIZE }: { size?: number }) {
    const classes = useStyles({ size });
    return <img className={classes.icon} src={GitHubMark120Plus} alt="github-htbkoo-personal-portfolio" />;
}
