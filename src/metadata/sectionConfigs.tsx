import React from "react";
import RssParser from "rss-parser";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import BuildIcon from "@material-ui/icons/Build";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import MailIcon from "@material-ui/icons/Mail";

import SectionMetadata from "../model/SectionMetadata";
import AboutPanel from "../components/about/AboutPanel";
import PortfoliosPanel from "../components/portfolio/PortfoliosPanel";
import ContactPanel from "../components/contact/ContactPanel";
import EmbeddedPenPortfoliosFactory from "../components/portfolio/EmbeddedPenPortfoliosFactory";
import LocalCodePenRssFeedsParser from "../services/portfolio/LocalCodePenRssFeedsParser";
import ToolsPanel from "@/src/components/tools/ToolsPanel";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const rssFeedUrl = `${CORS_PROXY}/https://codepen.io/collection/neBvQa/feed`;
const factory = new EmbeddedPenPortfoliosFactory(new LocalCodePenRssFeedsParser(new RssParser()), rssFeedUrl);

const PAGES = ["about", "tools", "portfolio", "contact"] as const;
type PageType = typeof PAGES[number];

export const sectionConfigs = Object.freeze({
    about: {
        name: "About",
        url: "/",
        component: <AboutPanel />,
        icon: <AssignmentIndIcon />,
    },
    tools: {
        name: "Tools",
        url: "/tools",
        component: <ToolsPanel />,
        icon: <BuildIcon />,
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
}) satisfies Readonly<Record<PageType, SectionMetadata>>;

export const ALL_SECTION_CONFIGS_VALUES = PAGES.map((page) => sectionConfigs[page]);

