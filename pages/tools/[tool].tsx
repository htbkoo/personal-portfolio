import React from "react";
import dynamic from "next/dynamic";
import CircularProgress from "@mui/material/CircularProgress";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";
import { useSubPagesDataForCurrPath } from "@/src/hooks/useSubPagesDataForCurrPath";

const Tool = () => {
    const { data: pageData, loading } = useSubPagesDataForCurrPath(sectionConfigs.tools);

    if (loading) {
        return <CircularProgress />;
    }
    if (pageData) {
        return <PageSection config={pageData} />;
    }

    return null;
};

const NoSsrTool: NextPage = dynamic(async () => Tool, { ssr: false });

export default NoSsrTool;
