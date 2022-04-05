import React from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import DrawerItemsWithScrollspy from "./DrawerItemsWithScrollspy";
import SectionMetadata from "../../model/SectionMetadata";
import { VersionText } from "../common/VersionText";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            width: drawerWidth,
            [theme.breakpoints.up("md")]: {
                backgroundColor: theme.palette.type === "dark" ? "#42424242" : "#FFFFFF42",
            },
        },
        toolbar: theme.mixins.toolbar,
        versionText: {
            position: "absolute",
            left: "16px",
            bottom: "16px",
        },
    }),
);

interface ResponsivePageDrawerProps {
    sectionConfigs: SectionMetadata[];
    drawerOpen: boolean;
    onDrawerClose: () => void;
}

const asItems = (sectionConfigs: SectionMetadata[]): string[] => sectionConfigs.map((config) => config.name);

const DrawerContent = ({ items }: { items: string[] }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar} />
            <DrawerItemsWithScrollspy items={items} />
            <div className={classes.versionText}>
                <VersionText />
            </div>
        </>
    );
};

const ResponsivePageDrawer = (props: ResponsivePageDrawerProps) => {
    const classes = useStyles();
    const theme = useTheme();

    const { sectionConfigs, drawerOpen, onDrawerClose } = props;
    const items = asItems(sectionConfigs);

    return (
        <>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={drawerOpen}
                    onClose={onDrawerClose}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <DrawerContent items={items} />
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open>
                    <DrawerContent items={items} />
                </Drawer>
            </Hidden>
        </>
    );
};
export default ResponsivePageDrawer;
