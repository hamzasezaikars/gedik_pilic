import Image from "next/image";
import { PageIntro, Button, ContactCTA } from "@/components/ui";
import { contact } from "@/data/contact";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Kurumsal · Gedik Piliç Düzce",
  "Gedik Piliç Düzce bayisini tanıyın. Bireysel müşteriler ve işletmeler için ürün bilgisi, bayi iletişimi ve konum.",
  "/kurumsal",
);
export default function Corporate() {
  return (
    <>
      <PageIntro
        eyebrow="DÜZCE’DEKİ SATIŞ NOKTANIZ"
        title="Gedik Piliç Düzce"
        description="Köklü bir markanın ürünlerini, yerel ve doğrudan iletişimin gücüyle Düzce’de müşterilerimizle buluşturuyoruz."
        items={[{ label: "Kurumsal" }]}
      />
      <section className="section container">
        <div className="content-grid">
          <div className="prose">
            <p className="eyebrow">DÜZCE BAYİSİ</p>
            <h2>
              İyi ürün. Doğru bilgi.
              <br />
              Kolay iletişim.
            </h2>
            <p>
              Fevzi Çakmak Mahallesi, Bolu Caddesi’ndeki satış noktamızda Gedik
              Piliç ürünlerini bireysel ve kurumsal müşterilerimizle
              buluşturuyoruz. Piliç, yemeye hazır ve şarküteri grupları hakkında
              bilgi almak için bize doğrudan ulaşabilirsiniz.
            </p>
            <p>
              Düzce bayimiz bir satış ve bayi noktasıdır. Üretim süreçleri ve
              markaya ait kapasite bilgileri Gedik Piliç ana markası ve üretim
              tesisleri kapsamında değerlendirilmelidir.
            </p>
            <h3>Hizmet yaklaşımımız</h3>
            <p>
              Ürün ihtiyacınızı anlamayı, seçenekleri açık bir dille paylaşmayı
              ve sorularınızı doğrudan yanıtlamayı önemsiyoruz. Tedarik, ürün
              bulunabilirliği ve sipariş koşullarını talebiniz doğrultusunda
              birlikte netleştiriyoruz.
            </p>
          </div>
          <div>
            <div className="local-visual">
              <Image
                src="/images/corporate/kitchen.webp"
                alt="Gedik Piliç ürünleriyle hazırlanmış yemek sunumu"
                fill
                sizes="(max-width:767px) 90vw, 45vw"
              />
            </div>
            <p className="fineprint">
              Gedik Piliç yemek görseli; bayi mekânına ait fotoğraf değildir.
            </p>
          </div>
        </div>
        <div className="info-cards">
          <article className="info-card">
            <h3>Bireysel müşteriler</h3>
            <p>
              Evde hazırlayacağınız tarifler için ürün gruplarını inceleyin;
              ürün özelliklerini ve güncel seçenekleri bayimize sorun.
            </p>
          </article>
          <article className="info-card">
            <h3>Kurumsal müşteriler</h3>
            <p>
              İşletmenizin menüsüne ve ürün ihtiyacına ilişkin detayları
              paylaşın. Taleplerinizi birlikte değerlendirelim.
            </p>
          </article>
          <article className="info-card">
            <h3>Ürün gruplarımız</h3>
            <p>
              Piliç ürünleri, yemeye hazır seçenekler ve şarküteri grubuyla
              farklı kullanım alanlarına yönelik bir katalog.
            </p>
          </article>
        </div>
      </section>
      <section className="local-section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">LOKASYON & İLETİŞİM</p>
            <h2>Düzce’de buluşalım.</h2>
            <p className="lead">{contact.address}</p>
            <p>Yetkili: {contact.representative}</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Button href={contact.maps}>Yol Tarifi Al</Button>
              <Button href="/iletisim" variant="outline">
                İletişim Bilgileri
              </Button>
            </div>
          </div>
          <div className="info-box">
            <h3>Gedik Piliç Ana Markası</h3>
            <p>
              1968’den bugüne uzanan marka hikâyesini, entegre üretim yapısını
              ve gıda güvenliği yaklaşımını ayrı sayfamızda inceleyebilirsiniz.
            </p>
            <Button href="/gedik-pilic" variant="ghost">
              Gedik Piliç Hakkında
            </Button>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
