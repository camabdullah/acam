# Abdullah Çam’la TYT’ye Doğru

[Oyunu aç](https://camabdullah.github.io/acam/)

Mobil uyumlu DKAB hazırlık oyunu. Her ünitede 40 olmak üzere toplam 200 özgün, açıklamalı ve beş seçenekli soru içerir. 150 soru kavram tanımı veya kısa örnekten kavram bulma üzerinedir.

1. Bilgi ve İnanç
2. Din ve İslam
3. İslam ve İbadet
4. Gençlik ve Değerler
5. Gönül Coğrafyamız

TYT’ye hazırlanan mevcut 12. sınıf öğrencilerinin 9. sınıfta izlediği 2018 DKAB programı esas alınmıştır. Yeni 9. sınıfların Maarif Modeli üniteleri farklıdır. Sorular özgün alıştırmalardır, çıkmış ÖSYM soruları değildir. MEB konu bağlantıları oyunun kaynaklar alanında yer alır.

## Oynanış

- Süresiz öğrenme veya soru başına 30 saniyelik hızlı tur.
- Her tur 10 soru; karışık tur her üniteden 2 soru içerir.
- Önce çözülmemiş sorular seçilir. Bir ünitede dört tam tur, 40 farklı soruya ulaşmayı sağlar.
- Doğru yanıt 100 puan; 3. ve sonraki ardışık doğrular 20 puan bonus kazandırır.
- Yanlışlar tekrar listesine eklenir; doğru çözüldüklerinde listeden çıkar.
- Gelişim bu cihazdaki tarayıcıda saklanır. Hesap veya kişisel bilgi istenmez.

## Dosyalar

`index.html` tüm CSS, JavaScript ve soruları içerir; portre için `assets/abdullah-cam.png` dosyası da dağıtılmalıdır. PNG, öğretmenin sağladığı orijinal fotoğrafın biçim dönüşümüdür; yuvarlak görünüm CSS ile uygulanır.

Soru bankasını düzenlemek için `concepts.json` ve `practice.json` dosyalarını güncelleyin. `python3 generate_questions.py` ardından `python3 build.py` çalıştırın. `template.html`, `style.css` ve `app.js` arayüz kaynaklarıdır. Harici paket veya sunucu gerekmez.

## Veri davranışı

Geriye uyumluluk için tarayıcı kayıt anahtarı `din-rotasi-v1` olarak korunur. Eski toplam puan ve yanıt sayıları korunur; yeni bankada bulunmayan soru kimlikleri tekrar ve pekiştirme listelerinden çıkarılır. Aktif tur yenilemede kapanır. Depolama engellenirse oyun oturum içinde çalışır ve uyarı gösterir. Oyun puanı resmî sınav sonucu veya güvenli bir yarışma sıralaması değildir.
