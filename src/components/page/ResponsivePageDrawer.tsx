import React, {Component} from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import {createStyles, WithStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import DrawerItemsWithScrollspy from "./DrawerItemsWithScrollspy";
import SectionMetadata from "../../model/SectionMetadata";
import Hidden from '@material-ui/core/Hidden';

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

interface ResponsivePageDrawerProps extends WithStyles<typeof styles, true> {
    sectionConfigs: SectionMetadata[],
    drawerOpen: boolean,
    onDrawerClose: () => void
}

class ResponsivePageDrawer extends Component<ResponsivePageDrawerProps> {
    render() {
        const {classes, sectionConfigs, theme} = this.props;

        return (
            <React.Fragment>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.props.drawerOpen}
                        onClose={this.props.onDrawerClose}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawerContent()}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawerContent()}
                    </Drawer>
                </Hidden>
            </React.Fragment>
        );

        function drawerContent() {
            return (
                <React.Fragment>
                    <div className={classes.toolbar}/>
                    <DrawerItemsWithScrollspy items={asItems(sectionConfigs)}/>
                </React.Fragment>
            )
        }
    }
}


function asItems(sectionConfigs: SectionMetadata[]): string[] {
    return sectionConfigs.map(config => config.name);
}

export default withStyles(styles, {withTheme: true})(ResponsivePageDrawer);