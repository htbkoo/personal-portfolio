import React from "react";

import type { NextPage } from "next";

import { sectionConfigs } from "@/src/metadata/sectionConfigs";
import PageSection from "@/src/components/page/PageSection";

const SpikePage: NextPage = () => {
    return <div>testB</div>;
};

// @ts-ignore
SpikePage.getLayout = function getLayout (page: React.ReactElement) {
    return (
        <div>
            <div>{page}</div>
            <div>test2</div>
        </div>
    );
};

export default SpikePage;
