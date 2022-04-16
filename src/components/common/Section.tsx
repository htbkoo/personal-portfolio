import * as React from "react";
import { PropsWithChildren } from "react";
import { makeStyles, Theme, TypographyTypeMap } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";

import { getStylesToFixPageHeaderOverlappingInPageAnchorIssue } from "../../utils/cssUtils";

const useStyles = makeStyles(
    (theme: Theme) => ({
        section: {
            padding: theme.spacing(3),
            ...getStylesToFixPageHeaderOverlappingInPageAnchorIssue(theme),
        },
        header: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            filter: "opacity(0.75)",
        },
        body: {},
        opaqueBody: {
            filter: "opacity(0.75)",
        },
    }),
    { name: "MuiMySection" },
);

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    hasDivider?: boolean;
    isBodyOpaque?: boolean;
}

const Section = ({
                     id,
                     title,
                     subtitle,
                     hasDivider = false,
                     isBodyOpaque = false,
                     children,
                 }: PropsWithChildren<SectionProps>) => {
    const classes = useStyles();
    return (
        <div id={id} className={classes.section}>
            <div className={classes.header}>
                {optionalTitle(title)}
                {optionalSubtitle(subtitle)}
            </div>
            {optionalDivider(hasDivider)}
            <div className={classNames(classes.body, { [classes.opaqueBody]: isBodyOpaque })}>{children}</div>
        </div>
    );
};
export default Section;

function optionalTitle(title?: string) {
    return optionalTypography({ text: title, variant: "h3" });
}

function optionalSubtitle(subtitle?: string) {
    return optionalTypography({ text: subtitle, variant: "h5" });
}

function optionalTypography({
    text,
    variant,
}: {
    text?: string;
    variant: TypographyTypeMap["props"]["variant"];
}) {
    return text ? (
        <Typography variant={variant} paragraph>
            {text}
        </Typography>
    ) : (
        ""
    );
}

function optionalDivider(hasDivider?: boolean) {
    return hasDivider ? <Divider /> : "";
}
