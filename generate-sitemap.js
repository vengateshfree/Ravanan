// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://www.ravananpackersandmovers.com/"; // 🔹 change if needed

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/branches", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/works", changefreq: "weekly", priority: 0.8 },
  { url: "/blogs", changefreq: "weekly", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.7 },
  { url: "/vision", changefreq: "monthly", priority: 0.7 },
  { url: "/profile", changefreq: "monthly", priority: 0.7 },
  { url: "/howitwork", changefreq: "monthly", priority: 0.7 },

  { url: "/services", changefreq: "weekly", priority: 0.9 },
  { url: "/services/car", changefreq: "weekly", priority: 0.8 },
  { url: "/services/bike", changefreq: "weekly", priority: 0.8 },
  { url: "/services/home", changefreq: "weekly", priority: 0.8 },
  { url: "/services/office", changefreq: "weekly", priority: 0.8 },
  { url: "/services/package", changefreq: "weekly", priority: 0.8 },
  { url: "/services/location", changefreq: "weekly", priority: 0.8 },
  { url: "/services/warhouse", changefreq: "weekly", priority: 0.8 },
  { url: "/services/loading", changefreq: "weekly", priority: 0.8 },
];

routes.forEach(route => sitemap.write(route));

sitemap.end();

await streamToPromise(sitemap);

console.log("✅ Sitemap generated successfully!");
