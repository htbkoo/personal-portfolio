import React, {Component} from 'react';
import RssParser from "rss-parser";

import CodePenRssFeedsParser from "./services/CodePenRssFeedsParser";
import SectionMetadata from "./model/SectionMetadata";
import HomePanel from "./HomePanel";
import AboutPanel from "./AboutPanel";
import PortfoliosPanel from "./PortfoliosPanel";
import ContactPanel from "./ContactPanel";

const parser = new CodePenRssFeedsParser(new RssParser());

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
        component: <PortfoliosPanel parser={parser} rssFeedUrl="https://codepen.io/collection/neBvQa/feed"/>
    },
    {
        name: 'Contact',
        component: <ContactPanel/>
    },
];

export default sectionConfigs;