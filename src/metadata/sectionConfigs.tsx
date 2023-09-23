import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MailIcon from "@mui/icons-material/Mail";

import ExercisesPanel from "@/src/components/exercises/ExercisesPanel";
import { exercisesLoader } from "@/src/metadata/exercises/exercisesLoader";

import SectionMetadata from "../model/SectionMetadata";
import AboutPanel from "../components/about/AboutPanel";
import ContactPanel from "../components/contact/ContactPanel";

const PAGES = ["about", "exercises", "contact"] as const;
type PageType = (typeof PAGES)[number];

export const sectionConfigs = Object.freeze({
    about: {
        name: "About",
        url: "/",
        component: <AboutPanel />,
        icon: <AssignmentIndIcon />,
    },
    exercises: {
        name: "Exercises",
        url: "/exercises",
        component: <ExercisesPanel exercisesLoader={exercisesLoader} />,
        icon: <ImportContactsIcon />,
        async getSubPages() {
            return exercisesLoader.loadAsSubPageMetaData();
        },
    },
    contact: {
        name: "Contact",
        url: "/contact",
        component: <ContactPanel />,
        icon: <MailIcon />,
    },
}) satisfies Readonly<Record<PageType, SectionMetadata>>;

export const ALL_SECTION_CONFIGS_VALUES = PAGES.map((page) => sectionConfigs[page]);
