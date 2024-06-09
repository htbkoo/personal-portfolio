import React from "react";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import { SimpleSubPage } from "@/src/components/common/SimpleSubPage";

const Exercise = () => {
    return <SimpleSubPage configs={sectionConfigs.exercises} />;
};

export default Exercise;
