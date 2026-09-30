# Doğrulama raporu

30 Eylül 2026 — Düzce Gedik Piliç ilk sürümü

- `npm run build`: başarılı; tüm statik sayfalar üretildi.
- `npm run lint`: başarılı.
- TypeScript kontrolü: başarılı (ayrı kontrol ve production build).
- Statik çıktı denetimi: 53 HTML dosyası (404 varyantları dahil), 50 özgün metadata, 2.464 iç bağlantı / görsel referansı; kırık referans yok.
- 37 ürün, 3 ana kategori ve bağımsız içerik sayfaları.
- Telefon, WhatsApp, e-posta ve adres bağlantılarının hedefleri doğrulandı. Gerçek arama veya mesaj gönderimi yapılmadı.
- Tarayıcı: ürün araması “Nugget” → 1 ürün; Şarküteri → 5 ürün; Sosis alt kategorisi → 2 ürün. Sonuçsuz arama durumu gösterildi.
- Mobil menü açılışı, kategori navigasyonu ve seçim sonrası kapanış kontrol edildi.
- İletişim formunda boş alanlar doğrulama mesajları üretti; geçerli veri demo sonucuna ulaştı.
- Kurumsal teklif formu geçerli veriyle demo sonucuna ulaştı; hiçbir gerçek talep gönderilmedi.
- Otomatik form kontrolleri: Türkiye telefon formatı, eksik KVKK onayı, geçersiz e-posta, HTML karakterleri, honeypot, demo sonucu ve API 500 hatası.
- Ana sayfa ve kurumsal teklif sayfası 1920, 1440, 1366, 1024, 768, 430, 390 ve 375 piksel genişlikte yatay taşma olmadan kontrol edildi.
- Mobil iletişim ve ürün detay sayfası taşma kontrolü; ürün detay görseli ve ürüne özel WhatsApp metni doğrulandı.
- Kontrol edilen üretim sayfalarında console error / warning görülmedi.
- Lighthouse puanı ölçülmedi; herhangi bir skor iddiası yoktur.

## Bilinen entegrasyon sınırları

Formların arka uç bağlantısı bu sürümde yoktur. Üç ürün görseli ürün grubunu temsil eder ve bu durum kartta/detayda belirtilir. Ana marka görselleri resmi kaynaklardan alınmıştır. Kamuya açık ticari yayında marka kullanım yetkisi ve KVKK metninin işletmenin tam unvanına uygunluğu işletme tarafından doğrulanmalıdır. Sites önizlemesi özel erişimlidir.
