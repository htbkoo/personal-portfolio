import * as React from "react";

export type SubPagesType = Readonly<Record<string, SectionMetadata>>;

export default interface SectionMetadata {
    name: string;
    url: string;
    component: React.ReactNode;
    icon: React.ReactNode;
    getSubPages?: () => Promise<{
        data?: SubPagesType;
        error?: any;
    }>;
}
