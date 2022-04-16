import React from "react";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        marginLeft: theme.spacing(1),
    },
}), {name: "MuiMyOldVersionLinkButton"});

const OLD_VERSION_URL = "https://codepen.io/htbkoo/";

const OldVersionLinkButton = () => {
    const classes = useStyles();
    return (
        <Button href={OLD_VERSION_URL} variant="contained" color="secondary" className={classes.button}>
            View on CodePen
        </Button>
    );
};
export default OldVersionLinkButton;
