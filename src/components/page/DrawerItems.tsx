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
        drawerSubList: {
            marginLeft: theme.spacing(2),
        },
    }),
    { name: "MuiMyDrawerItems" },
);

interface DrawerItemProps {
    config: SectionMetadata;
    urlPrefix?: string;
    layer?: number;
}

const DrawerItem = ({
    config: { name, url, icon, subPages },
    urlPrefix = "",
    layer = 0,
}: DrawerItemProps) => {
    const classes = useStyles();

    const { pathname } = useRouter();

    const actualUrl = urlPrefix + url;
    const isCurrentListItem = actualUrl === "/" ? pathname === actualUrl : pathname.startsWith(actualUrl);
    return (
        <>
            <Link key={name} href={actualUrl} passHref>
                <MuiLink
                    component="div"
                    color="inherit"
                    underline="always"
                    className={classNames(classes.drawerListItem, {
                        [classes.isCurrent]: isCurrentListItem,
                    })}>
                    <ListItem button tabIndex={-1}>
                        {/*{layer > 0 && <div style={{ width: `${layer * 16}px` }} />}*/}
                        <ListItemIcon style={{marginLeft: `${layer * 16}px`}}>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem>
                </MuiLink>
            </Link>
            {isCurrentListItem && subPages && (
                // <div className={classNames(classes.drawerSubList)}>
                //     {
                        Object.values(subPages).map((subPage) => (
                        <DrawerItem config={subPage} urlPrefix={url} layer={layer + 1} />
                    ))
                    // }
                // </div>
            )}
        </>
    );
};

interface DrawerItemsProps {
    configs: SectionMetadata[];
}

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
