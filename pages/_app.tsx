import "../styles/globals.css";
import type { AppProps } from "next/app";
// reference:
// 1. https://material-ui.com/components/typography/#install-with-npm
// 2. https://fontsource.org/docs/guides/nextjs
import "@fontsource/roboto";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
