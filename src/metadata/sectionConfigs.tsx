import React from "react";
import RssParser from "rss-parser";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import MailIcon from "@material-ui/icons/Mail";

import SectionMetadata from "../model/SectionMetadata";
import AboutPanel from "../components/about/AboutPanel";
import PortfoliosPanel from "../components/portfolio/PortfoliosPanel";
import ContactPanel from "../components/contact/ContactPanel";
import EmbeddedPenPortfoliosFactory from "../components/portfolio/EmbeddedPenPortfoliosFactory";
import LocalCodePenRssFeedsParser from "../services/portfolio/LocalCodePenRssFeedsParser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const rssFeedUrl = `${CORS_PROXY}/https://codepen.io/collection/neBvQa/feed`;
const factory = new EmbeddedPenPortfoliosFactory(new LocalCodePenRssFeedsParser(new RssParser()), rssFeedUrl);

export type PageType = "about" | "portfolio" | "contact";

const sectionConfigs: Readonly<Record<PageType, SectionMetadata>> = {
    about: {
        name: "About",
        url: "/",
        component: <AboutPanel />,
        icon: <AssignmentIndIcon />,
    },
    portfolio: {
        name: "Portfolio",
        url: "/portfolio",
        component: <PortfoliosPanel portfoliosFactory={factory} />,
        icon: <ImportContactsIcon />,
    },
    contact: {
        name: "Contact",
        url: "/contact",
        component: <ContactPanel />,
        icon: <MailIcon />,
    },
} as const;

export default sectionConfigs;
