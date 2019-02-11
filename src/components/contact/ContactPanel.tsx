import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import ContactIcon from "./ContactIcon";

import iconMetadatas from "../../metadata/contact/icons.json";
import badgeMetadatas from "../../metadata/contact/badges.json";
import ContactMetadata from "../../model/ContactMetadata";

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
                {contactIcons(iconMetadatas)}
            </div>
            <div className={classes.badges}>
                {contactIcons(badgeMetadatas)}
            </div>
        </div>
    );
}

function contactIcons(metadatas: ContactMetadata[]) {
    return metadatas.map((metadata, i) => (
        <ContactIcon key={`${i.toString()}_${metadata.img.alt}`} metadata={metadata}/>
    ));
}

export default withStyles(styles)(ContactPanel);