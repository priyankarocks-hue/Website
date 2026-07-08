import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/speaking", "/advisory", "/products", "/contact", "/insights"];

  const staticEntries = pages.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
