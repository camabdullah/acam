# Din Rotası — TYT DKAB hazırlık oyunu

Mobil uyumlu, hesap gerektirmeyen bir soru oyunu. 6 konu grubunda 60 özgün, açıklamalı ve beş seçenekli alıştırma içerir.

- 10 soruluk öğrenme turları; süre sınırı yok.
- Her soru için 30 saniyelik hızlı turlar.
- Yanlışları ve süresi kaçırılan soruları tekrar çözme.
- Doğru yanıta 100 puan; 3. ve sonraki ardışık doğrulara 20 puan bonus.
- Cihaza ve tarayıcıya özel gelişim takibi. Ortak sınıf sıralaması veya öğretmen paneli yoktur.
- Karışık turda her konu grubundan en az bir soru. Soru ve seçenek sırası rastgele değişir.
- Harici script, takip aracı, kullanıcı hesabı, ücretli servis veya derleme bağımlılığı içermez.

## Açma

`index.html` dosyasını doğrudan tarayıcıda açabilir veya GitHub Pages üzerinden yayımlayabilirsiniz. Tüm CSS, JavaScript ve sorular bu tek dosyanın içindedir.

GitHub deposunda **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /(root) → Save** seçin. GitHub, yayımlama bitince oyun adresini aynı sayfada gösterir.

## İçerik kapsamı

Bilgi ve İnanç; Din ve İslam; İslam ve İbadet; Ahlak ve Değerler; Vahiy ve Peygamberlik; İnanç ve Yorumlar.

Sorular çıkmış ÖSYM soruları değildir. Bu sürüm tüm TYT müfredatını bitiren eksiksiz bir soru bankası olarak sunulmaz. Konu grupları çalışma amaçlıdır; güncel sınıf/ünite sırası iddiası taşımaz. Kaynak bağlantıları oyun içindeki “Kaynaklar & bilgi” alanında ve yanıt açıklamalarında bulunur. MEB ders materyalleri kavramsal kontrol için kullanılmış, sorular özgün yazılmıştır.

## Veri davranışı

Gelişim `localStorage` içinde `din-rotasi-v1` anahtarıyla tutulur. Bir soruyu tekrar yanıtlamak toplam yanıtlara yeniden eklenir. Yanlış soruyu doğru çözmek onu tekrar listesinden çıkarır. Sayfa yenilenince aktif tur kapanır; önceki yanıtlar korunur. Depolama engellenirse uyarı gösterilir ve oyun oturum boyunca çalışmaya devam eder. Her tarayıcı/cihazın kaydı ayrıdır. Oyun puanları istemci tarafında hesaplanır; resmî sınav sonucu veya güvenli rekabet sıralaması için kullanılmaz.

## Geliştirme

`template.html`, `style.css`, `questions.js`, `app.js` kaynaklarını değiştirip `python3 build.py` çalıştırın. Yayımlanan dosya `index.html` olur; sunucu kurulumu gerekmez. `node --check app.js` ile sözdizimi kontrol edilebilir.
