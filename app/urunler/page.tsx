import { PageIntro, ContactCTA } from "@/components/ui";
import { Catalog } from "@/components/catalog";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Ürünler",
  "Gedik Piliç Düzce ürün kataloğu: piliç, yemeye hazır ve şarküteri seçeneklerini arayın, inceleyin.",
  "/urunler",
);
export default function Products() {
  return (
    <>
      <PageIntro
        eyebrow="GEDİK PİLİÇ ÜRÜN DÜNYASI"
        title="Mutfağınız için doğru seçenek."
        description="Piliç ürünlerinden pratik alternatiflere; sofranız ve işletmeniz için ürün gruplarımızı keşfedin."
        items={[{ label: "Ürünler" }]}
      />
      <section className="section container">
        <Catalog />
      </section>
      <ContactCTA />
    </>
  );
}
