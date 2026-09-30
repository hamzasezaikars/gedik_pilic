# Düzce Gedik Piliç

## Proje Hakkında

Düzce bayisi için Türkçe, gerçek çok sayfalı kurumsal tanıtım ve 37 ürünlü katalog. Admin, oturum açma, veritabanı, ödeme veya sepet yoktur. Bayi iletişimi ve ana marka bilgileri ayrıdır. Formlar başlangıçta açıkça belirtilen demo modundadır; kişisel veri saklamaz veya göndermez.

## Kullanılan Teknolojiler

Next.js App Router, React, TypeScript, Lucide React, Zod ve ortak tasarım tokenlarıyla responsive CSS. Server Components varsayılandır; sadece menü, filtreler, formlar ve isteğe bağlı harita etkileşimlidir. Animasyonlar CSS ile sınırlı ve reduced-motion uyumludur. Gereksiz animasyon bağımlılığı yoktur.

## Kurulum

Node.js 22+ ve npm gerekir. `npm ci` komutunu çalıştırın. `.env.example` dosyasını `.env.local` olarak kopyalayın, gerçek alan adını `NEXT_PUBLIC_SITE_URL` olarak ayarlayın. Alan adı ayarlanmamış yerel sürüm arama motorlarına kapalıdır.

## Development

`npm run dev` → http://localhost:3000

## Production Build

`npm run lint`, `npm run typecheck`, `npm run build`. Build tüm sayfaları `out/` altında statik HTML olarak üretir. Statik dışa aktarım kullanıldığı için `next start` yerine `out/` dizinini bir statik web sunucusuyla servis edin. Ürün/kategori eklenince yeniden build gerekir.

## Dosya Yapısı

- `app/`: ana sayfa, kurumsal, marka, kalite, B2B, iletişim, hukuki sayfalar ve 404
- `app/urunler/[slug]/`: kategori ve ürünlerin statik olarak üretilen gerçek URL’leri
- `components/`: header, footer, ortak UI, katalog, form ve harita
- `data/`: ürünler, kategoriler, iletişim, şirket verileri ve menüler
- `lib/`: metadata ve bağımsız form doğrulama/gönderim katmanı
- `public/images/{products,categories,corporate,hero}`: optimize görseller
- `public/brand/`: resmi logo varlıkları
- `public/fonts/`: yerel Manrope fontları

## Logo Nasıl Değiştirilir

`public/brand/logo.png` dosyasını yetkili marka varlığıyla değiştirin. Header ve footer ortak yerleşiminde bayi tanımını koruyun. Resmi logo varlığı olmadan yeni bir marka logosu üretmeyin.

## Hero Görseli Nasıl Değiştirilir

`public/images/hero/chicken.webp` görselini değiştirin; başka dosya adı kullanıyorsanız `app/page.tsx` içindeki Image kaynağını güncelleyin. Yatay ve yeterli çözünürlükte görsel kullanın. Görsel soldaki başlığı okunaksızlaştırmamalıdır.

## Ürün Fotoğrafı Nasıl Eklenir

Dosyayı `public/images/products/` altına WebP/AVIF olarak koyun. `data/products.ts` içindeki ilgili ürünün image alanını güncelleyin ve gerçek ürüne aitse `imageRepresentative: false` kullanın. Doğrulanmamış görselleri özel ürün fotoğrafı olarak sunmayın. Kaynaklar `public/images/SOURCES.md` dosyasındadır.

## Yeni Ürün Nasıl Eklenir

`data/products.ts` içindeki uygun gruba `[ürün adı, alt kategori, isteğe bağlı görsel yolu]` kaydı ekleyin. Model; id, name, slug, category, subcategory, shortDescription, description, image, imageRepresentative, weight, storage, featured ve active alanlarını içerir. Gramaj ve saklama bilgisi yalnızca doğrulanmışsa eklenir. Slug benzersiz olmalıdır. Fiyat ve stok eklemeyin.

## İletişim Bilgileri Nereden Değiştirilir

`data/contact.ts`: adres, telefon, WhatsApp, e-posta, yetkili ve Google bağlantıları. Hukuki sayfalardaki işletme unvanı ve veri sorumlusu bilgileri ayrıca gözden geçirilmelidir.

## Yeni Kategori Nasıl Eklenir

`data/categories.ts` listesine slug, name, short, description, image ve subcategories ekleyin. Ürünleri yeni category slug ile eşleştirin. Menü, filtreler ve statik kategori rotası bu veriyi kullanır.

## Formlar Backend'e Nasıl Bağlanabilir

`lib/forms.ts` içindeki `submitInquiry` adapter'ı mevcut entegrasyon noktasıdır. `NEXT_PUBLIC_FORM_ENDPOINT` boşsa demo sonucu verir ve veri göndermez. HTTPS API hazır olduğunda endpoint ayarlayın ve yeniden build alın. API yalnızca başarılı işlemler için 2xx döndürmelidir. İstemci doğrulamasına güvenmeyin: sunucuda aynı Zod şemasını, boyut sınırlarını, hız sınırlandırmayı, honeypot kontrolünü ve uygun origin/CORS kontrollerini uygulayın. E-posta anahtarlarını istemciye koymayın. Timeout ve HTTP hataları hata durumuna dönüşür. KVKK metnini gerçek veri sorumlusu, işleme hukuki sebepleri, saklama süresi ve alıcılarla tamamlamadan canlı veri toplamayı açmayın.

## Deployment

Statik çıktı `out/` dizinidir. Sites, Cloudflare Pages veya statik hosting üzerinde yayımlanabilir. `.openai/hosting.json` mevcut Sites kimliğini içerir. İç URL’lerin `/route/index.html` şeklinde sunulmasını ve bilinmeyen yolların `404.html` ile gerçek 404 döndürmesini sağlayın. `NEXT_PUBLIC_SITE_URL` yayın kökü olmalıdır; sitemap, canonical ve JSON-LD buna göre üretilir. CDN'de HTTPS, nosniff, Referrer-Policy ve uygun CSP uygulayın. Örnek başlıklar `public/_headers` içindedir. Bu ilk Sites yayını özel erişimlidir; halka açık ticari alan adına geçiş ayrı dağıtım tercihidir.

Next/Image bileşenleri kullanılır; statik export nedeniyle görseller build öncesinde yerel WebP olarak optimize edilir. Next sunuculu dağıtıma geçişte `output: export` kaldırılarak yerleşik image optimizer etkinleştirilebilir.

## İleride Admin Paneli / CMS Nasıl Eklenebilir

Data modüllerinin arkasına bir repository/API adapter'ı yerleştirin; Product modelini koruyun. CMS'den alınan kayıtları build sırasında veya sunucu tarafında doğrulayın. Yönetim uygulaması bu ziyaretçi uygulamasından ayrı sınırlarla tasarlanabilir. Bu sürümde admin, auth veya database kodu bulunmaz.

## Kontroller

`npm run lint`, `npm run typecheck`, `npm run build`. Ek rota/varlık ve kullanıcı akışı kontrolleri `scripts/` altındadır. Ana marka rakamları kullanıcı tarafından sağlanan kurumsal verilerdir; güncellemelerde resmi kaynağa bakın. Çalışma saati, fiyat, puan, yorum, stok ve teslimat garantisi eklenmemiştir.
