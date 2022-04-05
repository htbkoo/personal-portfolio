import React from "react";
import { Theme } from "@material-ui/core/styles";
import { Link, makeStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Scrollspy from "react-scrollspy";
import Hidden from "@material-ui/core/Hidden";

import OldVersionLinkButton from "./OldVersionLinkButton";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
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
        padding: 0,
    },
    scrollSpyListItem: {
        display: "flex",
    },
    oldVersionLinkButton: {
        margin: "5%",
    },
    isCurrent: {
        fontWeight: "bolder",
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.light,
    },
}));

interface DrawerItemsWithScrollspyProps {
    items: string[];
}

const EMPIRICAL_OFFSET = -80;

const DrawerItemsWithScrollspy = (props: DrawerItemsWithScrollspyProps) => {
    const classes = useStyles();
    const { items } = props;

    return (
        <React.Fragment>
            <Scrollspy
                items={items.map((item) => item.toLowerCase())} // TODO: refactor this
                currentClassName={classes.isCurrent}
                className={classes.scrollSpyList}
                offset={EMPIRICAL_OFFSET}>
                {items.map((text, index) => (
                    <Link
                        color="inherit"
                        underline="always"
                        key={text}
                        href={itemToHref(text)}
                        className={classes.scrollSpyListItem}>
                        <ListItem button>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </Scrollspy>
            <Hidden mdUp>
                <div className={classes.oldVersionLinkButton}>
                    <OldVersionLinkButton />
                </div>
            </Hidden>
        </React.Fragment>
    );
};
export default DrawerItemsWithScrollspy;

function itemToHref(item: string): string {
    return `#${item.replace(/ /g, "-").toLowerCase()}`;
}
