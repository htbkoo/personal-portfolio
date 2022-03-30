import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import ContactIcon, { ContactIconSize } from "./ContactIcon";

import iconMetadatas from "../../metadata/contact/icons.json";
import iconSecondaryMetadatas from "../../metadata/contact/icons_secondary.json";
import badgeMetadatas from "../../metadata/contact/badges.json";
import badgeMicroMetadatas from "../../metadata/contact/badges_micro.json";
import ContactMetadata from "../../model/ContactMetadata";
import Section from "../common/Section";
import { getGitHubMarkImgSrc, useGitHubMarkImgColorBasedOnTheme } from "../common/GitHubMarkImg";

const useStyles = makeStyles((theme: Theme) => ({
    icons: {
        padding: theme.spacing(3),
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    badges: {
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <Section id="contact" hasDivider={true} title="Contact" subtitle="Check me out at the following!">
            <div className={classes.icons}>
                <GitHubIcon />
                <Icons />
            </div>
            <div className={classes.badges}>
                <SecondaryIcons />
                <Badges />
            </div>
        </Section>
    );
};

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
        <React.Fragment>
            <Hidden smUp>
                <ContactIcon metadata={metadata} cappedIconSize={"medium"} />
            </Hidden>
            <Hidden xsDown>
                <ContactIcon metadata={metadata} />
            </Hidden>
        </React.Fragment>
    );
}

function Icons() {
    return (
        <React.Fragment>
            <Hidden smUp>{contactIcons(iconMetadatas, "medium")}</Hidden>
            <Hidden xsDown>{contactIcons(iconMetadatas)}</Hidden>
        </React.Fragment>
    );
}

function SecondaryIcons() {
    return (
        <React.Fragment>
            <Hidden smUp>{contactIcons(iconSecondaryMetadatas, "small")}</Hidden>
            <Hidden xsDown>{contactIcons(iconSecondaryMetadatas, "medium")}</Hidden>
        </React.Fragment>
    );
}

function Badges() {
    return (
        <React.Fragment>
            <Hidden smUp>{contactIcons(badgeMicroMetadatas)}</Hidden>
            <Hidden xsDown>{contactIcons(badgeMetadatas)}</Hidden>
        </React.Fragment>
    );
}

function contactIcons(metadatas: ContactMetadata[], cappedIconSize?: ContactIconSize) {
    return metadatas.map((metadata, i) => (
        <ContactIcon
            key={`${i.toString()}_${metadata.img.alt}`}
            metadata={metadata}
            cappedIconSize={cappedIconSize}
        />
    ));
}
