import * as React from "react";
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import ContactMetadata from "../../model/ContactMetadata";

const styles = (theme: Theme) => createStyles({
    icon: {
        padding: theme.spacing(2),
    }
});

interface ContactIconProps extends WithStyles<typeof styles> {
    metadata: ContactMetadata
}

function ContactIcon(props: ContactIconProps) {
    const {classes, metadata} = props;
    return (
        <div className={classes.icon}>
            <a href={metadata.href} target="_blank" rel="noopener">
                <img
                    src={metadata.img.src}
                    alt={metadata.img.alt}/>
            </a>
        </div>
    );
}

export default withStyles(styles)(ContactIcon);
