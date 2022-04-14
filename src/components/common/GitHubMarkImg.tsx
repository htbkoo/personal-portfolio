import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import Image from "next/image";

const GitHubMark120Plus = require("@/public/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png").default;
const GitHubMarkLight120Plus = require("@/public/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png").default;

const DEFAULT_MAX_ICON_SIZE = 16;
const DEFAULT_IS_LIGHT = "black";

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
    const src = getGitHubMarkImgSrc(color);
    return <Image
        src={src}
        alt="github-htbkoo-personal-portfolio"
        width={size}
        height={size}
    />;
}

export function getGitHubMarkImgSrc(color: GitHubMarkImgProps["color"]) {
    return color === "black" ? GitHubMark120Plus : GitHubMarkLight120Plus;
}

export function useGitHubMarkImgColorBasedOnTheme(){
    const theme = useTheme();
    return theme.palette.type === "dark" ? "white" : "black"
}
