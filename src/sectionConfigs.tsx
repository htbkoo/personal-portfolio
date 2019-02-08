import React from 'react';
import RssParser from "rss-parser";

import CodePenRssFeedsParser from "./services/CodePenRssFeedsParser";
import SectionMetadata from "./model/SectionMetadata";
import HomePanel from "./HomePanel";
import AboutPanel from "./AboutPanel";
import PortfoliosPanel from "./PortfoliosPanel";
import ContactPanel from "./ContactPanel";

const parser = new CodePenRssFeedsParser(new RssParser());
const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const rssFeedUrl = `${CORS_PROXY}/https://codepen.io/collection/neBvQa/feed`;

const sectionConfigs: SectionMetadata[] = [
    {
        name: 'Home',
        component: <HomePanel/>
    },
    {
        name: 'About',
        component: <AboutPanel/>
    },
    {
        name: 'Portfolio',
        component: <PortfoliosPanel parser={parser} rssFeedUrl={rssFeedUrl}/>
    },
    {
        name: 'Contact',
        component: <ContactPanel/>
    },
];

export default sectionConfigs;