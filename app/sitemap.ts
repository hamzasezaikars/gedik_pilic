import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/kurumsal",
    "/gedik-pilic",
    "/urunler",
    "/kurumsal-satis",
    "/kalite",
    "/iletisim",
    "/kvkk",
    "/gizlilik",
    "/cerez-politikasi",
    ...[...categories, ...products].map((p) => `/urunler/${p.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}/`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/urunler/") ? 0.7 : 0.8,
  }));
}
