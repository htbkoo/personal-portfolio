import React from 'react';
import RssParser from "rss-parser";

import SectionMetadata from "../model/SectionMetadata";
// import HomePanel from "../components/home/HomePanel";
import AboutPanel from "../components/about/AboutPanel";
import PortfoliosPanel from "../components/portfolio/PortfoliosPanel";
import ContactPanel from "../components/contact/ContactPanel";
import EmbeddedPenPortfoliosFactory from "../components/portfolio/EmbeddedPenPortfoliosFactory";
import LocalCodePenRssFeedsParser from "../services/portfolio/LocalCodePenRssFeedsParser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const rssFeedUrl = `${CORS_PROXY}/https://codepen.io/collection/neBvQa/feed`;
const factory = new EmbeddedPenPortfoliosFactory(new LocalCodePenRssFeedsParser(new RssParser()), rssFeedUrl);

const sectionConfigs: SectionMetadata[] = [
    // {
    //     name: 'Home',
    //     component: <HomePanel/>
    // },
    {
        name: 'About',
        component: <AboutPanel/>
    },
    {
        name: 'Portfolio',
        component: <PortfoliosPanel portfoliosFactory={factory}/>
    },
    {
        name: 'Contact',
        component: <ContactPanel/>
    },
];

export default sectionConfigs;