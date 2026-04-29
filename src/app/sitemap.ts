import type { MetadataRoute } from "next";
import { seoPages } from "@/data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://editworksheets.org";

  const seoUrls = Object.keys(seoPages).map((slug) => ({
    url: `${siteUrl}/seo/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    ...seoUrls,
  ];
}