import React from "react";
import RssParser from "rss-parser";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MailIcon from "@mui/icons-material/Mail";

import SectionMetadata from "../model/SectionMetadata";
import AboutPanel from "../components/about/AboutPanel";
import ExercisePanel from "@/src/components/exercise/ExercisePanel";
import ContactPanel from "../components/contact/ContactPanel";
import EmbeddedPenExercisesFactory from "@/src/components/exercise/EmbeddedPenExercisesFactory";
import LocalCodePenRssFeedsParser from "@/src/services/exercise/LocalCodePenRssFeedsParser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";
const rssFeedUrl = `${CORS_PROXY}/https://codepen.io/collection/neBvQa/feed`;
const factory = new EmbeddedPenExercisesFactory(new LocalCodePenRssFeedsParser(new RssParser()), rssFeedUrl);

export type PageType = "about" | "exercise" | "contact";

const sectionConfigs: Readonly<Record<PageType, SectionMetadata>> = {
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
} as const;

export default sectionConfigs;
