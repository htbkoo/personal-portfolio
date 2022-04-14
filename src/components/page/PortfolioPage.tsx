import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PageAppBar from "./PageAppBar";
import PageDrawer from "./ResponsivePageDrawer";
import PageMain from "./PageMain";
import SectionMetadata from "../../model/SectionMetadata";

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

interface PortfolioPageProps {
    sectionConfigs: SectionMetadata[];
}

const PortfolioPage = ({ sectionConfigs }: PortfolioPageProps) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);

    const classes = useStyles();

    return (
        <div className={classes.root}>
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
export default PortfolioPage;
