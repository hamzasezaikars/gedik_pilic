import { PageIntro, Stats, ContactCTA } from "@/components/ui";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Gedik Piliç Hakkında",
  "1968’de Eşme’de başlayan Gedik Piliç marka hikâyesi, entegre üretim yaklaşımı ve ihracat ağı hakkında bilgi.",
  "/gedik-pilic",
);
export default function Brand() {
  return (
    <>
      <PageIntro
        eyebrow="GEDİK PİLİÇ ANA MARKASI"
        title="1968’den bugüne birikim."
        description="Uşak’ın Eşme ilçesinde başlayan bir üretim hikâyesi; bugün farklı pazarlara ulaşan geniş bir ürün dünyası."
        items={[
          { label: "Kurumsal", href: "/kurumsal" },
          { label: "Gedik Piliç Hakkında" },
        ]}
      />
      <section className="section container">
        <div className="prose">
          <h2>Bir aile girişiminden entegre üretime.</h2>
          <p>
            Halil Gedik’in 1968 yılında Eşme’de canlı tavuk yetiştiriciliğine
            başlaması, Gedik Piliç’in temellerini oluşturdu. 1975’te günlük 25
            tavuk kesimiyle gelişen faaliyetler, sonraki dönemde Osman Gedik’in
            öncülüğünde yeni tesislerle büyüdü.
          </p>
          <p>
            Kesimhane, yem fabrikası, kuluçkahane ve damızlık çiftliklerinin bir
            araya gelmesiyle üretimin farklı aşamalarını kapsayan entegre bir
            yapı oluştu.
          </p>
        </div>
        <div className="timeline">
          {[
            [
              "1968",
              "Halil Gedik ile Eşme’de canlı tavuk yetiştiriciliğinin başlangıcı.",
            ],
            ["1975", "Günlük 25 tavuk kesimiyle kesim süreçlerinin gelişmesi."],
            [
              "Sonraki dönem",
              "İkinci kuşak Osman Gedik döneminde entegre üretim yapısının kurulması.",
            ],
            [
              "Bugün",
              "Türkiye’den farklı ülkelere uzanan üretim ve ihracat ağı.",
            ],
          ].map(([year, copy]) => (
            <div key={year}>
              <strong>{year}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <Stats />
      <section className="section container">
        <div className="content-grid">
          <div className="prose">
            <p className="eyebrow">ÜRETİM YAKLAŞIMI</p>
            <h2>Birbiriyle bağlantılı süreçler.</h2>
            <p>
              Gedik Piliç ana üretim tesislerinin entegre yapısı;
              yetiştiricilik, yem, kuluçka, kesim ve ileri işleme adımlarını
              birlikte ele alır. Ürün çeşitliliği, farklı mutfak ihtiyaçlarına
              uygun seçenekler sunulmasına olanak tanır.
            </p>
            <h3>Teknoloji ve gıda güvenliği</h3>
            <p>
              Üretimden ambalajlamaya kadar süreçlerin kontrollü yürütülmesi,
              izlenebilirlik ve uygun muhafaza koşulları gıda güvenliği
              yaklaşımının temel unsurlarıdır.
            </p>
            <h3>İhracat</h3>
            <p>
              Ana marka, yaklaşık 36 ülkeye ulaşan ihracat ağıyla uluslararası
              pazarlarda da yer almaktadır. Bu bilgiler Düzce bayisinin
              operasyon ölçeğini ifade etmez.
            </p>
          </div>
          <div className="info-box">
            <h3>İleri işlenmiş ürünler</h3>
            <p>
              Ana markanın paylaşılan aylık kapasite dağılımı yaklaşık olarak:
            </p>
            <ul>
              <li>500 ton döner</li>
              <li>3.000 ton şarküteri</li>
              <li>3.500 ton pişmiş ve kaplamalı ürün</li>
            </ul>
            <p>
              Toplam yaklaşık 7.000 tonluk kapasite, Gedik Piliç ana üretim
              tesislerine aittir.
            </p>
          </div>
        </div>
        <div className="info-cards">
          <article className="info-card">
            <h3>Vizyon</h3>
            <p>
              Ürün çeşitliliği, üretim birikimi ve farklı pazarlara erişimiyle
              güvenilir gıda sunma yaklaşımını geliştirmek.
            </p>
          </article>
          <article className="info-card">
            <h3>Misyon</h3>
            <p>
              Farklı müşteri ihtiyaçlarına yönelik piliç ürünlerini, üretim
              süreçlerine gösterilen özenle sofralara ulaştırmak.
            </p>
          </article>
          <article className="info-card">
            <h3>Sürekli gelişim</h3>
            <p>
              Üretim teknolojisi, ürün geliştirme ve süreç iyileştirme
              çalışmalarını kalite odağında ele almak.
            </p>
          </article>
        </div>
        <p className="fineprint">
          Bu sayfa ana markanın kurumsal bilgilerinin özgün bir özetidir.{" "}
          <a
            href="https://gedikpilic.com/kurumsal/tarihcemiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaynak: Gedik Piliç resmi web sitesi
          </a>
          .
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
