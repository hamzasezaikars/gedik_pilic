import { PageIntro } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { sectors } from "@/data/company";
import { contact } from "@/data/contact";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Kurumsal Satış & Dağıtım",
  "Düzce’de restoran, otel, kafe, market ve toplu yemek işletmeleri için Gedik Piliç ürün talebi ve kurumsal satış iletişimi.",
  "/kurumsal-satis",
);
export default function Business() {
  return (
    <>
      <PageIntro
        eyebrow="KURUMSAL SATIŞ & DAĞITIM"
        title="İşletmeniz için Gedik Piliç ürünleri."
        description="Kurumsal ihtiyaçlarınız ve ürün talepleriniz için bizimle iletişime geçebilirsiniz."
        items={[{ label: "Kurumsal Satış & Dağıtım" }]}
      />
      <section className="section container content-grid">
        <div className="prose">
          <p className="eyebrow">İŞLETMENİZE UYGUN SEÇENEKLER</p>
          <h2>
            Ürün ihtiyacınızı
            <br />
            birlikte değerlendirelim.
          </h2>
          <p>
            Menünüzü, ilgilendiğiniz ürün grubunu ve tahmini ihtiyacınızı
            paylaşın. Ürün özelliklerini ve tedarik koşullarını sizinle doğrudan
            görüşelim.
          </p>
          <div className="sectors">
            {sectors.map((s) => (
              <div className="sector" key={s}>
                {s}
              </div>
            ))}
          </div>
          <h3>Talebiniz nasıl değerlendirilir?</h3>
          <p>
            Ürün grubu ve kullanım ihtiyacınız üzerinden görüşme yapılır.
            Sipariş miktarı, teslimat koşulları ve hizmet verilebilen konumlar
            iletişim sırasında netleştirilir.
          </p>
          <div className="info-box">
            <h3>Doğrudan iletişim</h3>
            <p>Yetkili: {contact.representative}</p>
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <br />
              <a href={contact.mobileHref}>{contact.mobile}</a>
            </p>
            <a className="text-link" href={contact.whatsapp}>
              WhatsApp’tan Yazın
            </a>
          </div>
        </div>
        <InquiryForm kind="quote" />
      </section>
    </>
  );
}
