import React, { useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "services/MuiThemeFactory";
import GoogleAnalyticsManager from "services/GoogleAnalyticsManager";

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
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <PortfolioPage sectionConfigs={sectionConfigs} />
            </div>
        </MuiThemeProvider>
    );
}
