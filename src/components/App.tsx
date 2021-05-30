import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import PortfolioPage from "./page/PortfolioPage";
import sectionConfigs from "../metadata/sectionConfigs";
import { theme } from "../services/MuiThemeFactory";

import "../css/App.css";
import GoogleAnalyticsManager from "../services/GoogleAnalyticsManager";

interface Props {}

class App extends Component<Props> {
    private readonly gAManager: GoogleAnalyticsManager = new GoogleAnalyticsManager();

    constructor(props: Readonly<Props>);
    constructor(props: Props, context?: any);
    constructor(props: Props | Readonly<Props>, context?: any) {
        super(props, context);
        this.gAManager.init();
    }

    componentDidMount(): void {
        const path = window.location.pathname + window.location.search;
        this.gAManager.pageview(path);
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <PortfolioPage sectionConfigs={sectionConfigs} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
