import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import iconMetadatas from "./metadata/contact/icons.json";

const styles = (theme: Theme) => createStyles({
    icons: {
        padding: theme.spacing.unit * 3,
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
    },
    icon: {
        padding: theme.spacing.unit * 2,
    }
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
                {contactIcons({classes})}
            </div>
            <div className="contact-badges">
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

function contactIcons({classes}) {
    return iconMetadatas.map(toIconComponent);

    function toIconComponent(metadata) {
        return (
            <div className={classes.icon}>
                <a href={metadata.href} target="_blank">
                    <img
                        src={metadata.img.src}
                        alt={metadata.img.alt}/>
                </a>
            </div>
        )
    }
}

export default withStyles(styles)(ContactPanel);