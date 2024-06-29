import React from "react";
// import dynamic from "next/dynamic";

// import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import { SimpleSubPage } from "@/src/components/common/SimpleSubPage";

const Exercise = () => {
    return <SimpleSubPage configs={sectionConfigs.exercises} />;
};

// TODO: confirm if this can be removed
// const NoSsrExercise: NextPage = dynamic(async () => Exercise, { ssr: false });

export default Exercise;
