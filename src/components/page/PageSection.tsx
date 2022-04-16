import React from "react";
import Divider from "@material-ui/core/Divider";

import SectionMetadata from "@/src/model/SectionMetadata";

interface PageSectionProps {
    config: SectionMetadata;
}

const PageSection = (props: PageSectionProps) => {
    const { config } = props;
    return (
        <div key={config.name}>
            {config.component}
            <Divider />
        </div>
    );
};
export default PageSection;
