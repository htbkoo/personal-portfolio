import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const styles = (theme: Theme) => createStyles({
});

interface OldVersionLinkButtonProps extends WithStyles<typeof styles> {
}

const OLD_VERSION_URL = "https://codepen.io/htbkoo/full/ZyYWNN/";

function OldVersionLinkButton(props: OldVersionLinkButtonProps) {
    return (
        <Hidden xsDown>
            <Button href={OLD_VERSION_URL} variant="contained" color="inherit">
                Switch to old version
            </Button>
        </Hidden>
    );
}

export default withStyles(styles)(OldVersionLinkButton);