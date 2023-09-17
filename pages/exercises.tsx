import React from "react";

import type { NextPage } from "next";

import { getSectionConfig } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";

const Exercises: NextPage = () => {
    return <PageSection config={getSectionConfig("exercises")} />;
};

export default Exercises;
