import React, { Children } from "react";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

import { DARK_THEME } from "@/src/services/MuiThemeFactory";

// reference:
// 1. https://nextjs.org/docs/advanced-features/custom-document#typescript
// 2. https://itnext.io/next-js-with-material-ui-7a7f6485f671
class MyDocument extends Document {
    // reference:
    // 1. https://v4.mui.com/styles/advanced/#next-js
    // 2. https://github.com/mui/material-ui/blob/v4.x/examples/nextjs/pages/_document.js
    // `getInitialProps` belongs to `_document` (instead of `_app`),
    // it's compatible with server-side generation (SSG).
    static async getInitialProps(ctx: DocumentContext) {
        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="/personal-portfolio/favicon.ico" />
                    <link rel="apple-touch-icon" href="/personal-portfolio/icons-192.png" />

                    {/* PWA primary color */}
                    <meta name="theme-color" content={DARK_THEME.palette.primary.main} />
                    {/*  Moved to JS side to avoid blocking rendering */}
                    {/*    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />*/}
                    {/*    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">*/}
                    {/*    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}

                    <meta name="Description" content="Contains the previous works and community contacts" />
                    {/* Reference: https://stackoverflow.com/a/52079972 */}
                    <meta name="ui-version" content={process.env.NEXT_PUBLIC_GIT_SHA} />

                    {/*
                      manifest.json provides metadata used when your web app is added to the
                      homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
                    */}
                    <link rel="manifest" href="/personal-portfolio/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
