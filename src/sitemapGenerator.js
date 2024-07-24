require("babel-register")({
    presets: ["es2015", "react"],
});

const router = require("./sitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return new Sitemap(router)
        .build("https://club.minglemood.city")
        .save("./public/sitemap.xml");
}

generateSitemap();
