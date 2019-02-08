import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import DrawerItemsWithScrollspy from "./DrawerItemsWithScrollspy";
import SectionMetadata from "./model/SectionMetadata";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

interface PortfolioDrawerProps extends WithStyles<typeof styles> {
    sectionConfigs: SectionMetadata[]
}

function PortfolioDrawer(props: PortfolioDrawerProps) {
    const {classes, sectionConfigs} = props;

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar}/>

            <DrawerItemsWithScrollspy items={asItems(sectionConfigs)}/>

        </Drawer>
    );
}

function asItems(sectionConfigs: SectionMetadata[]): string[] {
    return sectionConfigs.map(config => config.name);
}

export default withStyles(styles)(PortfolioDrawer);