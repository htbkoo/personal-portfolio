import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import OldVersionLinkButton from "./OldVersionLinkButton";

const styles = (theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.down('sm')]: {
            zIndex: theme.zIndex.modal + 1,
        },
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

interface PageAppBarProps extends WithStyles<typeof styles> {
    onIconButtonClick: () => void
}

function PageAppBar(props: PageAppBarProps) {
    const {classes} = props;

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={props.onIconButtonClick}
                    className={classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap className={classNames(classes.title)}>
                    Hey's Personal Portfolio
                </Typography>
                <Hidden smDown>
                    <OldVersionLinkButton/>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(PageAppBar);