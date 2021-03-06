import React from "react";
import { Theme, useTheme, withStyles } from "@material-ui/core/styles";
import { createStyles, WithStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import MenuIcon from "@material-ui/icons/Menu";
import { useDarkLightModeToggler } from "services/MuiThemeFactory";

import OldVersionLinkButton from "./OldVersionLinkButton";

const styles = (theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            [theme.breakpoints.down("sm")]: {
                zIndex: theme.zIndex.modal + 1,
            },
        },
        title: {
            flexGrow: 1,
            textAlign: "left",
        },
        menuButton: {
            marginRight: 20,
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
    });

interface PageAppBarProps extends WithStyles<typeof styles> {
    onIconButtonClick: () => void;
}

function PageAppBar({ classes, onIconButtonClick }: PageAppBarProps) {
    const theme = useTheme();
    const toggleDarkLightMode = useDarkLightModeToggler();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onIconButtonClick}
                    className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap className={classNames(classes.title)}>
                    Hey's Personal Portfolio
                </Typography>
                <>
                    <IconButton aria-label="dark-mode" onClick={toggleDarkLightMode}>
                        {theme.palette.type === "dark" ? <BrightnessHighIcon /> : <Brightness4Icon />}
                    </IconButton>
                    <Hidden smDown>
                        <OldVersionLinkButton />
                    </Hidden>
                </>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(PageAppBar);
