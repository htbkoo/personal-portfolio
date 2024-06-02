import * as React from "react";
import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

import ContactMetadata from "@/src/model/ContactMetadata";
import { withAssetPrefix } from "@/src/utils/assetUtils";

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
            zIndex: 1,
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
                    <Image
                        src={withAssetPrefix(metadata.img.src)}
                        alt={metadata.img.alt}
                        width={parseInt(imgSize)}
                        height={parseInt(imgSize)}
                    />
                )}
            </a>
        </div>
    );
};
export default ContactIcon;
