import React from "react";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import MailIcon from "@material-ui/icons/Mail";

import ExercisePanel from "@/src/components/exercise/ExercisePanel";
import { exercisesLoader } from "@/src/metadata/exercise/exercisesLoader";
import { convertExerciseItemsToSubPagesMetaData } from "@/src/services/exercise/convertExerciseItemsToSubPagesMetaData";

import SectionMetadata from "../model/SectionMetadata";
import AboutPanel from "../components/about/AboutPanel";
import ContactPanel from "../components/contact/ContactPanel";

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
        component: <ExercisePanel exercisesLoader={exercisesLoader} />,
        icon: <ImportContactsIcon />,
        async getSubPages() {
            const { data, error } = await exercisesLoader.load();
            if (error) {
                return { error };
            }
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
