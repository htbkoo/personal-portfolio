import styles from "@/styles/PortfolioPageShell.module.css";

import React, { ReactNode, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PageAppBar from "./PageAppBar";
import PageDrawer from "./ResponsivePageDrawer";
import PageMain from "./PageMain";
import TransitionLayout from "@/src/components/TransitionLayout";
import SectionConfigs, { PageType } from "@/src/metadata/sectionConfigs";

const drawerWidth = 240;

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
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
    { name: "MuiMyPortfolioPageShell" },
);

const DRAWER_ITEMS: Array<PageType> = ["about", "portfolio", "contact"];

const sectionConfigs = DRAWER_ITEMS.map((page) => SectionConfigs[page]);

const PortfolioPageShell = ({ children }: { children: ReactNode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);

    const classes = useStyles();

    return (
        <div className={styles.App}>
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
                <TransitionLayout>
                    <PageMain>{children}</PageMain>
                </TransitionLayout>
            </div>
        </div>
    );
};
export default PortfolioPageShell;
