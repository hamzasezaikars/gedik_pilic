import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">ARADIĞINIZ SAYFA BULUNAMADI</p>
      <h1>404</h1>
      <p>
        Bu sayfa taşınmış veya adresi değişmiş olabilir. Ürün kataloğundan devam
        edebilirsiniz.
      </p>
      <div className="actions">
        <Button href="/">Ana Sayfaya Dön</Button>
        <Button href="/urunler" variant="outline">
          Ürünleri İncele
        </Button>
      </div>
    </section>
  );
}
