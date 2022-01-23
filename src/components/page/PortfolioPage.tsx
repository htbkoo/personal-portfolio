import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import PageAppBar from "./PageAppBar";
import PageDrawer from "./ResponsivePageDrawer";
import PageMain from "./PageMain";
import sectionConfigs from "metadata/sectionConfigs";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        drawer: {
            [theme.breakpoints.up("md")]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        main: {
            width: "100%",
        },
    }),
);

export default () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div>
                <PageAppBar onIconButtonClick={handleDrawerToggle} />
            </div>
            <nav className={classes.drawer}>
                <PageDrawer
                    sectionConfigs={sectionConfigs}
                    drawerOpen={drawerOpen}
                    onDrawerClose={handleDrawerToggle}
                />
            </nav>
            <div className={classes.main}>
                <PageMain sectionConfigs={sectionConfigs} />
            </div>
        </div>
    );
};
