import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MailIcon from "@mui/icons-material/Mail";
import BuildIcon from "@mui/icons-material/Build";

import AboutPanel from "@/src/components/about/AboutPanel";
import ContactPanel from "@/src/components/contact/ContactPanel";
import ExercisesPanel from "@/src/components/exercises/ExercisesPanel";
import ToolsPanel from "@/src/components/tools/ToolsPanel";
import { loadExercisesSubPagesMetadata } from "@/src/services/exercises/loadExercisesSubPagesMetadata";
import type SectionMetadata from "@/src/model/SectionMetadata";

const PAGES = ["about", "tools", "exercises", "contact"] as const;
type PageType = (typeof PAGES)[number];

export const sectionConfigs = Object.freeze({
    about: {
        name: "About",
        url: "/",
        component: <AboutPanel />,
        icon: <AssignmentIndIcon />,
    },
    tools: {
        name: "Tools",
        url: "/tools",
        component: <ToolsPanel />,
        icon: <BuildIcon />,
        getSubPages: async () => {
            const { CssToAndFromReact } = await import("@/src/components/tools");
            const { default: SyncIcon } = await import("@mui/icons-material/Sync");

            const CSS_TO_FROM_REACT = `cssToFromReact`;

            return {
                loading: false,
                data: {
                    // TODO: find out how to enforce the order of subPages
                    [CSS_TO_FROM_REACT]: {
                        name: "CSS to and from React",
                        url: `/${CSS_TO_FROM_REACT}`,
                        component: <CssToAndFromReact />,
                        icon: <SyncIcon />,
                    },
                },
                error: null,
            } satisfies Awaited<ReturnType<NonNullable<SectionMetadata["getSubPages"]>>>;
        },
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
