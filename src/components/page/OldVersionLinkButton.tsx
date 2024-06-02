import React from "react";
import { type Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";

const useStyles = makeStyles(
    (theme: Theme) => ({
        button: {
            marginLeft: theme.spacing(1),
        },
    }),
    { name: "MuiMyOldVersionLinkButton" },
);

const OLD_VERSION_URL = "https://codepen.io/htbkoo/";

interface OldVersionLinkButtonProps {
    isOnDrawer?: boolean;
}

const OldVersionLinkButton = ({ isOnDrawer = false }: OldVersionLinkButtonProps) => {
    const classes = useStyles();
    return (
        <Button href={OLD_VERSION_URL} variant="contained" color="secondary" className={classes.button}>
            View on CodePen
        </Button>
    );
};
export default OldVersionLinkButton;
