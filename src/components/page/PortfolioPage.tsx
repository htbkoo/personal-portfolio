import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageAppBar from "./PageAppBar";
import PageDrawer from "./PageDrawer";
import PageMain from "./PageMain";
import SectionMetadata from "../../model/SectionMetadata";
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
});

interface PortfolioPageProps extends WithStyles<typeof styles> {
    sectionConfigs: SectionMetadata[]
}

function PortfolioPage(props: PortfolioPageProps) {
    const {classes, sectionConfigs} = props;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <div>
                <PageAppBar/>
            </div>
            <Hidden smDown>
                <div>
                    <PageDrawer sectionConfigs={sectionConfigs}/>
                </div>
            </Hidden>
            <div>
                <PageMain sectionConfigs={sectionConfigs}/>
            </div>
        </div>
    );
}

export default withStyles(styles)(PortfolioPage);