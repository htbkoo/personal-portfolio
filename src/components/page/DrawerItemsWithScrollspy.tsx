import React from "react";
import { Theme } from "@material-ui/core/styles";
import { Link as MuiLink, makeStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

import OldVersionLinkButton from "./OldVersionLinkButton";
import SectionMetadata from "@/src/model/SectionMetadata";

const drawerWidth = 240;

const useStyles = makeStyles(
    (theme: Theme) => ({
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
        drawerListItem: {
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
    }),
    { name: "MuiMyDrawerItems" },
);

interface DrawerItemsWithScrollspyProps {
    configs: SectionMetadata[];
}

const DrawerItemsWithScrollspy = (props: DrawerItemsWithScrollspyProps) => {
    const classes = useStyles();
    const { configs } = props;

    const { pathname } = useRouter();

    return (
        <React.Fragment>
            {configs.map(({ name, url }, index) => (
                <Link key={name} href={url} passHref>
                    <MuiLink
                        component="div"
                        color="inherit"
                        underline="always"
                        className={classNames(classes.drawerListItem, {
                            [classes.isCurrent]: pathname === url,
                        })}>
                        <ListItem button tabIndex={-1}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </MuiLink>
                </Link>
            ))}
            <Hidden mdUp>
                <div className={classes.oldVersionLinkButton}>
                    <OldVersionLinkButton />
                </div>
            </Hidden>
        </React.Fragment>
    );
};
export default DrawerItemsWithScrollspy;
