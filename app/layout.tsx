import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/ui";
import { contact } from "@/data/contact";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Düzce Gedik Piliç | Gedik Piliç Düzce Bayisi",
    template: "%s | Düzce Gedik Piliç",
  },
  description:
    "Gedik Piliç Düzce bayisi. Piliç, yemeye hazır ve şarküteri ürünleri; bireysel ve kurumsal talepleriniz için bizimle iletişime geçin.",
  robots: process.env.NEXT_PUBLIC_SITE_URL
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          İçeriğe geç
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: contact.name,
            url: siteUrl,
            telephone: "+903805149933",
            email: contact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Fevzi Çakmak Mahallesi, Bolu Caddesi No:227",
              addressLocality: "Düzce",
              addressRegion: "Düzce",
              addressCountry: "TR",
            },
          }}
        />
      </body>
    </html>
  );
}
