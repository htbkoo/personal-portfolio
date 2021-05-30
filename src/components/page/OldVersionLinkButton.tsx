import React from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import { createStyles, WithStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) => createStyles({});

interface OldVersionLinkButtonProps extends WithStyles<typeof styles> {}

const OLD_VERSION_URL = "https://codepen.io/htbkoo/";

function OldVersionLinkButton(props: OldVersionLinkButtonProps) {
    return (
        <Button href={OLD_VERSION_URL} variant="contained" color="inherit">
            View on CodePen
        </Button>
    );
}

export default withStyles(styles)(OldVersionLinkButton);
