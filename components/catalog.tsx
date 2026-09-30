"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import { categories, type CategorySlug } from "@/data/categories";
export function Catalog({ category }: { category?: CategorySlug }) {
  const [selected, setSelected] = useState<string>(category || "all");
  const [sub, setSub] = useState("all");
  const [query, setQuery] = useState("");
  const chosen = categories.find((c) => c.slug === selected);
  const results = useMemo(
    () =>
      products.filter(
        (p) =>
          p.active &&
          (selected === "all" || p.category === selected) &&
          (sub === "all" || p.subcategory === sub) &&
          `${p.name} ${p.subcategory}`
            .toLocaleLowerCase("tr")
            .includes(query.trim().toLocaleLowerCase("tr")),
      ),
    [query, selected, sub],
  );
  return (
    <>
      <div className="catalog-controls">
        {!category && (
          <div className="filter-tabs" aria-label="Ürün grupları">
            {[{ slug: "all", short: "Tüm Ürünler" }, ...categories].map((c) => (
              <button
                key={c.slug}
                aria-pressed={selected === c.slug}
                onClick={() => {
                  setSelected(c.slug);
                  setSub("all");
                }}
              >
                {c.short}
              </button>
            ))}
          </div>
        )}
        <div className="search">
          <Search size={18} />
          <label className="sr-only" htmlFor="product-search">
            Ürün ara
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Ürün adı ile arayın…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      {chosen && (
        <div className="subfilter" aria-label="Alt kategoriler">
          {["all", ...chosen.subcategories].map((s) => (
            <button key={s} aria-pressed={sub === s} onClick={() => setSub(s)}>
              {s === "all" ? "Tüm Alt Kategoriler" : s}
            </button>
          ))}
        </div>
      )}
      <p className="catalog-note">
        Ürünler tanıtım amaçlı listelenmektedir. Güncel ürün, ambalaj ve tedarik
        bilgisi için bayimizle iletişime geçin. Bazı görseller ilgili ürün
        grubunu temsil eder.
      </p>
      <p className="result-count" role="status">
        {results.length} ürün görüntüleniyor
      </p>
      <div className="product-grid">
        {results.map((p) => (
          <Link className="product-card" key={p.id} href={`/urunler/${p.slug}`}>
            <div className="product-image">
              <Image
                src={p.image}
                alt={
                  p.imageRepresentative
                    ? `${p.subcategory} için temsili ürün grubu görseli`
                    : p.name
                }
                fill
                sizes="(max-width: 430px) 90vw, (max-width: 767px) 45vw, (max-width: 1250px) 30vw, 23vw"
              />
            </div>
            <div className="product-copy">
              <span>{categories.find((c) => c.slug === p.category)?.name}</span>
              <h2>{p.name}</h2>
              <p>
                {p.subcategory}
                {p.imageRepresentative ? " · Temsili görsel" : ""}
              </p>
              <span className="text-link">Ürünü İncele</span>
            </div>
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h3>Aramanızla eşleşen ürün bulunamadı.</h3>
          <p>Başka bir ürün adı deneyin veya filtreleri temizleyin.</p>
          <button
            className="button primary"
            onClick={() => {
              setQuery("");
              setSub("all");
              setSelected(category || "all");
            }}
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </>
  );
}
