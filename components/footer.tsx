import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { contact } from "@/data/contact";
import { categories } from "@/data/categories";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link className="wordmark" href="/">
              <Image
                className="brand-image"
                src="/brand/logo.png"
                alt="Gedik Piliç"
                width={111}
                height={50}
                priority
              />
              <small>DÜZCE BAYİSİ</small>
            </Link>
            <p>
              Gedik Piliç ürünlerini Düzce’de
              <br />
              sofralarınız ve işletmenizle buluşturuyoruz.
            </p>
            <span className="footer-location">
              <MapPin size={16} /> Düzce, Türkiye
            </span>
          </div>
          <div>
            <h3>Kurumsal</h3>
            <Link href="/kurumsal">Düzce Bayisi</Link>
            <Link href="/gedik-pilic">Gedik Piliç Hakkında</Link>
            <Link href="/kurumsal-satis">Kurumsal Satış & Dağıtım</Link>
            <Link href="/kalite">Kalite ve Gıda Güvenliği</Link>
          </div>
          <div>
            <h3>Ürünlerimiz</h3>
            {categories.map((c) => (
              <Link key={c.slug} href={`/urunler/${c.slug}`}>
                {c.name}
              </Link>
            ))}
            <Link href="/urunler">Tüm Ürünler</Link>
          </div>
          <div>
            <h3>İletişim</h3>
            <p>{contact.address}</p>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.mobileHref}>{contact.mobile}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Düzce Gedik Piliç</p>
          <div>
            <Link href="/kvkk">KVKK</Link>
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/cerez-politikasi">Çerez Politikası</Link>
          </div>
        </div>
        <div className="container footer-note">
          Bu web sitesi Gedik Piliç Düzce bayi iletişim ve ürün tanıtım sitesi
          olarak hazırlanmıştır.
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={contact.whatsapp}
        aria-label="WhatsApp üzerinden iletişime geç"
      >
        <MessageCircle size={25} />
        <span>WhatsApp</span>
      </a>
      <div className="mobile-contact">
        <a href={contact.phoneHref}>
          <Phone size={18} />
          Ara
        </a>
        <a href={contact.whatsapp}>
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a href={contact.maps}>
          <MapPin size={18} />
          Yol Tarifi
        </a>
      </div>
    </>
  );
}
