import * as React from "react";
import {FunctionComponent} from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {ThemeStyle} from "@material-ui/core/styles/createTypography";

const styles = (theme: Theme) => createStyles({
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
    <div id={id}>
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

type Variant = ThemeStyle | 'srOnly' | 'inherit';

function optionalTypography({text, variant}: { text?: string, variant: Variant }) {
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