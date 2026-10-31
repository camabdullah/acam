# TYT arayüz v2

[Figma tasarım dosyası](https://www.figma.com/design/PZ1M604Mz9QyMllpaCvtsZ?node-id=6-1146)

Dört mobil ekran ve masaüstü ana ekranı; düzenlenebilir metinler, yeniden kullanılan bileşenler ve marka değişkenleri. Inter yazı ailesi, lacivert/turuncu kimlik ve kaynak kodundaki SVG simgeleri kullanıldı. Masaüstü ve mobil ekranlar aynı işlev hiyerarşisini izler. Tasarım örnekleri gerçek öğrenci kaydı değildir; sonuç ekranında örnek durum açıkça belirtilir.

## Kararlar

- Tek ana başlangıç eylemi. Ünite seçimi kompakt satırlarda; süre ayarı açılabilir ayrıntıda.
- Telefonda Çalış, Kavramlar, Deneme, Yanlışlarım olmak üzere dört sabit, etiketli hedef. Gelişim üst bölümden erişilir.
- Soru çözümünde gezinme gizlenir, çıkış düğmesi kalır. Açıklamalar öğrenci ilerleyene kadar açık kalır.
- Eşleştirmede tek tanım ve en fazla dört kavram; doğru yanıttan sonra kullanıcı kontrollü ilerleme. Var olan hata listesi ve temiz tekrar davranışı korunur.
- İlerleme, görülen farklı soru ve son yanıtı doğru olan soru sayısından hesaplanır. Bunlar ustalık veya öğrenme garantisi olarak etiketlenmez.
- Normal metin kontrastı, 44–48 piksel temel dokunma alanları ve renge ek metin/simgeler gözetildi. Tam WCAG uygunluk sertifikası iddia edilmez.

Birincil kaynaklar ve gerekçeler [research.md](research.md) içindedir. Marka veya başka ürünün ekranları kopyalanmadı. Tasarım kararlarının bu oyunda öğrenmeyi artırdığına ilişkin ölçüm yapılmadı.

## Geri dönüş

- Kullanıcı, menü veya alt bilgideki **Klasik görünüm** bağlantısıyla önceki arayüze geçebilir; üst çubukla yenisine dönebilir.
- `classic.html`, arayüz değişikliğinden önceki 590 soruluk sürümün bağımsız HTML kopyasıdır. İlerleme aynı `din-rotasi-v1` kaydını kullanır. Kayıt anahtarı ve soru/kavram kimlikleri değişmedi.
- Tüm sitenin önceki sürümü: `32dfab635841beb2293f6411b5b7ee72d41283ee`.
- GitHub yedek dalı: `backup/tyt-ui-before-v2-2026-10-31`. Yerel etiket: `backup/ui-before-v2-2026-10-31`.
- Tam geri dönüş istenirse yeni değişikliğin revert commit'i hazırlanıp yayınlanabilir; geçmişi zorla değiştirmek gerekmez.
- Gelecekte soru bankası değişirse klasik kopyanın da o banka ile uyumu yeniden kontrol edilmelidir.

## Doğrulama

- Veri dosyaları değiştirilmedi; 590 soru ve 283 kavram korundu.
- `node test-game.cjs`: kayıt göçü, yanıt kilidi, deneme puanlaması, yanlış tekrarları ve eşleştirme akışı.
- 320 ve 390 piksel kapsayıcılarda yatay taşma kontrolü; alt gezinme, cevap açıklaması, eşleştirme ve klasik görünüme dönüş tarayıcıda kontrol edildi.
- Figma'da 5 ekran, 51 instance ve 112 metin düğümü; yalnız portre için görsel dolgu kullanıldı. Arayüz tek raster görüntü olarak eklenmedi. Mobil kompozisyondaki genişlik ve yatay yerleşim sorunları düzeltildi.

`figma-state.json` tasarım kimliklerini kaydeder. Figma JS dosyaları üretim izidir; oyunun çalışma zamanı bunlara bağlı değildir. Canlı arayüz `ui-v2.js` ve `ui-v2.css` ile derlenir.
