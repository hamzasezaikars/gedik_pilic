import type { Metadata } from "next";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export function seo(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Düzce Gedik Piliç`,
      description,
      url: path,
      type: "website",
      locale: "tr_TR",
      siteName: "Düzce Gedik Piliç",
    },
  };
}
