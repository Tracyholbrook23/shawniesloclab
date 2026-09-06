import type { MetadataRoute } from "next";

const BASE_URL = "https://www.shawniesloclab.com";

const routes = ["", "/about", "/gallery", "/library", "/podcast", "/support"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
  }));
}
