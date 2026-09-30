export const categories = [
  {
    slug: "pilic-urunleri",
    name: "Piliç Ürünleri",
    short: "Piliç",
    description: "Mutfağınızın temelinden, menünüzün merkezine.",
    image: "/images/categories/pilic.webp",
    subcategories: [
      "But",
      "Kanat",
      "Bütün Piliç",
      "Göğüs",
      "Kalça",
      "Sakatat",
      "Özel Ürünler",
      "Diğer Ürünler",
    ],
  },
  {
    slug: "yemeye-hazir",
    name: "Yemeye Hazır",
    short: "Yemeye Hazır",
    description: "Yoğun günlere pratik, menülere çeşitli seçenekler.",
    image: "/images/categories/hazir.webp",
    subcategories: ["Kaplamalı Ürünler", "Köfteler", "Döner", "Özel Ürünler"],
  },
  {
    slug: "sarkuteri",
    name: "Şarküteri",
    short: "Şarküteri",
    description: "Kahvaltıdan sandviçe, günün her anına.",
    image: "/images/categories/sarkuteri.webp",
    subcategories: ["Sucuk", "Sosis", "Salam", "Jambon", "Burger"],
  },
] as const;
export type CategorySlug = (typeof categories)[number]["slug"];
