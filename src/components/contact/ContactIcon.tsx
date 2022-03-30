import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import ContactMetadata from "../../model/ContactMetadata";

export type ContactIconSize = "small" | "medium";

const contactIconSizesMappings: Readonly<Record<ContactIconSize, number>> = {
    small: 4,
    medium: 8,
} as const;

const useStyles = makeStyles<Theme, { cappedIconSize?: ContactIconSize }>((theme: Theme) => ({
    icon: {
        padding: theme.spacing(2),
    },
    iconImg: ({ cappedIconSize }) =>
        cappedIconSize
            ? {
                  maxHeight: theme.spacing(contactIconSizesMappings[cappedIconSize]),
                  maxWidth: theme.spacing(contactIconSizesMappings[cappedIconSize]),
              }
            : {},
}));

interface ContactIconProps {
    metadata: ContactMetadata;
    cappedIconSize?: ContactIconSize;
}

export default ({ metadata, cappedIconSize }: ContactIconProps) => {
    const classes = useStyles({ cappedIconSize });
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
