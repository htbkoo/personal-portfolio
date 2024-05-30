import React from "react";

import { AppThemeProvider } from "@/src/services/MuiThemeFactory";

import PortfolioPageShell from "./page/PortfolioPageShell";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { BackgroundImage } from "@/src/components/BackgroundImage";
import { AppGlobalStateContextProvider } from "@/src/contexts/AppGlobalStateContext";

const AppBody = ({ Component, pageProps }: AppProps) => {
    return (
        <AppGlobalStateContextProvider>
            <AppThemeProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <BackgroundImage />
                <PortfolioPageShell>
                    <Component {...pageProps} />
                </PortfolioPageShell>
            </AppThemeProvider>
        </AppGlobalStateContextProvider>
    );
};
export default AppBody;
