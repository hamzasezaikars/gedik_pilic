import Link from "next/link";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";
import { stats } from "@/data/company";
import { siteUrl } from "@/lib/seo";
export function Button({
  href,
  children,
  variant = "primary",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      {...rest}
      className={`button ${variant} ${rest.className || ""}`}
    >
      {children}
    </Link>
  );
}
export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const all = [{ label: "Ana Sayfa", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="İçerik yolu" className="breadcrumb">
        {all.map((item, i) => (
          <span key={item.label}>
            {i > 0 && <ChevronRight size={12} />}{" "}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: siteUrl + item.href } : {}),
          })),
        }}
      />
    </>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items?: { label: string; href?: string }[];
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Breadcrumb items={items || [{ label: title }]} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
export function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <p className="eyebrow">KÖKLÜ BİR MARKANIN GÜCÜ</p>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.value}>
              <strong>
                {s.value}
                <small>{s.suffix}</small>
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <p className="fineprint">
          Gedik Piliç ana marka ve üretim tesislerine ait kurumsal verilerdir.
          Kapasiteler yaklaşık değerlerdir.
        </p>
      </div>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">BİRLİKTE İLETİŞİMDE KALALIM</p>
          <h2>
            İhtiyacınıza uygun ürünleri
            <br />
            birlikte belirleyelim.
          </h2>
          <p>Ürünlerimiz ve kurumsal satış seçenekleri hakkında bilgi alın.</p>
        </div>
        <div className="actions">
          <Button href={contact.phoneHref} variant="secondary">
            <Phone size={17} /> Hemen Ara
          </Button>
          <Button href={contact.whatsapp} variant="outline">
            <MessageCircle size={18} /> WhatsApp
          </Button>
          <Link className="text-link" href="/iletisim">
            İletişim Formu
          </Link>
        </div>
      </div>
    </section>
  );
}
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
