# Abdullah Çam’la TYT’ye Doğru

[Oyunu aç](https://camabdullah.github.io/acam/)

TYT DKAB hazırlığı için mobil uyumlu öğrenme oyunu: **590 özgün, açıklamalı, beş seçenekli soru ve 283 kavram**.

| Çalışma alanı | İçerik |
| --- | --- |
| 9. sınıf | Beş ünite, her ünitede 60, toplam 300 soru |
| 10. sınıf | Beş ünite, her ünitede 50, toplam 250 soru |
| TYT DKAB denemesi | 40 özgün sorudan oluşturulan 5 soruluk turlar |
| Kavram atölyesi | 283 kavram, arama, konu filtresi ve eşleştirme |
| Yanlışlarım | Ünite ve deneme yanlışları, deneme boşları ve eşleştirme hataları |

## Kapsam

2026–2027 yılında TYT hazırlığı yapan mevcut 12. sınıf grubunun izlediği **2018 DKAB öğretim programının** 9–10. sınıf ünite düzeni kullanılır. Bu düzen, 2026–2027'de alt sınıflarda uygulanan Maarif programıyla aynı değildir. MEB, yeni programla yetişen ilk grubun 2028'de YKS'ye gireceğini açıklamıştır.

31 Ekim 2026 araştırmasında ayrı bir resmî 2027 sınav kapsam belgesi doğrulanamadı. Son erişilen 2026 YKS kazanım duyurusu, 2018 programı, MEB ders materyalleri ve ÖSYM 2026 TYT DKAB soru yapısı temel alındı. Kavram sözlüğü 9–12. sınıflardan destekleyici terimler de içerir; resmî ve kesin bir sınav kavram listesi değildir. 2018 programının 9–10. sınıf anahtar kavramları terim/eş anlam alanlarıyla kontrol edildi.

Sorular ÖSYM'den kopyalanmadı. Zorluklarının ÖSYM sorularıyla eşdeğer olduğu iddia edilmez; gerçek öğrenci uygulamasıyla madde analizi yapılmamıştır. Ayrıntılar ve birincil kaynaklar [SOURCE_NOTES.md](SOURCE_NOTES.md) içindedir.

## Üniteler

9. sınıf: Bilgi ve İnanç; Din ve İslam; İslam ve İbadet; Gençlik ve Değerler; Gönül Coğrafyamız.

10. sınıf: Allah-İnsan İlişkisi; Hz. Muhammed ve Gençlik; Din ve Hayat; Ahlaki Tutum ve Davranışlar; İslam Düşüncesinde İtikadi, Siyasi ve Fıkhi Yorumlar.

## Oynanış

- Öğrenme turları 10 soru; süresiz veya soru başına 30 saniye.
- Sınıf ve ünite seçilebilir. Karışık tur seçili sınıfın ünitelerinden dengeli seçilir; önce çözülmemiş sorular gelir.
- Doğru yanıt 100 puan; üçüncü ve sonraki ardışık doğrular 20 puan bonus.
- Yanlış sorular doğru çözülünce tekrar listesinden çıkar.
- Eşleştirmede seçili filtrelerden en fazla beş çift gelir. Eş anlamlı kayıtlar aynı turda birlikte seçilmez. Hata yapılan kavramlar aynı tur içinde düzeltilse de yeni bir turda ilk denemede doğru eşleşene kadar tekrar listesinde kalır.
- Deneme beş alandan birer soru seçer: bilgi-inanç, ibadet, ahlak, peygamber örnekliği, yorumlar. Bu bir çalışma dağılımıdır; sabit resmî dağılım değildir.
- Denemede cevap değiştirilebilir ve sorular boş bırakılabilir. Açıklamalar yalnız bitince açılır. Net = doğru − yanlış / 4; boşların net cezası yoktur.
- Deneme için 8/10 dakika veya süresiz seçilebilir. Bunlar çalışma tercihleridir; TYT'de DKAB için ayrı resmî süre bulunmaz.

## Geliştirme

Harici bağımlılık veya sunucu gerekmez. `index.html` tüm CSS/JS/verileri içerir; `assets/abdullah-cam.png` birlikte dağıtılmalıdır. GitHub Pages kök dizinden sunar.

```sh
python3 generate_questions.py
python3 build.py
node test-game.cjs
```

Veri kaynakları: `concepts.json` (eski kavram kökleri), `distractors.json` (gözden geçirilmiş seçenekler), `practice.json` (9. sınıf bağlam soruları), `grade10.json`, `exams.json`, `glossary.json`. Doğru cevap veri dosyalarında ilk sıradadır; arayüz her soru için seçenekleri karıştırıp doğru cevapla bağını korur.

Arayüz: `template.html`, `style.css`, `app.js`, `features.js`. Üretilen `questions.js` ve `index.html` de sürüm kontrolündedir. `test-game.cjs` veri bütünlüğü, sınıf seçimi, soru seçimi, cevap kilidi, yanlış tekrarları, deneme puanlaması/süre sonu, eşleştirme ve eski kayıt göçünü kontrol eder.

## Veri davranışı

Tarayıcı anahtarı `din-rotasi-v1` korunur. Eski toplam puan ve cevap sayıları tutulur; bulunmayan soru kimlikleri temizlenir. Soru kimliği korunan kayıtlarda soru metni ve seçenekler güncellenmiş olabilir. Aktif tur yenilemede kapanır; bitirilmemiş deneme puanlanmaz. Son 20 denemenin özeti ve soru/kavram tekrar listeleri yalnız bu tarayıcıda saklanır. Hesap veya kişisel bilgi istenmez. Depolama engellenirse oyun o oturumda çalışır ve uyarı gösterir.
