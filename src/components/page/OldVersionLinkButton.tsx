import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) => createStyles({
    linkButton: {
        display: "none",
        // Match [sm, ∞[
        //       [600px, ∞[
        [theme.breakpoints.up('sm')]: {
            display: "unset",
        },
        // Match [md, ∞[
        //       [960px, ∞[
        [theme.breakpoints.up('md')]: {
            display: "unset",
        },
    }
});

interface OldVersionLinkButtonProps extends WithStyles<typeof styles> {
}

const OLD_VERSION_URL = "https://codepen.io/htbkoo/full/ZyYWNN/";

function OldVersionLinkButton(props: OldVersionLinkButtonProps) {
    const {classes} = props;
    return (
        <Button href={OLD_VERSION_URL} variant="contained" color="inherit" className={classes.linkButton}>
            Switch To old version
        </Button>
    );
}

export default withStyles(styles)(OldVersionLinkButton);