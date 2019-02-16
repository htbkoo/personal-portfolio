import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import OldVersionLinkButton from "./OldVersionLinkButton";

const styles = (theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
    },
});

interface PageAppBarProps extends WithStyles<typeof styles> {
}

function PageAppBar(props: PageAppBarProps) {
    const {classes} = props;

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap className={classNames(classes.title)}>
                    Hey's Personal Portfolio
                </Typography>
                <OldVersionLinkButton/>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(PageAppBar);