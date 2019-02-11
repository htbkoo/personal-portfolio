import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    icon: {
        padding: theme.spacing.unit * 2,
    }
});

interface ContactIconProps extends WithStyles<typeof styles> {
    metadata: {
        href: string,
        img: {
            src: string,
            alt: string
        }
    }
}

function ContactIcon(props: ContactIconProps) {
    const {classes, metadata} = props;
    return (
        <div className={classes.icon}>
            <a href={metadata.href} target="_blank">
                <img
                    src={metadata.img.src}
                    alt={metadata.img.alt}/>
            </a>
        </div>
    );
}

export default withStyles(styles)(ContactIcon);