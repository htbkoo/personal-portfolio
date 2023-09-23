import React from "react";

import type { NextPage } from "next";
import PageSection from "@/src/components/page/PageSection";
import { sectionConfigs } from "@/src/metadata/sectionConfigs";

const Pomodoro: NextPage = () => {
    return <PageSection config={sectionConfigs.tools.subPages.pomodoro} />;
};

export default Pomodoro;
