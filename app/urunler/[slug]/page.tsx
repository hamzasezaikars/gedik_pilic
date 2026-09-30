import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { contact } from "@/data/contact";
import {
  PageIntro,
  Breadcrumb,
  Button,
  ContactCTA,
  JsonLd,
} from "@/components/ui";
import { Catalog } from "@/components/catalog";
import { seo, siteUrl } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return [...categories, ...products].map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = categories.find((c) => c.slug === slug);
  const p = products.find((p) => p.slug === slug);
  return seo(
    c?.name || p?.name || "Ürün bulunamadı",
    c
      ? `${c.name}: Gedik Piliç Düzce ürün seçeneklerini inceleyin.`
      : p?.shortDescription || "Ürün bulunamadı",
    `/urunler/${slug}`,
  );
}
export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (category)
    return (
      <>
        <PageIntro
          eyebrow="ÜRÜN GRUPLARIMIZ"
          title={category.name}
          description={category.description}
          items={[
            { label: "Ürünler", href: "/urunler" },
            { label: category.name },
          ]}
        />
        <section className="section container">
          <Catalog category={category.slug} />
        </section>
        <ContactCTA />
      </>
    );
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  const c = categories.find((c) => c.slug === p.category)!;
  return (
    <>
      <section className="section container">
        <Breadcrumb
          items={[
            { label: "Ürünler", href: "/urunler" },
            { label: c.name, href: `/urunler/${c.slug}` },
            { label: p.name },
          ]}
        />
        <div className="product-detail">
          <div>
            <div className="detail-image">
              <Image
                src={p.image}
                alt={
                  p.imageRepresentative ? `${c.name} temsili görseli` : p.name
                }
                fill
                priority
                sizes="(max-width:767px) 90vw, 45vw"
              />
            </div>
            {p.imageRepresentative && (
              <p className="fineprint">
                Görsel ürün grubunu temsil eder; ürüne özel ambalaj fotoğrafı
                değildir.
              </p>
            )}
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{c.name}</p>
            <h1>{p.name}</h1>
            <p>{p.shortDescription}</p>
            <dl>
              <dt>Ürün grubu</dt>
              <dd>{c.name}</dd>
              <dt>Alt kategori</dt>
              <dd>{p.subcategory}</dd>
              {p.weight && (
                <>
                  <dt>Gramaj</dt>
                  <dd>{p.weight}</dd>
                </>
              )}
              {p.storage && (
                <>
                  <dt>Saklama</dt>
                  <dd>{p.storage}</dd>
                </>
              )}
            </dl>
            <p>{p.description}</p>
            <div className="actions">
              <Button href={`/iletisim?urun=${encodeURIComponent(p.name)}`}>
                Ürün Hakkında Bilgi Al
              </Button>
              <Button
                href={`${contact.whatsapp}?text=${encodeURIComponent(`Merhaba, ${p.name} hakkında bilgi almak istiyorum.`)}`}
                variant="outline"
              >
                <MessageCircle size={17} /> WhatsApp’tan Sor
              </Button>
              <Button href={contact.phoneHref} variant="ghost">
                <Phone size={16} />
                Hemen Ara
              </Button>
            </div>
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.shortDescription,
          category: c.name,
          brand: { "@type": "Brand", name: "Gedik Piliç" },
          ...(p.imageRepresentative ? {} : { image: siteUrl + p.image }),
        }}
      />
      <ContactCTA />
    </>
  );
}
