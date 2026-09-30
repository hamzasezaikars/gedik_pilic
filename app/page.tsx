import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Snowflake,
  PackageCheck,
  Handshake,
  MapPin,
  Phone,
  Check,
  Utensils,
} from "lucide-react";
import { Button, Stats, ContactCTA } from "@/components/ui";
import { categories } from "@/data/categories";
import { contact } from "@/data/contact";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Gedik Piliç Kalitesi Düzce’de",
  "Düzce Gedik Piliç bayisinde piliç, yemeye hazır ve şarküteri ürünlerini keşfedin. Kurumsal ürün talepleri ve iletişim.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/images/hero/chicken.webp"
            alt="Pilav, kestane ve narla servis edilmiş bütün fırın piliç"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow light">
            <span /> GEDİK PİLİÇ DÜZCE BAYİSİ
          </p>
          <h1>
            Güvendiğiniz kalite.
            <br />
            Şimdi sofranıza
            <br />
            <em>daha yakın.</em>
          </h1>
          <p>
            Taze piliç ürünlerinden pratik seçeneklere,
            <br className="desktop-break" /> Gedik Piliç kalitesini Düzce’de
            müşterilerimiz
            <br className="desktop-break" /> ve işletmelerle buluşturuyoruz.
          </p>
          <div className="actions">
            <Button href="/urunler">Ürünleri İncele</Button>
            <Button href="/iletisim" variant="outline">
              İletişime Geç
            </Button>
          </div>
          <Link className="hero-business" href="/kurumsal-satis">
            <Utensils size={16} /> İşletmeniz için kurumsal tedarik seçenekleri
          </Link>
        </div>
        <div className="hero-caption">
          <span>SOFRALARINIZ İÇİN</span>
          <strong>Gedik Piliç Kalitesi Düzce’de</strong>
        </div>
      </section>
      <section className="trust">
        <div className="container trust-grid">
          {[
            {
              icon: ShieldCheck,
              title: "Gedik Piliç Güvencesi",
              text: "Köklü bir markanın birikimi",
            },
            {
              icon: PackageCheck,
              title: "Geniş Ürün Yelpazesi",
              text: "Her ihtiyaca uygun seçenekler",
            },
            {
              icon: Snowflake,
              title: "Soğuk Zincir Hassasiyeti",
              text: "Ürüne ve güvene gösterilen özen",
            },
            {
              icon: Handshake,
              title: "Kurumsal Satış Desteği",
              text: "İşletmenize özel iletişim",
            },
          ].map((t) => (
            <div key={t.title}>
              <t.icon size={27} strokeWidth={1.5} />
              <div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ÜRÜN GRUPLARIMIZ</p>
            <h2>Her mutfağa, her ihtiyaca.</h2>
            <p>Gedik Piliç’in geniş ürün dünyasını keşfedin.</p>
          </div>
          <Button href="/urunler" variant="ghost">
            Tüm Ürünleri Görüntüle
          </Button>
        </div>
        <div className="category-grid">
          {categories.map((c, i) => (
            <Link
              href={`/urunler/${c.slug}`}
              className="category-card"
              key={c.slug}
            >
              <div className="category-image">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span>0{i + 1}</span>
              </div>
              <div className="category-copy">
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <span className="text-link">Ürünleri Keşfet</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="local-section">
        <div className="container local-grid">
          <div className="local-visual">
            <Image
              src="/images/corporate/kitchen.webp"
              alt="Gedik Piliç ürünleriyle hazırlanmış tavuk döner dürüm sunumu"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="location-label">
              <MapPin />
              <div>
                <strong>Düzce’de, size yakın.</strong>
                <span>Fevzi Çakmak Mahallesi · Merkez</span>
              </div>
            </div>
          </div>
          <div className="local-copy">
            <p className="eyebrow">GEDİK PİLİÇ DÜZCE</p>
            <h2>
              Düzce’de
              <br />
              yanınızdayız.
            </h2>
            <p>
              Günlük mutfağınızdan işletmenizin ürün ihtiyacına kadar, doğru
              seçenekleri birlikte belirliyoruz. Gedik Piliç ürünlerini yakından
              tanımak için bayimize bekliyoruz.
            </p>
            <ul className="check-list">
              <li>
                <Check /> Bireysel ve kurumsal müşterilere ürün desteği
              </li>
              <li>
                <Check /> Piliç, yemeye hazır ve şarküteri seçenekleri
              </li>
              <li>
                <Check /> Doğrudan, kolay ve samimi iletişim
              </li>
            </ul>
            <div className="contact-summary">
              <MapPin size={20} />
              <p>{contact.address}</p>
            </div>
            <div className="actions">
              <Button href={contact.maps} variant="primary">
                Yol Tarifi Al
              </Button>
              <Button href={contact.phoneHref} variant="ghost">
                <Phone size={16} />
                {contact.phone}
              </Button>
            </div>
            <div className="small-contact">
              <a href={contact.mobileHref}>{contact.mobile}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.whatsapp}>WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <section className="section container b2b-home">
        <div>
          <p className="eyebrow">KURUMSAL SATIŞ & DAĞITIM</p>
          <h2>
            İşletmenizin mutfağında
            <br />
            güvenilir bir marka.
          </h2>
          <p>
            Restoran, otel, kafe, catering, market, kasap ve toplu yemek
            firmaları için Gedik Piliç ürünleri ve tedarik seçenekleri hakkında
            bilgi alın.
          </p>
          <Button href="/kurumsal-satis">Kurumsal Teklif Al</Button>
        </div>
        <div className="b2b-note">
          <Utensils size={36} strokeWidth={1.3} />
          <h3>
            Sizin ihtiyacınız.
            <br />
            Birlikte belirlediğimiz çözüm.
          </h3>
          <p>
            Ürün grupları ve talep detaylarınızı paylaşın; ihtiyaçlarınızı
            birlikte değerlendirelim.
          </p>
          <span>RESTORAN · OTEL · MARKET · CATERING</span>
        </div>
      </section>
      <section className="quality-home">
        <div className="container">
          <ShieldCheck size={44} strokeWidth={1.3} />
          <div>
            <p className="eyebrow">KALİTE VE GIDA GÜVENLİĞİ</p>
            <h2>Çiftlikten sofraya kalite yaklaşımı.</h2>
            <p>
              Gedik Piliç ana markasının üretim, ambalajlama ve gıda güvenliği
              yaklaşımını tanıyın.
            </p>
          </div>
          <Button href="/kalite" variant="outline">
            Yaklaşımımızı İnceleyin
          </Button>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
