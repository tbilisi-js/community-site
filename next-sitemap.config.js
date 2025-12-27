/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
        process.env.SITE_URL ||
        (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
        "https://tbilisijs.dev",
    generateIndexSitemap: false,
    generateRobotsTxt: true,
};
