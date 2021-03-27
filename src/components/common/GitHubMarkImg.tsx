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

export interface GitHubMarkImgProps {
    /**
     * How large should the image be?
     */
    size?: number;
}

/**
 * A common img component to display the GitHub mark image (Octocat)
 */
export function GitHubMarkImg({ size = DEFAULT_MAX_ICON_SIZE }: GitHubMarkImgProps) {
    const classes = useStyles({ size });
    return <img className={classes.icon} src={GitHubMark120Plus} alt="github-htbkoo-personal-portfolio" />;
}
