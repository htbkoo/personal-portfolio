const gitHubPageSubpath = "personal-portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // reference: https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn
    basePath: `/${gitHubPageSubpath}`,
    assetPrefix: `/${gitHubPageSubpath}/`,
};

module.exports = nextConfig;
