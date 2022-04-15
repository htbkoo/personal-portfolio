import "@/styles/globals.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
// reference:
// 1. https://material-ui.com/components/typography/#install-with-npm
// 2. https://fontsource.org/docs/guides/nextjs
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BackgroundImage } from "@/src/components/BackgroundImage";
import { AppThemeProvider } from "@/src/services/MuiThemeFactory";
import GoogleAnalyticsManager from "@/src/services/GoogleAnalyticsManager";
import { withAssetPrefix } from "@/src/utils/assetUtils";

const gAManager: GoogleAnalyticsManager = new GoogleAnalyticsManager();

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        gAManager.init();
    }, []);

    useEffect(() => {
        const path = window.location.pathname + window.location.search;
        gAManager.pageview(path);
    });

    return (
        <>
            <Head>
                <title>Hey&apos;s Personal Portfolio</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link rel="icon" href={withAssetPrefix("favicon.ico")} />

                <link rel="prefetch" href={withAssetPrefix("background.jpg")} />
                <link rel="prefetch" href={withAssetPrefix("background-light.jpg")} />
            </Head>
            <AppThemeProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <BackgroundImage />
                <Component {...pageProps} />
            </AppThemeProvider>
        </>
    );
};

export default MyApp;
