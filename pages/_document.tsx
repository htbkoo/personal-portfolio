import { Html, Head, Main, NextScript } from 'next/document'

// reference: https://nextjs.org/docs/advanced-features/custom-document#typescript
// import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
// class MyDocument extends Document {
//     static async getInitialProps(ctx: DocumentContext) {
//         const initialProps = await Document.getInitialProps(ctx);
//
//         return initialProps;
//     }
// }

const MyDocument = ()=>{
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/icons-192.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#3f51b5" />
                <meta name="Description" content="Contains the previous works and community contacts" />
                {/* Reference: https://stackoverflow.com/a/52079972 */}
                <meta name="ui-version" content={process.env.NEXT_PUBLIC_GIT_SHA} />

                {/*
                  manifest.json provides metadata used when your web app is added to the
                  homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
                */}
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                {/*
                  Notice the use of %PUBLIC_URL% in the tags above.
                  It will be replaced with the URL of the `public` folder during the build.
                  Only files inside the `public` folder can be referenced from the HTML.

                  Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                  work correctly both with client-side routing and a non-root public URL.
                  Learn how to configure a non-root public URL by running `npm run build`.
                */}

                {/*  Moved to JS side to avoid blocking rendering */}
                {/*    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">*/}
                {/*    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument;
