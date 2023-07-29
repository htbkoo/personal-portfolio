import React from "react";

import SectionMetadata from "@/src/model/SectionMetadata";

interface PageSectionProps {
    config: SectionMetadata;
}

const PageSection = (props: PageSectionProps) => {
    const { config } = props;
    return <div key={config.name}>{config.component}</div>;
};
export default PageSection;
