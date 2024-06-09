import React from "react";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";
import { SimpleSubPage } from "@/src/components/common/SimpleSubPage";

const CssToAndFromReactPage: NextPage = () => {
  return <SimpleSubPage configs={sectionConfigs.tools} />;
};

export default CssToAndFromReactPage;
