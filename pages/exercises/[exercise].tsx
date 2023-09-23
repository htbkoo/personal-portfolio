import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";
import { useRouter } from "next/router";
import SectionMetadata from "@/src/model/SectionMetadata";
import CircularProgress from "@mui/material/CircularProgress";

const Exercise = () => {
    const { asPath } = useRouter();
    const pagePath = asPath.split("/").at(-2);

    const [isLoading, setLoading] = useState(true);
    const [pageData, setPageData] = useState<SectionMetadata | undefined>(undefined);

    useEffect(() => {
        sectionConfigs.exercises.getSubPages().then(({ data }) => {
            setLoading(false);

            if (!pagePath || !data || !data[pagePath]) {
                return;
            }

            setPageData(data[pagePath]);
        });
    }, [pagePath]);

    if (isLoading) {
        return <CircularProgress />;
    }
    if (pageData) {
        return <PageSection config={pageData} />;
    }

    return null;
};

const NoSsrExercise: NextPage = dynamic(async () => Exercise, {ssr: false});

export default NoSsrExercise;
