# TYT DKAB: mobil öğrenme arayüzü için beş karar

Araştırma: 31 Ekim 2026. Başlangıç bağlamı: masaüstü yan menüsü, üç mod kartı ve on ünite kartı bulunan çalışma oyunu. Aşağıdaki uygulama kararları, kaynakların bu ürüne uyarlanmasıdır; bu arayüz üzerinde ölçülmüş öğrenme artışı iddiası değildir. Marka, maskot ve ekran kopyalamaya gerek yok.

## 1. Ana sayfa tek bir sonraki eylemi belirginleştirsin

İlk ekranda kısa karşılama, varsa son çalışmanın adı ve **“Çalışmaya devam et”** birincil düğmesi. İlk kullanımda **“İlk çalışmana başla”**. On eşit ağırlıklı büyük ünite kartı yerine “9. sınıf / 10. sınıf” seçimi ve okunaklı, kompakt ünite satırları. Bir satırın ayrıntısı açıldığında kısa kapsam ve çalışma düğmesi görünür. Kavramlar, deneme ve yanlışlar modları aynı anda üç ayrı dev çağrı olarak yeniden yarışmasın.

**Dayanak:** GOV.UK, bir sayfada birden çok ana eylemin önceliği belirsizleştirdiğini; ikincil eylemlerin sadeleştirilmesini öneriyor. NN/g, ilk görünümde önemli seçenekleri sunup ayrıntıları istek üzerine göstermeyi açıklıyor. Sık kullanılan ünite seçimi tamamen saklanmamalı.

- https://design-system.service.gov.uk/components/button/
- https://www.nngroup.com/articles/progressive-disclosure/

## 2. Telefonda dört etiketli alt gezinme hedefi

**Çalış · Kavramlar · Deneme · Yanlışlarım**. Her hedefte simge + görünür Türkçe ad; etkin hedefte şekil/zemin ve `aria-current`. Yanlışlar sayacı yalnız gerçek kayıt varsa gösterilir. Masaüstünde aynı hedefler sol menüye dönüşebilir; içerik adları ve sırası değişmez. Alt menünün içerik kapatmaması için güvenli alan ve alt boşluk bırakılır. Soru çözümü odağında çıkış yolu açık olmalı ve kayıt güvenceye alınmalı.

**Dayanak:** Google'ın kendi tasarım rehberi, aynı düzeydeki üç–beş ana hedef için gezinme çubuğu ve büyük ekranlarda ray kullanıyor. W3C AA minimum hedef ölçüsü 24×24 CSS piksel veya istisna koşullarıdır; bu üründe rahat dokunma için 44–48 piksel ve üzeri hedefler tasarım tercihi olarak kullanılabilir.

- https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-and-nav-patterns?hl=en
- https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum

## 3. İlerleme görünür ve kanıtına uygun olsun

**“18 farklı soru çözüldü”, “Son tur: 7/10 doğru”, “Tekrar bekleyen: 4 soru”** gibi gerçek kayıtlardan türeyen ölçüler. Aynı soruya tekrar basmak “çözülen farklı soru” sayısını artırmasın. Sadece ekran açıldı diye tamamlandı, tek doğru diye “ustalaştın”, tarih kaydı yokken “7 günlük seri” yazılmasın. Boş durumda **“Henüz çalışma kaydın yok”** ve bir başlangıç eylemi. Yerel kayıt kullanılıyorsa **“Bu cihazdaki ilerlemen”** açıkça belirtilsin.

**Dayanak:** Khan Academy ilerlemeyi etkinlik günlüğü ve gözlenen başarıya bağlı beceri değişimleriyle açıklıyor. Bizim oyunda sahte seri veya kanıtlanmamış ustalık etiketi kullanmama kararı bu ilkenin uygulanmasıdır; Khan'ın puan eşikleri kopyalanmamalı.

- https://support.khanacademy.org/hc/en-us/articles/360032987591

## 4. Soru ekranı okumaya, geribildirim öğrenmeye hizmet etsin

Soru metni üstte tek sütun, şıklar altında tüm satırı tıklanabilir seçenekler. Paragraflar sola hizalı; gövde için yaklaşık 18 piksel ve 1.6 satır aralığı, masaüstünde yaklaşık 65 karakterlik satır genişliği bu ürünün başlangıç değerleri olabilir. Metin boyutu artırıldığında içerik kırpılmamalı. Kök ve olumsuzluk vurgusu yalnız renkle yapılmamalı.

Çalışma modunda cevap sonrası **“Doğru” / “Tekrar bakalım”** metni, seçilen/doğru şıkkın harfi ve kısa gerekçe gösterilsin. Cevabı görmeden otomatik sonraki soruya atlamasın; öğrenci **“Sonraki soru”** düğmesine bassın. Kırmızı/yeşilin yanında ikon, metin ve sınır biçimi kullanılmalı. `aria-live` geribildirimi duyurabilir. Denemede sınav davranışı korunur, açıklama bitişte açılır. Bu mod ayrımı bizim ürün kararıdır.

**Dayanak:** W3C, anlamın yalnız renkle taşınmamasını ve normal metinde en az 4.5:1 kontrastı ister. 80 karakter sınırı ve ayarlanabilir metin sunumu AAA rehberidir; bunlar AA zorunluluğu diye sunulmamalı. Duolingo'nun kendi öğrenme ürününde cevabın nedenini açıklayan, isteğe bağlı anlık geribildirim bir uygulama örneğidir; DKAB için eğitim etkisi kanıtı değildir.

- https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- https://www.w3.org/TR/WCAG22/#visual-presentation
- https://blog.duolingo.com/explain-my-answer-now-free/

## 5. Kavram eşleştirmede bir karar, sabit seçenek alanı

Telefon ekranında aynı anda iki uzun ve ayrı kaydırılan sütun yerine **bir tanım + dört kavram seçeneği**, tur boyunca örneğin altı tanım. Her cevapta açık eşleşme ve kısa kavram ayrımı; sonra öğrenci kontrollü devam. “2/6” tur konumunu gösterir, öğrenilmiş kavram sayısı anlamına gelmez. Eş anlamlı kavramlar aynı soruda çeldirici yapılmamalı. İleri düzeyde ayrı bir “kartları eşleştir” görünümü sunulacaksa dokunarak seçme ile de çalışmalı; sürükleme zorunlu olmamalı.

**Dayanak:** GOV.UK soru sayfaları, tek soruya odaklanmayı ve ekran okuyucu için bir kez duyurulan açık başlığı öneriyor. Bir tanım–dört seçenek tasarımı bu yaklaşımın mobil eşleştirmeye uyarlanmasıdır; GOV.UK doğrudan bir öğrenme oyunu düzeni önermiyor. Kavramın ve tanımın ekranda birlikte erişilebilir olması, arayüzü kullanmak için gereksiz hatırlama ihtiyacını azaltır; öğrenme sorusunun kendisi korunur.

- https://design-system.service.gov.uk/patterns/question-pages/

## Uygulamada öncelik

Önce karar hiyerarşisi ve soru okunurluğu; sonra alt gezinme ve eşleştirme; en son gerçek verilere bağlı ilerleme sunumu. 390 piksel genişlik, klavye, ekran okuyucu isimleri, metin büyütme, yanlış/doğru durumları ve boş kayıt durumlarıyla doğrulama yapılmalı. Bu kontrol listesi tam WCAG uygunluk denetimi yerine geçmez.
