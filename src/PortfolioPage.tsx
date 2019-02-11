import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageAppBar from "./PageAppBar";
import PortfolioDrawer from "./PortfolioDrawer";
import PortfolioMain from "./PortfolioMain";
import SectionMetadata from "./model/SectionMetadata";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
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
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

interface PortfolioPageProps extends WithStyles<typeof styles> {
    sectionConfigs: SectionMetadata[]
}

function PortfolioPage(props: PortfolioPageProps) {
    const {classes, sectionConfigs} = props;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <PageAppBar/>
            <PortfolioDrawer sectionConfigs={sectionConfigs}/>
            <PortfolioMain sectionConfigs={sectionConfigs}/>
        </div>
    );
}

export default withStyles(styles)(PortfolioPage);