import React from "react";
import dynamic from "next/dynamic";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import { SimpleSubPage } from "@/src/components/common/SimpleSubPage";

const Tool = () => {
    return <SimpleSubPage configs={sectionConfigs.tools} />;
};

const NoSsrTool: NextPage = dynamic(async () => Tool, { ssr: false });

export default NoSsrTool;
