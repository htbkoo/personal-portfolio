import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import ContactIcon from "./ContactIcon";

import iconMetadatas from "./metadata/contact/icons.json";

const styles = (theme: Theme) => createStyles({
    icons: {
        padding: theme.spacing.unit * 3,
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "baseline"
    },
    badges: {}
});

interface ContactPanelProps extends WithStyles<typeof styles> {
}

function ContactPanel(props: ContactPanelProps) {
    const {classes} = props;
    return (
        <div id="contact">
            <div>
                <h1>Contact</h1>
                <h2>Check me out at the following!</h2>
            </div>
            <Divider/>
            <div className={classes.icons}>
                {contactIcons()}
            </div>
            <div className={classes.badges}>
                <div>
                    <a href="https://www.codewars.com/users/htbkoo" target="_blank">
                        <img
                            src="https://www.codewars.com/users/htbkoo/badges/large"
                            alt="Codewars"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

function contactIcons() {
    return iconMetadatas.map(toIconComponent);

    function toIconComponent(metadata) {
        return (
            <ContactIcon metadata={metadata}/>
        )
    }
}

export default withStyles(styles)(ContactPanel);