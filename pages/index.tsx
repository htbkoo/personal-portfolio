import React from "react";

import type { NextPage } from "next";

import { getSectionConfig } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";

const Home: NextPage = () => {
    return <PageSection config={getSectionConfig("about")} />;
};

export default Home;
