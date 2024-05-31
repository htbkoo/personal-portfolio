import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MailIcon from "@mui/icons-material/Mail";

import ExercisesPanel from "@/src/components/exercises/ExercisesPanel";

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
        component: <ExercisesPanel />,
        icon: <ImportContactsIcon />,
        async getSubPages() {
            const { exercisesLoader } = await import("@/src/services/exercises/exercisesLoader");

            const { data, error } = await exercisesLoader.load();
            if (error) {
                return { error };
            }

            const { convertExerciseItemsToSubPagesMetaData } = await import("@/src/services/exercises/convertExerciseItemsToSubPagesMetaData");
            return { data: convertExerciseItemsToSubPagesMetaData(data) };
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
