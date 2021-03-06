import React, { Component } from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import { createStyles, WithStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import DrawerItemsWithScrollspy from "./DrawerItemsWithScrollspy";
import SectionMetadata from "../../model/SectionMetadata";
import { VersionText } from "../common/VersionText";

const drawerWidth = 240;

const styles = (theme: Theme) =>
    createStyles({
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        versionText: {
            position: "absolute",
            left: "16px",
            bottom: "16px",
        },
    });

interface ResponsivePageDrawerProps extends WithStyles<typeof styles, true> {
    sectionConfigs: SectionMetadata[];
    drawerOpen: boolean;
    onDrawerClose: () => void;
}

class ResponsivePageDrawer extends Component<ResponsivePageDrawerProps> {
    render() {
        const { classes, sectionConfigs, theme } = this.props;

        return (
            <>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={this.props.drawerOpen}
                        onClose={this.props.onDrawerClose}
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        {drawerContent()}
                    </Drawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open>
                        {drawerContent()}
                    </Drawer>
                </Hidden>
            </>
        );

        function drawerContent() {
            return (
                <>
                    <div className={classes.toolbar} />
                    <DrawerItemsWithScrollspy items={asItems(sectionConfigs)} />
                    <div className={classes.versionText}>
                        <VersionText />
                    </div>
                </>
            );
        }
    }
}

function asItems(sectionConfigs: SectionMetadata[]): string[] {
    return sectionConfigs.map((config) => config.name);
}

export default withStyles(styles, { withTheme: true })(ResponsivePageDrawer);
