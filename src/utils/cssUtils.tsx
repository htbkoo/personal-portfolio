import { Theme } from "@material-ui/core";

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
            return theme.spacing(3) + minHeight;
        } else {
            return minHeight;
        }
    } else {
        return theme.spacing(3);
    }
}
