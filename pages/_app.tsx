import "../styles/globals.css";
import type { AppProps } from "next/app";
// reference:
// 1. https://material-ui.com/components/typography/#install-with-npm
// 2. https://fontsource.org/docs/guides/nextjs
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />;
        </>
    );
}

export default MyApp;
