import React from "react";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import { SimpleSubPage } from "@/src/components/common/SimpleSubPage";

const FileUploaderPage: NextPage = () => {
  return <SimpleSubPage configs={sectionConfigs.tools} />;
};

export default FileUploaderPage;
