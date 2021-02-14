import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import ContactMetadata from "../../model/ContactMetadata";

const styles = (theme: Theme) =>
    createStyles({
        icon: {
            padding: theme.spacing(2),
        },
        iconImg: {
            maxHeight: theme.spacing(8),
            maxWidth: theme.spacing(8),
        },
    });

interface ContactIconProps extends WithStyles<typeof styles> {
    metadata: ContactMetadata;
    cappedIconSize?: boolean;
}

function ContactIcon({ classes, metadata, cappedIconSize }: ContactIconProps) {
    return (
        <div className={classes.icon}>
            <a href={metadata.href} target="_blank" rel="noopener noreferrer">
                <img
                    className={cappedIconSize ? classes.iconImg : ""}
                    src={metadata.img.src}
                    alt={metadata.img.alt}
                />
            </a>
        </div>
    );
}

export default withStyles(styles)(ContactIcon);
