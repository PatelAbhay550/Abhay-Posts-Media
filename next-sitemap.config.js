// next-sitemap.config.js

module.exports = {
  siteUrl: "https://abhaypostsmedia.vercel.app",
  generateRobotsTxt: true, // (optional) generate a robots.txt file
  // Optional: Add custom configuration
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*"], // Exclude specific routes or patterns
};
