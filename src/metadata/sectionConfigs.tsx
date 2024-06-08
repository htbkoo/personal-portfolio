import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MailIcon from "@mui/icons-material/Mail";

import ExercisesPanel from "@/src/components/exercises/ExercisesPanel";
import AboutPanel from "@/src/components/about/AboutPanel";
import ContactPanel from "@/src/components/contact/ContactPanel";
import { loadExercisesSubPagesMetadata } from "@/src/services/exercises/loadExercisesSubPagesMetadata";
import type SectionMetadata from "@/src/model/SectionMetadata";

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
        component: <ExercisesPanel />,
        icon: <ImportContactsIcon />,
        getSubPages: loadExercisesSubPagesMetadata,
    },
    contact: {
        name: "Contact",
        url: "/contact",
        component: <ContactPanel />,
        icon: <MailIcon />,
    },
}) satisfies Readonly<Record<PageType, SectionMetadata>>;

export const ALL_SECTION_CONFIGS_VALUES = PAGES.map((page) => sectionConfigs[page]);
