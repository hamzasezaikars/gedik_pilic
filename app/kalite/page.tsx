import {
  ShieldCheck,
  Snowflake,
  PackageCheck,
  Leaf,
  Recycle,
  ScanLine,
} from "lucide-react";
import { PageIntro, ContactCTA, Button } from "@/components/ui";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "Kalite ve Gıda Güvenliği",
  "Gedik Piliç ana markasının kalite ve gıda güvenliği yaklaşımı; ambalajlama, soğuk zincir ve bilinçli ürün kullanımı.",
  "/kalite",
);
const points = [
  {
    icon: ShieldCheck,
    title: "Kalite odaklı üretim",
    text: "Gedik Piliç ana üretim yapısında, üretimin birbirini izleyen aşamalarını bütüncül değerlendiren bir kalite yaklaşımı benimsenir.",
  },
  {
    icon: ScanLine,
    title: "Gıda güvenliği",
    text: "Ürün izlenebilirliği, hijyen ve süreç kontrolleri gıda güvenliğinin temelidir. Tüketici olarak ambalaj etiketini ve kullanım talimatlarını esas alın.",
  },
  {
    icon: PackageCheck,
    title: "Sürekli iyileştirme",
    text: "Üretim ve ambalajlama teknolojilerinin geliştirilmesi, süreçlerin düzenli değerlendirilmesiyle birlikte ele alınır.",
  },
  {
    icon: Leaf,
    title: "Çevre duyarlılığı",
    text: "Kaynakların verimli kullanımı ve atıkların uygun yönetimi, gıda üretiminde sorumluluk yaklaşımının önemli parçalarıdır.",
  },
  {
    icon: Snowflake,
    title: "Tedarikçi standartları",
    text: "Hammadde ve ürün hareketlerinde uygun koşulların korunması, tedarik sürecinin her aşamasında önem taşır.",
  },
  {
    icon: Recycle,
    title: "Gıda kaybını azaltmak",
    text: "İhtiyaca uygun ürün seçimi, etikete uygun muhafaza ve planlı kullanım; gıda kaybı ve israfının azaltılmasına katkı sağlar.",
  },
];
export default function Quality() {
  return (
    <>
      <PageIntro
        eyebrow="KALİTE VE GIDA GÜVENLİĞİ"
        title="Çiftlikten sofraya özen."
        description="Kaliteyi bir sonuç kadar, üretim ve tedarikin her aşamasına yayılan bir sorumluluk olarak ele alıyoruz."
        items={[{ label: "Kalite ve Gıda Güvenliği" }]}
      />
      <section className="section container">
        <p className="catalog-note">
          Üretim ve ambalajlama açıklamaları Gedik Piliç ana markasının
          yaklaşımıyla ilgilidir. Düzce bayimizde üretim veya ambalajlama
          yapıldığı anlamına gelmez.
        </p>
        <div className="info-cards">
          {points.map((p) => (
            <article className="info-card" key={p.title}>
              <p.icon size={30} color="#c8202b" strokeWidth={1.5} />
              <h3 style={{ marginTop: 22 }}>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="local-section">
        <div className="container content-grid">
          <div className="prose">
            <p className="eyebrow">MODERN AMBALAJLAMA</p>
            <h2>Ürünü korumaya yönelik teknoloji.</h2>
            <p>
              MAP, “Modified Atmosphere Packaging” ifadesinin kısaltmasıdır.
              Türkçede modifiye atmosferde ambalajlama olarak kullanılır.
              Ambalaj içindeki gaz bileşimi ürünün özelliklerine göre
              düzenlenerek ürün kalitesinin korunması amaçlanır.
            </p>
            <p>
              Bu yöntem, uygun sıcaklıkta muhafaza ve ambalaj etiketindeki
              talimatlara uyma gerekliliğini ortadan kaldırmaz. Her ürünün
              ambalajlama türü ve saklama koşulları kendi etiketinden kontrol
              edilmelidir.
            </p>
          </div>
          <div className="info-box">
            <h3>Düzce bayimizde iletişim</h3>
            <p>
              Ürün seçimi ve etiket bilgileriyle ilgili sorularınızı bize
              iletebilirsiniz. Doğrulanmış ürün bilgilerine ulaşmanıza yardımcı
              olmak için buradayız.
            </p>
            <Button href="/iletisim" variant="ghost">
              Ürünler Hakkında Bilgi Al
            </Button>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
