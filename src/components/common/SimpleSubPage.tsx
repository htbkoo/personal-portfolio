import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SectionMetadata from "@/src/model/SectionMetadata";
import { useSubPagesDataForCurrPath } from "@/src/hooks/useSubPagesDataForCurrPath";
import PageSection from "@/src/components/page/PageSection";

export const SimpleSubPage = ({ configs }: { configs: SectionMetadata }) => {
    const { data: pageData, loading } = useSubPagesDataForCurrPath(configs);

    if (loading) {
        return <CircularProgress />;
    }
    if (pageData) {
        return <PageSection config={pageData} />;
    }

    return null;
};
