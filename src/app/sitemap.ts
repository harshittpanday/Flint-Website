import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/cookies", "/licenses", "/disclaimer", "/security"].map((path, index) => ({
    url: `${siteOrigin}${path}`,
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : .3,
  }));
}
