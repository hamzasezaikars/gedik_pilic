import { PageIntro } from "@/components/ui";
import { contact } from "@/data/contact";
import { seo } from "@/lib/seo";
export const metadata = seo(
  "KVKK Aydınlatma",
  "Düzce Gedik Piliç iletişim kanalları ve web sitesi üzerinden paylaşılan bilgiler hakkında aydınlatma.",
  "/kvkk",
);
export default function Kvkk() {
  return (
    <>
      <PageIntro
        eyebrow="KİŞİSEL VERİLER"
        title="KVKK aydınlatma metni"
        description="Web sitesi ve iletişim kanalları üzerinden paylaştığınız bilgilere ilişkin açıklamalar."
        items={[{ label: "KVKK" }]}
      />
      <article className="section container legal">
        <h2>İletişim noktası</h2>
        <p>
          Bu site, Düzce Gedik Piliç bayi tanıtımı için hazırlanmıştır. Kişisel
          verilerle ilgili sorularınız için yetkili Varol Keleş’e,{" "}
          {contact.address} adresinden veya{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a> üzerinden
          ulaşabilirsiniz.
        </p>
        <h2>Formların mevcut durumu</h2>
        <p>
          Bu sürümde iletişim ve teklif formları demo olarak çalışır. Girilen
          bilgiler yalnızca tarayıcı içinde doğrulanır; bayi sunucusuna
          gönderilmez, bir veritabanına veya tarayıcı depolamasına kaydedilmez.
          Demo sonucu, gerçek bir talebin iletildiği anlamına gelmez.
        </p>
        <h2>Doğrudan iletişim kanalları</h2>
        <p>
          Telefon, e-posta veya WhatsApp ile iletişim kurduğunuzda paylaştığınız
          ad, iletişim bilgileri ve talep içeriği sorularınızın yanıtlanması ve
          ticari taleplerinizin değerlendirilmesi için kullanılabilir. Bu
          kanalların kendi hizmet sağlayıcıları ve gizlilik koşulları
          bulunmaktadır.
        </p>
        <h2>Harita ve dış bağlantılar</h2>
        <p>
          Google haritası yalnızca “Google Haritasını Göster” düğmesine
          bastığınızda yüklenir. Harita, yol tarifi veya WhatsApp bağlantılarını
          kullanmanız ilgili sağlayıcılara bağlantı kurulmasına neden olur. Bu
          sağlayıcıların veri işleme koşullarını kendi gizlilik metinlerinden
          inceleyebilirsiniz.
        </p>
        <h2>Bilgi ve başvuru talepleri</h2>
        <p>
          Kişisel verilerinizle ilgili bilgi, düzeltme veya silme talebinizi
          yukarıdaki iletişim adresine iletebilirsiniz. Kimliğinizin ve
          talebinizin doğrulanması için gerekli bilgiler istenebilir.
        </p>
        <h2>Formlar aktif hale getirildiğinde</h2>
        <p>
          Canlı form gönderimi başlamadan önce veri sorumlusunun tam ticari
          unvanı, işleme amaçları, hukuki sebepler, alıcı grupları, saklama
          süreleri ve başvuru usulleri bu metinde açıklanacaktır. Bu sürümde
          canlı form üzerinden veri toplanmamaktadır.
        </p>
      </article>
    </>
  );
}
