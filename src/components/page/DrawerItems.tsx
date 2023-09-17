import React from "react";
import { Theme } from "@mui/material/styles";
import { Link as MuiLink } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
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

interface DrawerItemsProps {
    configs: SectionMetadata[];
}

const DrawerItem = ({ config: { name, url, icon } }: { config: SectionMetadata }) => {
    const classes = useStyles();

    const { pathname } = useRouter();

    const isCurrentListItem = url === "/" ? pathname === url : pathname.startsWith(url);
    return (
        <Link key={name} href={url} passHref>
            <MuiLink
                component="div"
                color="inherit"
                underline="always"
                className={classNames(classes.drawerListItem, {
                    [classes.isCurrent]: isCurrentListItem,
                })}>
                <ListItem button tabIndex={-1}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            </MuiLink>
        </Link>
    );
};

const DrawerItems = ({ configs }: DrawerItemsProps) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {configs.map((config) => (
                <DrawerItem key={config.name} config={config} />
            ))}
            <Hidden mdUp>
                <div className={classes.oldVersionLinkButton}>
                    <OldVersionLinkButton />
                </div>
            </Hidden>
        </React.Fragment>
    );
};
export default DrawerItems;
