import assetMap from "./product-assets.json";
import { type CategorySlug, categories } from "./categories";
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  subcategory: string;
  shortDescription: string;
  description: string;
  image: string;
  imageRepresentative: boolean;
  weight?: string;
  storage?: string;
  featured: boolean;
  active: boolean;
}
const groups: { category: CategorySlug; items: [string, string, string?][] }[] =
  [
    {
      category: "pilic-urunleri",
      items: [
        ["Piliç Bonfile", "Göğüs", "/images/products/bonfile.webp"],
        ["Piliç Fileto", "Göğüs", "/images/products/fileto.webp"],
        ["Derili Piliç Bonfile", "Göğüs"],
        ["Baby Piliç", "Bütün Piliç"],
        ["Baby Piliç Şiş", "Özel Ürünler"],
        ["Piliç Göğüs Kuşbaşı", "Göğüs"],
        ["Piliç Göğüs Şiş", "Göğüs"],
        ["Piliç Sırtsız Göğüs", "Göğüs"],
        ["Piliç Kelebek", "Özel Ürünler"],
        ["Soslu Piliç Izgara Tava", "Özel Ürünler"],
        ["Soslu Piliç Kanat", "Kanat"],
        ["Soslu Piliç Kelebek", "Özel Ürünler"],
        ["Piliç But Şiş", "But"],
        ["Piliç Pirzola", "But"],
        ["Mangallık Piliç", "Özel Ürünler"],
      ],
    },
    {
      category: "yemeye-hazir",
      items: [
        ["Piliç Nugget", "Kaplamalı Ürünler", "/images/categories/hazir.webp"],
        ["Piliç Schnitzel", "Kaplamalı Ürünler"],
        ["Piliç Cordon Bleu", "Kaplamalı Ürünler"],
        ["Çıtır Burger", "Kaplamalı Ürünler"],
        ["Panko Kaplamalı Piliç Bonfile", "Kaplamalı Ürünler"],
        ["Acılı Bonfile Parçaları", "Kaplamalı Ürünler"],
        ["Piliç Acılı Kebap", "Özel Ürünler"],
        ["Piliç Kasap Köfte", "Köfteler"],
        ["Parmak Köfte", "Köfteler"],
        ["Köfte Burger", "Köfteler"],
        ["Misket Köfte", "Köfteler"],
        ["Soslu Piliç Döner", "Döner"],
        ["Baton Bonfile Döner", "Döner"],
        ["Baton Bonfile – But Döner", "Döner"],
        ["Piliç Döner", "Döner"],
        ["Karışık Piliç Döner", "Döner"],
        ["Poşetli Döner", "Döner"],
      ],
    },
    {
      category: "sarkuteri",
      items: [
        ["Piliç Sucuk", "Sucuk", "/images/categories/sarkuteri.webp"],
        ["Vakumlu Piliç Sucuk", "Sucuk"],
        ["Piliç Kokteyl Sosis", "Sosis"],
        ["Piliç Uzun Sosis", "Sosis"],
        ["Piliç Salam", "Salam"],
      ],
    },
  ];
function slugify(name: string) {
  return name
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
export const products: Product[] = groups.flatMap((group) =>
  group.items.map(([name, subcategory, image], i) => ({
    id: `${group.category}-${i + 1}`,
    name,
    slug: slugify(name),
    category: group.category,
    subcategory,
    shortDescription: `Gedik Piliç ${subcategory.toLocaleLowerCase("tr")} grubundan ${name.toLocaleLowerCase("tr")}.`,
    description: `${name}, Gedik Piliç ürün ailesinin ${subcategory.toLocaleLowerCase("tr")} seçeneklerinden biridir. Bireysel kullanımınız veya işletmenizin menüsü için ürün özelliklerini Düzce bayimizle görüşebilirsiniz. Güncel ambalaj, ürün içeriği, alerjen, hazırlama ve saklama bilgileri için ürün üzerindeki etiketi esas alın.`,
    image: (assetMap as Record<string, string>)[name]
      ? `/images/products/${(assetMap as Record<string, string>)[name].replace(/\.[^.]+$/, ".webp")}`
      : image || categories.find((c) => c.slug === group.category)!.image,
    imageRepresentative: !image && !(assetMap as Record<string, string>)[name],
    featured: i < 3,
    active: true,
  })),
);
