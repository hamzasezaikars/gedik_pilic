import { PageIntro } from "@/components/ui";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Gizlilik Politikası",
  "Düzce Gedik Piliç web sitesinde gizlilik, form verileri ve üçüncü taraf bağlantıları hakkında bilgi.",
  "/gizlilik",
);
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="GİZLİLİK"
        title="Gizlilik politikası"
        description="Web sitesini kullanırken bilgilerinizin nasıl ele alındığına ilişkin açıklamalar."
        items={[{ label: "Gizlilik" }]}
      />
      <article className="section container legal">
        <h2>Bilgi toplama</h2>
        <p>
          Bu web sitesi ürün ve bayi tanıtımı amacı taşır. Üyelik, kullanıcı
          hesabı veya ödeme işlemi bulunmaz. Demo formlarda girilen bilgiler
          gönderilmez ve kalıcı olarak saklanmaz.
        </p>
        <h2>Teknik kayıtlar</h2>
        <p>
          Barındırma hizmeti, siteyi sunabilmek ve güvenliği sağlamak amacıyla
          IP adresi ve istek zamanı gibi teknik kayıtlar işleyebilir. Bu
          işlemler barındırma sağlayıcısının koşullarına tabidir.
        </p>
        <h2>Dış hizmetler</h2>
        <p>
          WhatsApp, Google Haritalar ve e-posta bağlantıları kullanıldığında
          ilgili hizmetin gizlilik koşulları geçerlidir. Site içi harita,
          ziyaretçi tarafından açılana kadar yüklenmez.
        </p>
        <h2>İletişim</h2>
        <p>
          Gizlilik sorularınızı{" "}
          <a href="mailto:tavukeviduzce@gmail.com">tavukeviduzce@gmail.com</a>{" "}
          adresine gönderebilirsiniz. Kişisel verilere ilişkin açıklamalar için{" "}
          <a href="/kvkk">KVKK sayfasını</a> inceleyin.
        </p>
      </article>
    </>
  );
}
