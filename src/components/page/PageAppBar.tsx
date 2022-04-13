import React from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import MenuIcon from "@material-ui/icons/Menu";
import { useDarkLightModeToggler } from "@/src/services/MuiThemeFactory";

import OldVersionLinkButton from "./OldVersionLinkButton";

const useStyles = makeStyles((theme: Theme) =>
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
    }),
);

interface PageAppBarProps {
    onIconButtonClick: () => void;
}

export default function PageAppBar({ onIconButtonClick }: PageAppBarProps) {
    const classes = useStyles();

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
                    Hey&apos;s Personal Portfolio
                </Typography>
                <>
                    <IconButton aria-label="dark-mode" onClick={toggleDarkLightMode}>
                        {theme.palette.type === "dark" ? <BrightnessHighIcon /> : <Brightness3Icon color="secondary" />}
                    </IconButton>
                    <Hidden smDown>
                        <OldVersionLinkButton />
                    </Hidden>
                </>
            </Toolbar>
        </AppBar>
    );
}
