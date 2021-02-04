import React, { Component } from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import { createStyles, WithStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageAppBar from "./PageAppBar";
import PageDrawer from "./ResponsivePageDrawer";
import PageMain from "./PageMain";
import SectionMetadata from "../../model/SectionMetadata";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    main: {
        width: "100%"
    }
});

interface PortfolioPageProps extends WithStyles<typeof styles> {
    sectionConfigs: SectionMetadata[]
}


interface PortfolioPageState {
    drawerOpen: boolean
}

class PortfolioPage extends Component<PortfolioPageProps, PortfolioPageState> {
    state = { drawerOpen: false };

    private handleDrawerToggle = () => this.setState(state => ({ drawerOpen: !state.drawerOpen }));

    render() {
        const { classes, sectionConfigs } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <div>
                    <PageAppBar onIconButtonClick={this.handleDrawerToggle}/>
                </div>
                <nav className={classes.drawer}>
                    <PageDrawer
                        sectionConfigs={sectionConfigs}
                        drawerOpen={this.state.drawerOpen}
                        onDrawerClose={this.handleDrawerToggle}
                    />
                </nav>
                <div className={classes.main}>
                    <PageMain sectionConfigs={sectionConfigs}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PortfolioPage);
