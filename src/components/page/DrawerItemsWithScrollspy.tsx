import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Scrollspy from 'react-scrollspy';
import Hidden from '@material-ui/core/Hidden';

import OldVersionLinkButton from "./OldVersionLinkButton";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    scrollSpyList: {
        margin: 0,
        padding: 0
    },
    scrollSpyListItem: {
        display: 'flex',
    },
    oldVersionLinkButton: {
        margin: "5%"
    },
    isCurrent: {
        fontWeight: "bolder",
        color: "#770077",
        backgroundColor: "#dadaff"
    }
});

interface DrawerItemsWithScrollspyProps extends WithStyles<typeof styles> {
    items: string[],
}

function DrawerItemsWithScrollspy(props: DrawerItemsWithScrollspyProps) {
    const {items, classes} = props;

    return (
        <React.Fragment>
            <Scrollspy
                items={items.map(item => item.toLowerCase())}  // TODO: refactor this
                currentClassName={classes.isCurrent}
                className={classes.scrollSpyList}
            >
                {items.map((text, index) => (
                    <a key={text} href={itemToHref(text)} className={classes.scrollSpyListItem}>
                        <ListItem button>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </Scrollspy>
            <Hidden mdUp>
                <div className={classes.oldVersionLinkButton}>
                    <OldVersionLinkButton/>
                </div>
            </Hidden>
        </React.Fragment>
    );
}

function itemToHref(item: string): string {
    return `#${item.replace(/ /g, "-").toLowerCase()}`;
}

export default withStyles(styles)(DrawerItemsWithScrollspy);
