import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";

import ContactIcon, { ContactIconProps } from "./ContactIcon";

import iconMetadatas from "../../metadata/contact/icons.json";
import iconSecondaryMetadatas from "../../metadata/contact/icons_secondary.json";
import ContactMetadata from "../../model/ContactMetadata";
import Section from "../common/Section";
import { getGitHubMarkImgSrc, useGitHubMarkImgColorBasedOnTheme } from "../common/GitHubMarkImg";
import { useBadgesMetadatas } from "../../metadata/contact/useBadgesMetadatas";

const useStyles = makeStyles(
    (theme: Theme) => ({
        icons: {
            padding: theme.spacing(3),
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
            alignItems: "center",
        },
        badges: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    }),
    { name: "MuiMyContactPanel" },
);

const ContactPanel = () => {
    const classes = useStyles();
    return (
        <Section id="contact" hasDivider={true} title="Contact" subtitle="Check me out at the following!">
            <div className={classes.icons}>
                <GitHubIcon />
                <Icons />
            </div>
            <div className={classes.icons}>
                <SecondaryIcons />
            </div>
            <div className={classes.badges}>
                <Badges />
            </div>
        </Section>
    );
};
export default ContactPanel;

function GitHubIcon() {
    const color = useGitHubMarkImgColorBasedOnTheme();

    const metadata = {
        href: "https://github.com/htbkoo",
        img: {
            src: getGitHubMarkImgSrc(color),
            alt: "GitHub",
        },
    };
    return (
        <>
            <Hidden smUp>
                <ContactIcon metadata={metadata} cappedIconSize={"medium"} />
            </Hidden>
            <Hidden xsDown>
                <ContactIcon metadata={metadata} />
            </Hidden>
        </>
    );
}

function Icons() {
    return (
        <>
            <Hidden smUp>{contactIcons(iconMetadatas, { cappedIconSize: "medium" })}</Hidden>
            <Hidden xsDown>{contactIcons(iconMetadatas)}</Hidden>
        </>
    );
}

function SecondaryIcons() {
    return (
        <>
            <Hidden smUp>{contactIcons(iconSecondaryMetadatas, { cappedIconSize: "small" })}</Hidden>
            <Hidden xsDown>{contactIcons(iconSecondaryMetadatas, { cappedIconSize: "medium" })}</Hidden>
        </>
    );
}

function Badges() {
    const { data, loading } = useBadgesMetadatas();

    if (loading) {
        return <CircularProgress />;
    }

    if (!data) {
        return null;
    }

    const { badgeMetadatas, badgeMicroMetadatas } = data;

    return (
        <>
            <Hidden smUp>{contactIcons(badgeMicroMetadatas, { useLegacyImgElement: true })}</Hidden>
            <Hidden xsDown>{contactIcons(badgeMetadatas, { useLegacyImgElement: true })}</Hidden>
        </>
    );
}

function contactIcons(
    metadatas: ContactMetadata[],
    { cappedIconSize, useLegacyImgElement }: Omit<ContactIconProps, "metadata"> = {},
) {
    return metadatas.map((metadata, i) => (
        <ContactIcon
            key={`${i.toString()}_${metadata.img.alt}`}
            metadata={metadata}
            cappedIconSize={cappedIconSize}
            useLegacyImgElement={useLegacyImgElement}
        />
    ));
}
