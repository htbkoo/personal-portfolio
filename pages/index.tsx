import React from "react";

import type { NextPage } from "next";

import PortfolioPage from "@/src/components/page/PortfolioPage";
import sectionConfigs from "@/src/metadata/sectionConfigs";

const Home: NextPage = () => {
    return (
        <div id="root">
            <div className="App">
                <PortfolioPage sectionConfigs={sectionConfigs} />
            </div>
        </div>
    );
};

export default Home;
