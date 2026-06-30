export type Sponsor = {
    name: string;
    url: string;
    tagline: string;
};

export const sponsors: Record<string, Sponsor> = {
    salmon: {
        name: "Salmon",
        url: "https://salmon.ph/",
        tagline: "a fintech company bringing buy-now-pay-later services to the Philippines",
    },
    lightspeed: {
        name: "Lightspeed",
        url: "https://www.lightspeedhq.com/",
        tagline: "a commerce platform empowering retailers and restaurants worldwide",
    },
    tradingview: {
        name: "TradingView",
        url: "https://www.tradingview.com/",
        tagline: "the world's leading charting platform and social network for traders and investors",
    },
    "social-discovery-group": {
        name: "Social Discovery Group",
        url: "https://socialdiscoverygroup.com/",
        tagline: "a global tech company building products for meaningful social connections",
    },
    exante: {
        name: "Exante",
        url: "https://exante.eu/",
        tagline: "a multi-asset broker offering direct access to global financial markets",
    },
    jettycloud: {
        name: "JettyCloud",
        url: "https://www.jettycloud.com/",
        tagline: "a software development company specializing in cloud and enterprise solutions",
    },
};
