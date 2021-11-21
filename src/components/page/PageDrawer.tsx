import React from "react";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";

import DrawerItemsWithScrollspy from "./DrawerItemsWithScrollspy";
import SectionMetadata from "../../model/SectionMetadata";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

interface PageDrawerProps {
    sectionConfigs: SectionMetadata[];
}

export default (props: PageDrawerProps) => {
    const classes = useStyles();
    const { sectionConfigs } = props;

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.toolbar} />

            <DrawerItemsWithScrollspy items={asItems(sectionConfigs)} />
        </Drawer>
    );
};

function asItems(sectionConfigs: SectionMetadata[]): string[] {
    return sectionConfigs.map((config) => config.name);
}
