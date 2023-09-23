import React, { useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import { Link as MuiLink } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

import SectionMetadata, { SubPagesType } from "@/src/model/SectionMetadata";
import { parsePxValue } from "@/src/utils/cssUtils";

import OldVersionLinkButton from "./OldVersionLinkButton";

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
        isSecondaryCurrent: {
            fontWeight: "bolder",
            color: theme.palette.info.contrastText,
            backgroundColor: theme.palette.info.dark,
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

const useSubPages = ({
    getSubPages,
    skip = false,
}: {
    getSubPages: SectionMetadata["getSubPages"];
    skip?: boolean;
}) => {
    const [subPages, setSubPages] = useState<SubPagesType | undefined>(undefined);

    useEffect(() => {
        if (!skip) {
            getSubPages?.()?.then(({ data, error }) => {
                // TODO: handling loading and error
                setSubPages(data);
            });
        }
    }, [getSubPages, skip]);

    return subPages;
};

const DrawerItem = ({
    config: { name, url, icon, getSubPages },
    urlPrefix = "",
    layer = 0,
}: DrawerItemProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const { asPath } = useRouter();

    const actualUrl = urlPrefix + url;
    const isCurrentListItem = actualUrl === "/" ? asPath === actualUrl : asPath.startsWith(actualUrl);

    const subPages = useSubPages({
        getSubPages,
        skip: !isCurrentListItem,
    });

    return (
        <>
            <Link key={name} href={actualUrl} passHref>
                <MuiLink
                    component="div"
                    color="inherit"
                    underline="always"
                    className={classNames(classes.drawerListItem, {
                        [classes.isCurrent]: isCurrentListItem && layer === 0,
                        [classes.isSecondaryCurrent]: isCurrentListItem && layer > 0,
                    })}>
                    <ListItem button tabIndex={-1}>
                        <ListItemIcon style={{ marginLeft: `${layer * parsePxValue(theme.spacing(2))}px` }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem>
                </MuiLink>
            </Link>
            {isCurrentListItem &&
                subPages &&
                Object.values(subPages).map((subPage) => (
                    <DrawerItem key={subPage.name} config={subPage} urlPrefix={url} layer={layer + 1} />
                ))}
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
