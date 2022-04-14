import type { NextPage } from "next";
import Head from "next/head";

import App from "@/src/components/App";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hey&apos;s Personal Portfolio</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" href="/personal-portfolio/favicon.ico" />
            </Head>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div className="background"/>
            <div id="root">
                <App/>
            </div>
        </div>
    );
};

export default Home;
