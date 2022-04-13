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
};

module.exports = nextConfig;
