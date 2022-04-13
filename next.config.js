const gitHubPageSubpath = "personal-portfolio";

// reference: https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // reference: https://nextjs.org/docs/api-reference/next.config.js/basepath
    basePath: `/${gitHubPageSubpath}`,
    // Use the GitHub Pages subpath in production and localhost for development.
    assetPrefix: isProd ? `/${gitHubPageSubpath}/` : '',
};

module.exports = nextConfig;
