import React from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import DrawerItems from "./DrawerItems";
import SectionMetadata from "../../model/SectionMetadata";
import { VersionText } from "../common/VersionText";

const drawerWidth = 240;

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            drawerPaper: {
                width: drawerWidth,
                [theme.breakpoints.up("md")]: {
                    transition: "0.5s",
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
    { name: "MuiMyResponsivePageDrawer" },
);

interface ResponsivePageDrawerProps {
    sectionConfigs: SectionMetadata[];
    drawerOpen: boolean;
    onDrawerClose: () => void;
}

const DrawerContent = ({ configs }: { configs: SectionMetadata[] }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.toolbar} />
            <DrawerItems configs={configs} />
            <div className={classes.versionText}>
                <VersionText />
            </div>
        </>
    );
};

const ResponsivePageDrawer = ({ sectionConfigs, drawerOpen, onDrawerClose }: ResponsivePageDrawerProps) => {
    const classes = useStyles();
    const theme = useTheme();

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
                    <DrawerContent configs={sectionConfigs} />
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open>
                    <DrawerContent configs={sectionConfigs} />
                </Drawer>
            </Hidden>
        </>
    );
};
export default ResponsivePageDrawer;
