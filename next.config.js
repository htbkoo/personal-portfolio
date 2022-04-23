// reference: https://github.com/cyrilwanner/next-optimized-images#installation
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// reference:
// 1. https://github.com/vercel/next.js/blob/canary/examples/progressive-web-app/next.config.js
// 2. https://github.com/shadowwalker/next-pwa/issues/252
const pwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// reference: https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer#usage-with-next-compose-plugins
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

// reference: https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
const isProd = process.env.NODE_ENV === "production";

// reference: https://blog.sallai.me/deploy-next-site-to-github-pages
const basePath = isProd ? "/personal-portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // maybe we will need to disable this to fix `material-ui` and `next.js` styles incompatibility issue
    // reference: https://stackoverflow.com/a/67276953
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

    // reference: https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
    trailingSlash: true,
};

module.exports = withPlugins([
    // reference: https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer#usage-with-next-compose-plugins
    [withBundleAnalyzer],
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
