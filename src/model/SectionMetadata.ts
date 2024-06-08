import * as React from "react";

import { AsyncStateType } from "@/src/utils/types";

export type SubPagesType = Readonly<Record<string, SectionMetadata>>;

export default interface SectionMetadata {
    name: string;
    url: string;
    component: React.ReactNode;
    icon: React.ReactNode;
    getSubPages?: () => Promise<AsyncStateType<SubPagesType>>;
}
