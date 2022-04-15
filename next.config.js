// reference: https://github.com/cyrilwanner/next-optimized-images#installation
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// reference:
// 1. https://github.com/vercel/next.js/blob/canary/examples/progressive-web-app/next.config.js
// 2. https://github.com/shadowwalker/next-pwa/issues/252
const pwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// reference: https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
const isProd = process.env.NODE_ENV === "production";

// reference: https://blog.sallai.me/deploy-next-site-to-github-pages
const basePath = isProd ? "/personal-portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // reference: https://nextjs.org/docs/api-reference/next.config.js/basepath
    basePath,
    // Use the GitHub Pages subpath in production and localhost for development.
    assetPrefix: `${basePath}/`,

    // reference: https://github.com/cyrilwanner/next-optimized-images/issues/272
    images: {
        loader: "custom",
        // reference: https://stackoverflow.com/a/68012194
        disableStaticImages: true,
    },

    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

module.exports = withPlugins([
    [
        optimizedImages,
        {
            /* config for next-optimized-images */
        },
    ],

    // your other plugins here
    [
        pwa,
        {
            pwa: {
                dest: `public`,
                runtimeCaching,
                // Don't precache files under .next/static/chunks/images (Highly recommend this to work with next-optimized-images plugin)
                // reference: https://github.com/shadowwalker/next-pwa#available-options
                buildExcludes: [/chunks\/images\/.*$/],
                // recommend: set to false if your start url always returns same HTML document, then start url will be precached, this will help to speed up first load.
                dynamicStartUrl: false,
            },
        },
    ],

    nextConfig,
]);
