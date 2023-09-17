import React from "react";
import RssParser from "rss-parser";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import MailIcon from "@material-ui/icons/Mail";

import SectionMetadata from "../model/SectionMetadata";
import AboutPanel from "../components/about/AboutPanel";
import ExercisePanel from "@/src/components/exercise/ExercisePanel";
import ContactPanel from "../components/contact/ContactPanel";
import EmbeddedPenExercisesFactory from "@/src/components/exercise/EmbeddedPenExercisesFactory";
import LocalCodePenRssFeedsParser from "@/src/services/exercise/LocalCodePenRssFeedsParser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const rssFeedUrl = `${CORS_PROXY}/https://codepen.io/collection/neBvQa/feed`;
const factory = new EmbeddedPenExercisesFactory(new LocalCodePenRssFeedsParser(new RssParser()), rssFeedUrl);

const PAGES = ["about", "exercise", "contact"] as const;
type PageType = (typeof PAGES)[number];

export const sectionConfigs = Object.freeze({
    about: {
        name: "About",
        url: "/",
        component: <AboutPanel />,
        icon: <AssignmentIndIcon />,
    },
    exercise: {
        name: "Exercise",
        url: "/exercise",
        component: <ExercisePanel exercisesFactory={factory} />,
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
