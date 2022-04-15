import React from "react";
import RssParser from "rss-parser";

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
    },
    portfolio: {
        name: "Portfolio",
        url: "/portfolio",
        component: <PortfoliosPanel portfoliosFactory={factory} />,
    },
    contact: {
        name: "Contact",
        url: "/contact",
        component: <ContactPanel />,
    },
} as const;

export default sectionConfigs;
