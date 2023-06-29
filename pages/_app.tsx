import "@/styles/globals.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

// reference:
// 1. https://material-ui.com/components/typography/#install-with-npm
// 2. https://fontsource.org/docs/guides/nextjs
import "@fontsource/roboto";

import AppBody from "@/src/components/AppBody";
import { withAssetPrefix } from "@/src/utils/assetUtils";
import { GoogleAnalyticsScripts } from "@/src/services/GoogleAnalyticsScripts";

const MyApp = (appProps: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    // reference https://nextjs.org/docs/messages/next-script-for-ga
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
            <GoogleAnalyticsScripts />
            <AppBody {...appProps} />
        </>
    );
};

// noinspection JSUnusedGlobalSymbols
export default MyApp;
