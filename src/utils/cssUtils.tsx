import { Theme } from "@mui/material";

const parsePxValue = (valuePx: string): number =>
    valuePx.endsWith("px") ? parseInt(valuePx.substring(0, valuePx.length - 2)) : parseInt(valuePx);

export function getStylesToFixPageHeaderOverlappingInPageAnchorIssue(theme: Theme) {
    // To fix the AppBar overlapping in-page anchors issue
    // Reference: https://stackoverflow.com/a/13117744
    const padding = getPaddingTopForSection(theme);
    return {
        paddingTop: padding,
        marginTop: -padding,
    };
}

function getPaddingTopForSection(theme: Theme): string | number {
    const minHeight = theme.mixins.toolbar.minHeight;

    if (minHeight) {
        if (typeof minHeight === "number") {
            return parsePxValue(theme.spacing(3)) + minHeight;
        } else {
            return minHeight;
        }
    } else {
        return theme.spacing(3);
    }
}
