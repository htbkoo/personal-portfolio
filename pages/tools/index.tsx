import React from "react";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";

const ToolsPage: NextPage = () => {
  return <PageSection config={sectionConfigs.tools} />;
};

export default ToolsPage;
