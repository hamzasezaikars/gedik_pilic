import { PageIntro } from "@/components/ui";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Çerez Politikası",
  "Düzce Gedik Piliç sitesinin çerez kullanımı ve harita gibi harici hizmetlere ilişkin bilgiler.",
  "/cerez-politikasi",
);
export default function Cookies() {
  return (
    <>
      <PageIntro
        eyebrow="ÇEREZLER"
        title="Çerez politikası"
        description="Site ve harici hizmetlerin tarayıcı üzerindeki kullanımına ilişkin bilgiler."
        items={[{ label: "Çerez Politikası" }]}
      />
      <article className="section container legal">
        <h2>Site tarafından kullanılan çerezler</h2>
        <p>
          Bu sürümde reklam, analiz veya pazarlama amacıyla çerez yerleştiren
          bir araç kullanılmaz. Ürün arama ve filtre tercihleri yalnızca açık
          sayfanın belleğinde tutulur.
        </p>
        <h2>Harici hizmetler</h2>
        <p>
          Google haritasını açtığınızda veya dış bağlantıları ziyaret
          ettiğinizde ilgili sağlayıcılar kendi politikaları doğrultusunda çerez
          kullanabilir. Harita ziyaretçinin seçimiyle yüklenir.
        </p>
        <h2>Tarayıcı tercihleri</h2>
        <p>
          Çerezleri tarayıcınızın gizlilik ayarlarından yönetebilir veya
          silebilirsiniz. Barındırma platformunun erişim için kullandığı teknik
          çerezler varsa bunlar ilgili platformun koşullarına tabidir.
        </p>
      </article>
    </>
  );
}
