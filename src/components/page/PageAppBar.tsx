import React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import MenuIcon from "@mui/icons-material/Menu";
import { useDarkLightModeToggler } from "@/src/services/MuiThemeFactory";

import OldVersionLinkButton from "./OldVersionLinkButton";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
                [theme.breakpoints.down('md')]: {
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
    { name: "MuiMyPageAppBar" },
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
                    className={classes.menuButton}
                    size="large">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap className={classNames(classes.title)}>
                    Hey&apos;s Personal Portfolio
                </Typography>
                <>
                    <IconButton aria-label="dark-mode" onClick={toggleDarkLightMode} size="large">
                        {theme.palette.mode === "dark" ? <BrightnessHighIcon /> : <Brightness3Icon color="secondary" />}
                    </IconButton>
                    <Hidden mdDown>
                        <OldVersionLinkButton />
                    </Hidden>
                </>
            </Toolbar>
        </AppBar>
    );
}
