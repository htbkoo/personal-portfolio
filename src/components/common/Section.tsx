import * as React from "react";
import {FunctionComponent} from "react";
import { createStyles, Theme, TypographyTypeMap, withStyles, WithStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = (theme: Theme) => createStyles({
    section: {
        padding: theme.spacing(3),
        ...getStylesToFixPageHeaderOverlappingInPageAnchorIssue(theme),
    },
    header: {},
    body: {},
});

interface SectionProps extends WithStyles<typeof styles> {
    id: string,
    title?: string,
    subtitle?: string,
    hasDivider?: boolean,
}

const Section: FunctionComponent<SectionProps> = ({id, title, subtitle, hasDivider, children, classes}) => (
    <div id={id} className={classes.section}>
        <div className={classes.header}>
            {optionalTitle(title)}
            {optionalSubtitle(subtitle)}
        </div>
        {optionalDivider(hasDivider)}
        <div className={classes.body}>
            {children}
        </div>
    </div>
);

function optionalTitle(title?: string) {
    return optionalTypography({text: title, variant: "h3"});
}

function optionalSubtitle(subtitle?: string) {
    return optionalTypography({text: subtitle, variant: "h5"});
}

function optionalTypography({text, variant}: { text?: string, variant: TypographyTypeMap["props"]["variant"] }) {
    return text
        ? <Typography variant={variant} paragraph>{text}</Typography>
        : "";
}

function optionalDivider(hasDivider?: boolean) {
    return hasDivider
        ? <Divider/>
        : "";
}

function getStylesToFixPageHeaderOverlappingInPageAnchorIssue(theme: Theme) {
    // To fix the AppBar overlapping in-page anchors issue
    // Reference: https://stackoverflow.com/a/13117744
    const padding = getPaddingTopForSection(theme);
    return {
        paddingTop: padding,
        marginTop: -padding,
    }
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

Section.defaultProps = {
    hasDivider: false
};

export default withStyles(styles)(Section);
