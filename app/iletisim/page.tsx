import { MapPin, Phone, Mail } from "lucide-react";
import { PageIntro, Button } from "@/components/ui";
import { InquiryForm } from "@/components/inquiry-form";
import { Map } from "@/components/map";
import { contact } from "@/data/contact";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "İletişim",
  "Düzce Gedik Piliç: Fevzi Çakmak Mahallesi Bolu Caddesi No:227. Telefon 0380 514 99 33, WhatsApp 0552 313 99 33.",
  "/iletisim",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="BİZE ULAŞIN"
        title="Bir telefon kadar yakınız."
        description="Ürünler, kurumsal talepler veya bayi bilgileri için bizimle iletişime geçin."
        items={[{ label: "İletişim" }]}
      />
      <section className="section container">
        <div className="contact-cards">
          <div>
            <MapPin />
            <h2>Düzce Gedik Piliç</h2>
            <p>{contact.address}</p>
            <a className="text-link" href={contact.maps}>
              Yol Tarifi Al
            </a>
          </div>
          <div>
            <Phone />
            <h2>Telefon & WhatsApp</h2>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.mobileHref}>{contact.mobile}</a>
            <a className="text-link" href={contact.whatsapp}>
              WhatsApp’tan Yaz
            </a>
          </div>
          <div>
            <Mail />
            <h2>E-posta & Yetkili</h2>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <p>Yetkili: {contact.representative}</p>
            <a className="text-link" href={`mailto:${contact.email}`}>
              E-posta Gönder
            </a>
          </div>
        </div>
        <div className="content-grid">
          <div>
            <p className="eyebrow">DÜZCE MERKEZ</p>
            <h2>Bayimize bekliyoruz.</h2>
            <p className="lead">
              Konumumuzu haritada inceleyebilir, bulunduğunuz yerden yol tarifi
              alabilirsiniz.
            </p>
            <Map />
            <div className="actions" style={{ marginTop: 22 }}>
              <Button href={contact.maps}>Yol Tarifi Al</Button>
              <Button href={contact.phoneHref} variant="outline">
                Hemen Ara
              </Button>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
