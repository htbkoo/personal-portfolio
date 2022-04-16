import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Image from "next/image";

import ContactMetadata from "../../model/ContactMetadata";

export type ContactIconSize = "small" | "medium";

const contactIconSizesMappings: Readonly<Record<ContactIconSize | "large", number>> = {
    small: 4,
    medium: 8,
    large: 16,
} as const;

const useStyles = makeStyles<Theme>(
    (theme: Theme) => ({
        icon: {
            padding: theme.spacing(2),
        },
    }),
    { name: "MuiMyContactIcon" },
);

export interface ContactIconProps {
    metadata: ContactMetadata;
    cappedIconSize?: ContactIconSize;
    useLegacyImgElement?: boolean;
}

const ContactIcon = ({ metadata, cappedIconSize, useLegacyImgElement }: ContactIconProps) => {
    const classes = useStyles({ cappedIconSize });
    const theme = useTheme();
    const imgSize = theme.spacing(contactIconSizesMappings[cappedIconSize ?? "large"]);

    return (
        <div className={classes.icon}>
            <a href={metadata.href} target="_blank" rel="noopener noreferrer">
                {useLegacyImgElement ? (
                    <img src={metadata.img.src} alt={metadata.img.alt} />
                ) : (
                    <Image src={metadata.img.src} alt={metadata.img.alt} width={imgSize} height={imgSize} />
                )}
            </a>
        </div>
    );
};
export default ContactIcon;
