import React, { useEffect } from "react";

import { AppThemeProvider } from "@/services/MuiThemeFactory";
import GoogleAnalyticsManager from "@/services/GoogleAnalyticsManager";

import PortfolioPage from "./page/PortfolioPage";
import sectionConfigs from "../metadata/sectionConfigs";

import "../css/App.css";

interface Props {}

const gAManager: GoogleAnalyticsManager = new GoogleAnalyticsManager();

export default function App(_: Props) {
    useEffect(() => {
        gAManager.init();
    }, []);

    useEffect(() => {
        const path = window.location.pathname + window.location.search;
        gAManager.pageview(path);
    });

    return (
        <AppThemeProvider>
            <div className="App">
                <PortfolioPage sectionConfigs={sectionConfigs} />
            </div>
        </AppThemeProvider>
    );
}
