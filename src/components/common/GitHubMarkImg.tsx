import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

import GitHubMark120Plus from "img/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png";
import GitHubMarkLight120Plus from "img/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png";

const DEFAULT_MAX_ICON_SIZE = 16;
const DEFAULT_IS_LIGHT = "black";

const useStyles = makeStyles<Theme, { size: number }>({
    icon: {
        maxWidth: ({ size }) => size,
        maxHeight: ({ size }) => size,
    },
});

type GitHubMarkImgColor = "white" | "black";

export interface GitHubMarkImgProps {
    /**
     * How large should the image be?
     */
    size?: number;
    color?: GitHubMarkImgColor;
}

/**
 * A common img component to display the GitHub mark image (Octocat)
 */
export function GitHubMarkImg({
    size = DEFAULT_MAX_ICON_SIZE,
    color = DEFAULT_IS_LIGHT,
}: GitHubMarkImgProps) {
    const classes = useStyles({ size });
    const src = color === "black" ? GitHubMark120Plus : GitHubMarkLight120Plus;
    return <img className={classes.icon} src={src} alt="github-htbkoo-personal-portfolio" />;
}
