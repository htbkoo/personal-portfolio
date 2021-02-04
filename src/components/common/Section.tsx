import * as React from "react";
import {FunctionComponent} from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = (theme: Theme) => createStyles({
    section: {
        padding: theme.spacing(3)
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

Section.defaultProps = {
    hasDivider: false
};

export default withStyles(styles)(Section);