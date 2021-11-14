import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import ContactMetadata from "../../model/ContactMetadata";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        padding: theme.spacing(2),
    },
    iconImg: {
        maxHeight: theme.spacing(8),
        maxWidth: theme.spacing(8),
    },
}));

interface ContactIconProps {
    metadata: ContactMetadata;
    cappedIconSize?: boolean;
}

export default ({ metadata, cappedIconSize }: ContactIconProps) => {
    const classes = useStyles();
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
};
