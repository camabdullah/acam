const TOPICS=[
  {
    "id": "bilgi",
    "title": "Bilgi ve İnanç",
    "sub": "Akıl, haber ve iman",
    "icon": "compass",
    "color": "#6b63c3",
    "unit": 1,
    "count": 40,
    "source": "https://dogm.eba.gov.tr/panel/upload/kitap/dkab9/dkab9_%C3%9Cnite1.pdf"
  },
  {
    "id": "din",
    "title": "Din ve İslam",
    "sub": "Fıtrat, tevhit ve teslimiyet",
    "icon": "sun",
    "color": "#c9862a",
    "unit": 2,
    "count": 40,
    "source": "https://dogm.eba.gov.tr/panel/upload/kitap/dkab9/dkab9_%C3%9Cnite2.pdf"
  },
  {
    "id": "ibadet",
    "title": "İslam ve İbadet",
    "sub": "Niyet, ihlas ve hükümler",
    "icon": "book",
    "color": "#3b917d",
    "unit": 3,
    "count": 40,
    "source": "https://dogm.eba.gov.tr/panel/upload/kitap/dkab9/dkab9_%C3%9Cnite3.pdf"
  },
  {
    "id": "genclik",
    "title": "Gençlik ve Değerler",
    "sub": "Ahlak, kişilik ve erdemler",
    "icon": "heart",
    "color": "#c46b83",
    "unit": 4,
    "count": 40,
    "source": "https://dogm.eba.gov.tr/panel/upload/kitap/dkab9/dkab9_%C3%9Cnite4.pdf"
  },
  {
    "id": "gonul",
    "title": "Gönül Coğrafyamız",
    "sub": "Kültür, medeniyet ve aidiyet",
    "icon": "layers",
    "color": "#5488b7",
    "unit": 5,
    "count": 40,
    "source": "https://dogm.eba.gov.tr/etkilesimli/icerik/OlcmeTestOnizle21449.html"
  }
];
const QUESTIONS=[
  {
    "id": "bilgi-k01",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Ön yargıya kapılmadan doğru değerlendirme yapabilen sağlıklı akıl” açıklaması hangi kavrama aittir?",
    "options": [
      "Selim akıl",
      "Hakka’l-yakîn",
      "Ayne’l-yakîn",
      "Gayb",
      "Tasdik"
    ],
    "explanation": "Selim akıl: ön yargıya kapılmadan doğru değerlendirme yapabilen sağlıklı akıl."
  },
  {
    "id": "bilgi-o01",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Ece, bir iddiayı sevdiği biri söyledi diye kabul etmiyor; gerekçelerini tutarlı biçimde değerlendiriyor. Kullanılan bilgi kaynağı hangisidir?",
    "options": [
      "Selim akıl",
      "Sadık haber",
      "Tahkikî iman",
      "Salim duyular",
      "Zan"
    ],
    "explanation": "Selim akıl: ön yargıya kapılmadan doğru değerlendirme yapabilen sağlıklı akıl."
  },
  {
    "id": "bilgi-k02",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Sağlıklı işleyen duyu organları aracılığıyla bilgi edinme imkânı” açıklaması hangi kavrama aittir?",
    "options": [
      "Salim duyular",
      "Sadık haber",
      "Tahkikî iman",
      "Ayne’l-yakîn",
      "Zan"
    ],
    "explanation": "Salim duyular: sağlıklı işleyen duyu organları aracılığıyla bilgi edinme imkânı."
  },
  {
    "id": "bilgi-o02",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci bitkinin rengini görerek, kokusunu koklayarak tanıyor. Burada hangi bilgi kaynağı öne çıkar?",
    "options": [
      "Salim duyular",
      "Selim akıl",
      "Sadık haber",
      "Hakka’l-yakîn",
      "Ayne’l-yakîn"
    ],
    "explanation": "Salim duyular: sağlıklı işleyen duyu organları aracılığıyla bilgi edinme imkânı."
  },
  {
    "id": "bilgi-k03",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Gerçeğe uygun ve güvenilir haber için kullanılan genel ad” açıklaması hangi kavrama aittir?",
    "options": [
      "Sadık haber",
      "Hakka’l-yakîn",
      "İlme’l-yakîn",
      "Tahkikî iman",
      "Selim akıl"
    ],
    "explanation": "Sadık haber: gerçeğe uygun ve güvenilir haber için kullanılan genel ad."
  },
  {
    "id": "bilgi-o03",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Öğretmen, mütevatir haberlerle peygamberlerden gelen haberleri aynı üst başlıkta topluyor. Bu başlık hangisidir?",
    "options": [
      "Sadık haber",
      "Ayne’l-yakîn",
      "Hakka’l-yakîn",
      "Tasdik",
      "İman"
    ],
    "explanation": "Sadık haber: gerçeğe uygun ve güvenilir haber için kullanılan genel ad."
  },
  {
    "id": "bilgi-k04",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Allah’ın peygamberlerine bildirdiği ilahî mesaj” açıklaması hangi kavrama aittir?",
    "options": [
      "Vahiy",
      "Ayne’l-yakîn",
      "Gayb",
      "Salim duyular",
      "Zan"
    ],
    "explanation": "Vahiy: allah’ın peygamberlerine bildirdiği ilahî mesaj."
  },
  {
    "id": "bilgi-o04",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci, Kur’an’ın kaynağının insanların kişisel tahminleri olmadığını, Allah’ın bildirmesi olduğunu söylüyor. Hangi kavramı açıklıyor?",
    "options": [
      "Vahiy",
      "Zan",
      "Tasdik",
      "Tahkikî iman",
      "İman"
    ],
    "explanation": "Vahiy: allah’ın peygamberlerine bildirdiği ilahî mesaj."
  },
  {
    "id": "bilgi-k05",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Yalanda birleşmeleri aklen mümkün görülmeyen toplulukların aktardığı haber” açıklaması hangi kavrama aittir?",
    "options": [
      "Mütevatir haber",
      "İkrar",
      "Gayb",
      "Zan",
      "Salim duyular"
    ],
    "explanation": "Mütevatir haber: yalanda birleşmeleri aklen mümkün görülmeyen toplulukların aktardığı haber."
  },
  {
    "id": "bilgi-o05",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Hiç gitmediği tarihî bir şehrin varlığını, birbirinden bağımsız çok sayıda kişinin kesintisiz aktarımıyla bilen kişi hangi tür habere dayanır?",
    "options": [
      "Mütevatir haber",
      "Tahkikî iman",
      "Zan",
      "Taklidî iman",
      "Salim duyular"
    ],
    "explanation": "Mütevatir haber: yalanda birleşmeleri aklen mümkün görülmeyen toplulukların aktardığı haber."
  },
  {
    "id": "bilgi-k06",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Dinî inanç esaslarını gönülden kabul etme” açıklaması hangi kavrama aittir?",
    "options": [
      "İman",
      "Salim duyular",
      "Gayb",
      "Taklidî iman",
      "Mütevatir haber"
    ],
    "explanation": "İman: dinî inanç esaslarını gönülden kabul etme."
  },
  {
    "id": "bilgi-o06",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi, Allah’a ve peygamberin bildirdiği inanç esaslarına içtenlikle bağlandığını ifade ediyor. Bu kabulün genel adı nedir?",
    "options": [
      "İman",
      "Tahkikî iman",
      "Vahiy",
      "Zan",
      "Salim duyular"
    ],
    "explanation": "İman: dinî inanç esaslarını gönülden kabul etme."
  },
  {
    "id": "bilgi-k07",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Bir bilgiyi veya inancı kalben doğrulama” açıklaması hangi kavrama aittir?",
    "options": [
      "Tasdik",
      "Gayb",
      "İkrar",
      "Mütevatir haber",
      "Selim akıl"
    ],
    "explanation": "Tasdik: bir bilgiyi veya inancı kalben doğrulama."
  },
  {
    "id": "bilgi-o07",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci imanla ilgili olarak dışarıya söylenen sözden önce kalpteki kabulün önemini vurguluyor. Hangi kavramı öne çıkarıyor?",
    "options": [
      "Tasdik",
      "Sadık haber",
      "Gayb",
      "Ayne’l-yakîn",
      "İlme’l-yakîn"
    ],
    "explanation": "Tasdik: bir bilgiyi veya inancı kalben doğrulama."
  },
  {
    "id": "bilgi-k08",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“İçten benimsenen inancı sözle ifade etme” açıklaması hangi kavrama aittir?",
    "options": [
      "İkrar",
      "Gayb",
      "Selim akıl",
      "Sadık haber",
      "Hakka’l-yakîn"
    ],
    "explanation": "İkrar: i̇çten benimsenen inancı sözle ifade etme."
  },
  {
    "id": "bilgi-o08",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi kalben benimsediği inancını diliyle de açıkladığında hangi eylemi gerçekleştirmiş olur?",
    "options": [
      "İkrar",
      "Selim akıl",
      "Ayne’l-yakîn",
      "Sadık haber",
      "Hakka’l-yakîn"
    ],
    "explanation": "İkrar: i̇çten benimsenen inancı sözle ifade etme."
  },
  {
    "id": "bilgi-k09",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“İnancın gerekçelerini araştırmadan çevreden görerek benimsenmesi” açıklaması hangi kavrama aittir?",
    "options": [
      "Taklidî iman",
      "Vahiy",
      "İlme’l-yakîn",
      "Hakka’l-yakîn",
      "Gayb"
    ],
    "explanation": "Taklidî iman: i̇nancın gerekçelerini araştırmadan çevreden görerek benimsenmesi."
  },
  {
    "id": "bilgi-o09",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Mert, inançlarının dayanakları sorulduğunda yalnızca ailesinden böyle gördüğünü söylüyor. Bu inanç biçimi hangisidir?",
    "options": [
      "Taklidî iman",
      "Selim akıl",
      "Hakka’l-yakîn",
      "Ayne’l-yakîn",
      "Mütevatir haber"
    ],
    "explanation": "Taklidî iman: i̇nancın gerekçelerini araştırmadan çevreden görerek benimsenmesi."
  },
  {
    "id": "bilgi-k10",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Araştırma ve delillerle bilinçli biçimde temellendirilen iman” açıklaması hangi kavrama aittir?",
    "options": [
      "Tahkikî iman",
      "Salim duyular",
      "Taklidî iman",
      "İkrar",
      "İman"
    ],
    "explanation": "Tahkikî iman: araştırma ve delillerle bilinçli biçimde temellendirilen iman."
  },
  {
    "id": "bilgi-o10",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Zeynep, inandığı esasların gerekçelerini okuyor ve sorularına cevap arıyor. İnancını hangi düzeye taşımaya çalışıyor?",
    "options": [
      "Tahkikî iman",
      "İman",
      "Salim duyular",
      "Selim akıl",
      "Gayb"
    ],
    "explanation": "Tahkikî iman: araştırma ve delillerle bilinçli biçimde temellendirilen iman."
  },
  {
    "id": "bilgi-k11",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Doğrudan gözlemden önce güvenilir bilgi ve delille ulaşılan kesinlik” açıklaması hangi kavrama aittir?",
    "options": [
      "İlme’l-yakîn",
      "Ayne’l-yakîn",
      "Taklidî iman",
      "İman",
      "Mütevatir haber"
    ],
    "explanation": "İlme’l-yakîn: doğrudan gözlemden önce güvenilir bilgi ve delille ulaşılan kesinlik."
  },
  {
    "id": "bilgi-o11",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Ali, balın tatlı olduğunu güvenilir bir açıklamadan öğreniyor; henüz balı tatmış değil. Bilginin dayanağı bakımından hangi aşamadadır?",
    "options": [
      "İlme’l-yakîn",
      "Gayb",
      "Salim duyular",
      "Vahiy",
      "Tahkikî iman"
    ],
    "explanation": "İlme’l-yakîn: doğrudan gözlemden önce güvenilir bilgi ve delille ulaşılan kesinlik."
  },
  {
    "id": "bilgi-k12",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Bir şeyi bizzat görüp gözlemleyerek elde edilen kesinlik” açıklaması hangi kavrama aittir?",
    "options": [
      "Ayne’l-yakîn",
      "Tahkikî iman",
      "İlme’l-yakîn",
      "İman",
      "Selim akıl"
    ],
    "explanation": "Ayne’l-yakîn: bir şeyi bizzat görüp gözlemleyerek elde edilen kesinlik."
  },
  {
    "id": "bilgi-o12",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci anlatılan şelaleyi kendi gözleriyle görünce varlığından gözlem yoluyla emin oluyor. Hangi kesinlik aşaması örneklenir?",
    "options": [
      "Ayne’l-yakîn",
      "Hakka’l-yakîn",
      "Zan",
      "Sadık haber",
      "Tahkikî iman"
    ],
    "explanation": "Ayne’l-yakîn: bir şeyi bizzat görüp gözlemleyerek elde edilen kesinlik."
  },
  {
    "id": "bilgi-k13",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Bir gerçeği bizzat yaşayarak ve deneyimleyerek bilme” açıklaması hangi kavrama aittir?",
    "options": [
      "Hakka’l-yakîn",
      "Zan",
      "Taklidî iman",
      "Tahkikî iman",
      "Vahiy"
    ],
    "explanation": "Hakka’l-yakîn: bir gerçeği bizzat yaşayarak ve deneyimleyerek bilme."
  },
  {
    "id": "bilgi-o13",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Deniz, balın tadını anlatımlardan öğrenmekle yetinmeyip kendisi tadıyor. Bu doğrudan yaşantı hangi kesinlik aşamasına örnektir?",
    "options": [
      "Hakka’l-yakîn",
      "Salim duyular",
      "İman",
      "Sadık haber",
      "Taklidî iman"
    ],
    "explanation": "Hakka’l-yakîn: bir gerçeği bizzat yaşayarak ve deneyimleyerek bilme."
  },
  {
    "id": "bilgi-k14",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Kesin kanıta ulaşılmadan benimsenen tahmin veya kanaat” açıklaması hangi kavrama aittir?",
    "options": [
      "Zan",
      "Mütevatir haber",
      "Vahiy",
      "Tasdik",
      "Selim akıl"
    ],
    "explanation": "Zan: kesin kanıta ulaşılmadan benimsenen tahmin veya kanaat."
  },
  {
    "id": "bilgi-o14",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci, hiçbir kanıt görmediği hâlde kayıp defteri arkadaşının aldığını düşünüyor. Bu düşüncenin bilgi değeri hangi kavramla açıklanır?",
    "options": [
      "Zan",
      "Tahkikî iman",
      "Salim duyular",
      "Selim akıl",
      "Gayb"
    ],
    "explanation": "Zan: kesin kanıta ulaşılmadan benimsenen tahmin veya kanaat."
  },
  {
    "id": "bilgi-k15",
    "topic": "bilgi",
    "kind": "Kavram bilgisi",
    "text": "“Duyularla doğrudan kavranamayan varlık ve olaylar alanı” açıklaması hangi kavrama aittir?",
    "options": [
      "Gayb",
      "İkrar",
      "Tahkikî iman",
      "Taklidî iman",
      "Selim akıl"
    ],
    "explanation": "Gayb: duyularla doğrudan kavranamayan varlık ve olaylar alanı."
  },
  {
    "id": "bilgi-o15",
    "topic": "bilgi",
    "kind": "Örnekten kavrama",
    "text": "Bir derste meleklerin varlığı ile ahiretin deney ve gözlem sınırlarını aşan yönü ele alınıyor. Bu alan hangi kavramla adlandırılır?",
    "options": [
      "Gayb",
      "İman",
      "Tahkikî iman",
      "Salim duyular",
      "Ayne’l-yakîn"
    ],
    "explanation": "Gayb: duyularla doğrudan kavranamayan varlık ve olaylar alanı."
  },
  {
    "id": "bilgi-p01",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "Bir öğrenci suyun kaynamasını gözlemliyor, ölçümlerini karşılaştırıyor ve bir sonuca ulaşıyor. Bu süreçte birlikte kullandığı bilgi kaynakları hangileridir?",
    "options": [
      "Salim duyular ve selim akıl",
      "Vahiy ve rüya",
      "İlham ve sezgi",
      "Yalnızca doğru haber",
      "Yalnızca vahiy"
    ],
    "explanation": "Gözlem duyularla, verilerden sonuç çıkarma ise akılla gerçekleşir."
  },
  {
    "id": "bilgi-p02",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "İslam düşüncesinde aşağıdakilerden hangisi herkes için bağlayıcı bir bilgi kaynağı sayılmaz?",
    "options": [
      "Kişinin gördüğü rüya",
      "Selim akıl",
      "Salim duyular",
      "Vahiy",
      "Güvenilirliği doğrulanmış haber"
    ],
    "explanation": "Rüya kişisel bir yaşantıdır; tek başına herkesi bağlayan bir dinî delil oluşturmaz."
  },
  {
    "id": "bilgi-p03",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "İnancını yalnızca çevresinde gördüklerini benimseyerek sürdüren, dayanakları üzerinde düşünmeyen birinin imanı hangi kavramla adlandırılır?",
    "options": [
      "Taklidî iman",
      "Tahkikî iman",
      "İhsan",
      "İhlas",
      "Salih amel"
    ],
    "explanation": "Taklidî imanda çevreden edinilen kabul öne çıkar; tahkikî iman araştırma ve delillendirmeyle güçlenir."
  },
  {
    "id": "bilgi-p04",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "Bir genç, inandığı esasların gerekçelerini araştırıyor ve sorularına bilinçli cevaplar bulmaya çalışıyor. Bu yaklaşım en çok hangisiyle ilişkilidir?",
    "options": [
      "Tahkikî iman",
      "Taklidî iman",
      "Taassup",
      "Riya",
      "Zan"
    ],
    "explanation": "Tahkik, inancın gerekçelerini sorgulayıp araştırarak bilinçli bir kanaate ulaşmayı ifade eder."
  },
  {
    "id": "bilgi-p05",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "Bir haberi paylaşmadan önce kaynağını ve doğruluğunu kontrol eden kişi hangi ilkeyi gözetmektedir?",
    "options": [
      "Bilginin güvenilirliğini araştırma",
      "Çoğunluğun her zaman haklı olduğunu kabul etme",
      "Her duyduğuna inanma",
      "Kişisel kanaati kesin bilgi sayma",
      "Bilgiye ulaşmayı gereksiz görme"
    ],
    "explanation": "Bir haberin yaygın olması doğru olduğunu göstermez; kaynağının ve içeriğinin doğrulanması gerekir."
  },
  {
    "id": "bilgi-p06",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "Yalan üzerinde birleşmeleri aklen mümkün görülmeyen çok sayıda kişinin aktardığı haber hangi kavramla ifade edilir?",
    "options": [
      "Mütevatir haber",
      "İlham",
      "Rüya",
      "Keşif",
      "Zan"
    ],
    "explanation": "Mütevatir haberin ayırt edici yönü, aktarımın çok sayıda bağımsız kişi tarafından güvenilir biçimde yapılmasıdır."
  },
  {
    "id": "bilgi-p07",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "İslam’a göre insanın, duyularının erişemediği ahiret hayatı hakkında bilgi edinmesinde temel kaynak hangisidir?",
    "options": [
      "Vahiy",
      "Kişisel tahmin",
      "Laboratuvar deneyi",
      "Rastlantı",
      "Geleneksel söylenti"
    ],
    "explanation": "Ahiretin ayrıntıları deney ve gözlem alanının dışındadır; bu alandaki dinî bilgi vahye dayanır."
  },
  {
    "id": "bilgi-p08",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "Ön yargılardan uzak biçimde düşünebilen, doğruyu yanlıştan ayırmada kullanılan akıl için hangi kavram kullanılır?",
    "options": [
      "Selim akıl",
      "Salim duyular",
      "Mütevatir haber",
      "Taklidî iman",
      "İlham"
    ],
    "explanation": "Selim akıl, sağlıklı değerlendirme yapabilen akıldır. Salim duyular ise sağlıklı işleyen duyu organlarıyla ilgilidir."
  },
  {
    "id": "bilgi-p09",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "“Bir iddiaya inananların sayısının çokluğu, o iddiayı tek başına doğru yapmaz.” Bu cümle aşağıdakilerden hangisini öne çıkarır?",
    "options": [
      "İddianın kanıtlarını değerlendirmeyi",
      "Haber kaynaklarını tümüyle reddetmeyi",
      "Yalnızca sezgiye dayanmayı",
      "Araştırmadan karar vermeyi",
      "Duyuları bilgi kaynağı saymamayı"
    ],
    "explanation": "Doğruya ulaşmak için popülerliğe değil, gerekçe ve kanıtlara bakılır."
  },
  {
    "id": "bilgi-p10",
    "topic": "bilgi",
    "kind": "Pekiştirme",
    "text": "İmanın özüyle ilgili aşağıdaki açıklamalardan hangisi doğrudur?",
    "options": [
      "İnanç esaslarını kalben doğrulamaktır.",
      "Yalnızca toplumsal bir gruba katılmaktır.",
      "Her konuda hiç soru sormamaktır.",
      "Yalnızca sözlü bir iddiadan ibarettir.",
      "Sadece gelenekleri tekrar etmektir."
    ],
    "explanation": "İmanın özünde kalbin tasdiki bulunur; sözlü beyan bu kabulün dışa yansımasıdır."
  },
  {
    "id": "din-k01",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“İnsanın inanç ve yaşayışına yön veren ilahî ilkeler bütünü” açıklaması hangi kavrama aittir?",
    "options": [
      "Din",
      "Dua",
      "Kelime-i şehadet",
      "Melek",
      "Hanif"
    ],
    "explanation": "Din: i̇nsanın inanç ve yaşayışına yön veren ilahî ilkeler bütünü."
  },
  {
    "id": "din-o01",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir açıklamada insanın Allah’la, kendisiyle ve çevresiyle ilişkisini düzenleyen ilahî rehberlikten söz ediliyor. Hangi genel kavram ele alınmaktadır?",
    "options": [
      "Din",
      "Mümin",
      "Dua",
      "Şirk",
      "Kelime-i şehadet"
    ],
    "explanation": "Din: i̇nsanın inanç ve yaşayışına yön veren ilahî ilkeler bütünü."
  },
  {
    "id": "din-k02",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’a teslimiyet ve O’nun rehberliğine uygun yaşama esasına dayanan din” açıklaması hangi kavrama aittir?",
    "options": [
      "İslam",
      "Şirk",
      "Tevhit",
      "Ahiret",
      "Melek"
    ],
    "explanation": "İslam: allah’a teslimiyet ve O’nun rehberliğine uygun yaşama esasına dayanan din."
  },
  {
    "id": "din-o02",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir genç yalnızca içten inanmanın değil, bu kabulü Allah’ın emirlerine uyan davranışlarla göstermenin de önemini anlatıyor. İmanın yaşantıya yansıyan yönünü hangi kavramla ilişkilendirir?",
    "options": [
      "İslam",
      "Kelime-i şehadet",
      "Fıtrat",
      "Tevhit",
      "Melek"
    ],
    "explanation": "İslam: allah’a teslimiyet ve O’nun rehberliğine uygun yaşama esasına dayanan din."
  },
  {
    "id": "din-k03",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’ın birliğini ve eşsizliğini kabul etme” açıklaması hangi kavrama aittir?",
    "options": [
      "Tevhit",
      "Tevekkül",
      "Fıtrat",
      "Din",
      "Esmâ-i hüsnâ"
    ],
    "explanation": "Tevhit: allah’ın birliğini ve eşsizliğini kabul etme."
  },
  {
    "id": "din-o03",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi, Allah’a ibadet ederken hiçbir varlığı O’na denk veya ortak görmediğini belirtiyor. Hangi inanç ilkesini ifade ediyor?",
    "options": [
      "Tevhit",
      "Fıtrat",
      "Ahiret",
      "İslam",
      "Din"
    ],
    "explanation": "Tevhit: allah’ın birliğini ve eşsizliğini kabul etme."
  },
  {
    "id": "din-k04",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“İnsanın yaratılıştan getirdiği doğal yapı ve hakikate yatkınlık” açıklaması hangi kavrama aittir?",
    "options": [
      "Fıtrat",
      "Kelime-i tevhid",
      "İslam",
      "Şirk",
      "Tevekkül"
    ],
    "explanation": "Fıtrat: i̇nsanın yaratılıştan getirdiği doğal yapı ve hakikate yatkınlık."
  },
  {
    "id": "din-o04",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir öğretmen, insanın anlam arayışını ve inanmaya yatkınlığını doğuştan gelen özellikleriyle açıklıyor. Hangi kavramı kullanıyor?",
    "options": [
      "Fıtrat",
      "Ahiret",
      "Şirk",
      "Tevhit",
      "Kelime-i tevhid"
    ],
    "explanation": "Fıtrat: i̇nsanın yaratılıştan getirdiği doğal yapı ve hakikate yatkınlık."
  },
  {
    "id": "din-k05",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Ortak koşmadan tek Allah’a yönelen kişi” açıklaması hangi kavrama aittir?",
    "options": [
      "Hanif",
      "İslam",
      "Şirk",
      "Dua",
      "Din"
    ],
    "explanation": "Hanif: ortak koşmadan tek Allah’a yönelen kişi."
  },
  {
    "id": "din-o05",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Putperestliğin yaygın olduğu bir ortamda putları reddedip tek Allah’a yönelen kişi hangi kavramla nitelendirilir?",
    "options": [
      "Hanif",
      "Kelime-i şehadet",
      "Ahiret",
      "Melek",
      "Nübüvvet"
    ],
    "explanation": "Hanif: ortak koşmadan tek Allah’a yönelen kişi."
  },
  {
    "id": "din-k06",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’ın güzel isimlerinin genel adı” açıklaması hangi kavrama aittir?",
    "options": [
      "Esmâ-i hüsnâ",
      "Ahiret",
      "Melek",
      "Nübüvvet",
      "Tevekkül"
    ],
    "explanation": "Esmâ-i hüsnâ: allah’ın güzel isimlerinin genel adı."
  },
  {
    "id": "din-o06",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci Rahmân, Rahîm ve Alîm isimlerini tek başlık altında topluyor. Kullanacağı başlık hangisidir?",
    "options": [
      "Esmâ-i hüsnâ",
      "Şirk",
      "Fıtrat",
      "Tevekkül",
      "Nübüvvet"
    ],
    "explanation": "Esmâ-i hüsnâ: allah’ın güzel isimlerinin genel adı."
  },
  {
    "id": "din-k07",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“İslam’ın inanç esaslarını gönülden benimseyen kişi” açıklaması hangi kavrama aittir?",
    "options": [
      "Mümin",
      "Esmâ-i hüsnâ",
      "Tevekkül",
      "Din",
      "Şirk"
    ],
    "explanation": "Mümin: i̇slam’ın inanç esaslarını gönülden benimseyen kişi."
  },
  {
    "id": "din-o07",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Allah’ın birliğini ve peygamberlerin bildirdiklerini içtenlikle kabul eden kişiye hangi ad verilir?",
    "options": [
      "Mümin",
      "Nübüvvet",
      "Dua",
      "Din",
      "Kelime-i şehadet"
    ],
    "explanation": "Mümin: i̇slam’ın inanç esaslarını gönülden benimseyen kişi."
  },
  {
    "id": "din-k08",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’a ortak koşma” açıklaması hangi kavrama aittir?",
    "options": [
      "Şirk",
      "Fıtrat",
      "Din",
      "Tevhit",
      "İslam"
    ],
    "explanation": "Şirk: allah’a ortak koşma."
  },
  {
    "id": "din-o08",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi Allah’ın varlığını kabul etmekle birlikte başka bir varlığa da ilahlık atfediyor. Bu anlayış hangi kavramla ifade edilir?",
    "options": [
      "Şirk",
      "Nübüvvet",
      "Kelime-i şehadet",
      "Esmâ-i hüsnâ",
      "Fıtrat"
    ],
    "explanation": "Şirk: allah’a ortak koşma."
  },
  {
    "id": "din-k09",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Dünya hayatından sonra yeniden dirilişle başlayan hayat” açıklaması hangi kavrama aittir?",
    "options": [
      "Ahiret",
      "Mümin",
      "Dua",
      "Fıtrat",
      "Melek"
    ],
    "explanation": "Ahiret: dünya hayatından sonra yeniden dirilişle başlayan hayat."
  },
  {
    "id": "din-o09",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Yaptığı davranışların hesabını ölümden sonra vereceğine inanan öğrenci, hangi inanç alanına vurgu yapmaktadır?",
    "options": [
      "Ahiret",
      "Nübüvvet",
      "Dua",
      "Din",
      "Mümin"
    ],
    "explanation": "Ahiret: dünya hayatından sonra yeniden dirilişle başlayan hayat."
  },
  {
    "id": "din-k10",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’ın seçtiği insanlara peygamberlik görevi vermesi” açıklaması hangi kavrama aittir?",
    "options": [
      "Nübüvvet",
      "Hanif",
      "Fıtrat",
      "Esmâ-i hüsnâ",
      "İslam"
    ],
    "explanation": "Nübüvvet: allah’ın seçtiği insanlara peygamberlik görevi vermesi."
  },
  {
    "id": "din-o10",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Allah’ın insanlara rehberlik etmesi için elçiler seçmesi hangi dinî kavramla ilişkilidir?",
    "options": [
      "Nübüvvet",
      "Mümin",
      "Dua",
      "Kelime-i şehadet",
      "Kelime-i tevhid"
    ],
    "explanation": "Nübüvvet: allah’ın seçtiği insanlara peygamberlik görevi vermesi."
  },
  {
    "id": "din-k11",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’ın emirlerini yerine getiren, duyularla görülmeyen varlık türü” açıklaması hangi kavrama aittir?",
    "options": [
      "Melek",
      "Hanif",
      "Mümin",
      "Tevhit",
      "Kelime-i şehadet"
    ],
    "explanation": "Melek: allah’ın emirlerini yerine getiren, duyularla görülmeyen varlık türü."
  },
  {
    "id": "din-o11",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir derste Cebrail’in vahyi peygamberlere ulaştırma görevi anlatılıyor. Cebrail hangi varlık türündendir?",
    "options": [
      "Melek",
      "Ahiret",
      "Şirk",
      "Hanif",
      "Tevekkül"
    ],
    "explanation": "Melek: allah’ın emirlerini yerine getiren, duyularla görülmeyen varlık türü."
  },
  {
    "id": "din-k12",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’tan başka ilah olmadığını ve Muhammed’in O’nun elçisi olduğunu bildiren temel söz” açıklaması hangi kavrama aittir?",
    "options": [
      "Kelime-i tevhid",
      "Kelime-i şehadet",
      "Dua",
      "Hanif",
      "Ahiret"
    ],
    "explanation": "Kelime-i tevhid: allah’tan başka ilah olmadığını ve Muhammed’in O’nun elçisi olduğunu bildiren temel söz."
  },
  {
    "id": "din-o12",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Lâ ilâhe illallah, Muhammedün resûlullah ifadesinin özel adı hangisidir?",
    "options": [
      "Kelime-i tevhid",
      "Şirk",
      "Kelime-i şehadet",
      "Ahiret",
      "Tevekkül"
    ],
    "explanation": "Kelime-i tevhid: allah’tan başka ilah olmadığını ve Muhammed’in O’nun elçisi olduğunu bildiren temel söz."
  },
  {
    "id": "din-k13",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Allah’ın birliğine ve Muhammed’in kulluğu ile elçiliğine tanıklığı bildiren söz” açıklaması hangi kavrama aittir?",
    "options": [
      "Kelime-i şehadet",
      "Şirk",
      "Hanif",
      "Tevhit",
      "Ahiret"
    ],
    "explanation": "Kelime-i şehadet: allah’ın birliğine ve Muhammed’in kulluğu ile elçiliğine tanıklığı bildiren söz."
  },
  {
    "id": "din-o13",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Eşhedü diye başlayarak Allah’ın birliğine ve Hz. Muhammed’in elçiliğine tanıklığını açıklayan kişi hangi ifadeyi söylemektedir?",
    "options": [
      "Kelime-i şehadet",
      "Şirk",
      "Melek",
      "İslam",
      "Mümin"
    ],
    "explanation": "Kelime-i şehadet: allah’ın birliğine ve Muhammed’in kulluğu ile elçiliğine tanıklığı bildiren söz."
  },
  {
    "id": "din-k14",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“İnsanın Allah’a yönelerek O’na dileğini ve yakarışını sunması” açıklaması hangi kavrama aittir?",
    "options": [
      "Dua",
      "Tevhit",
      "Esmâ-i hüsnâ",
      "Hanif",
      "Kelime-i şehadet"
    ],
    "explanation": "Dua: i̇nsanın Allah’a yönelerek O’na dileğini ve yakarışını sunması."
  },
  {
    "id": "din-o14",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci bir zorluk karşısında Allah’a seslenip yardımını diliyor. Bu yöneliş hangi kavramdır?",
    "options": [
      "Dua",
      "Fıtrat",
      "Ahiret",
      "Tevekkül",
      "Melek"
    ],
    "explanation": "Dua: i̇nsanın Allah’a yönelerek O’na dileğini ve yakarışını sunması."
  },
  {
    "id": "din-k15",
    "topic": "din",
    "kind": "Kavram bilgisi",
    "text": "“Gerekli çabayı gösterip tedbir aldıktan sonra Allah’a güvenme” açıklaması hangi kavrama aittir?",
    "options": [
      "Tevekkül",
      "Ahiret",
      "Hanif",
      "Nübüvvet",
      "Mümin"
    ],
    "explanation": "Tevekkül: gerekli çabayı gösterip tedbir aldıktan sonra Allah’a güvenme."
  },
  {
    "id": "din-o15",
    "topic": "din",
    "kind": "Örnekten kavrama",
    "text": "Çiftçi tarlasını ekiyor, suluyor ve bakımını yapıyor; ardından sonucu Allah’a bırakıyor. Bu tutum hangi kavramı örnekler?",
    "options": [
      "Tevekkül",
      "Melek",
      "Şirk",
      "Esmâ-i hüsnâ",
      "Dua"
    ],
    "explanation": "Tevekkül: gerekli çabayı gösterip tedbir aldıktan sonra Allah’a güvenme."
  },
  {
    "id": "din-p01",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "İslam’da Allah’ın bir ve eşsiz olduğuna inanmayı ifade eden temel ilke hangisidir?",
    "options": [
      "Tevhit",
      "Şirk",
      "Riya",
      "Taassup",
      "İsraf"
    ],
    "explanation": "Tevhit, Allah’ın birliğini ve eşsizliğini kabul etmektir."
  },
  {
    "id": "din-p02",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "İnsanın doğuştan sahip olduğu özellikleri ve hakikati kabul etmeye elverişli yaratılışını anlatan kavram hangisidir?",
    "options": [
      "Fıtrat",
      "Mezhep",
      "İçtihat",
      "İcma",
      "Hicret"
    ],
    "explanation": "Fıtrat, insanın yaratılıştan getirdiği yapıyı ve yatkınlıkları ifade eder."
  },
  {
    "id": "din-p03",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "Allah’a ortak koşmadan, batıl inançlardan uzak durarak O’na yönelen kişi hangi kavramla nitelendirilir?",
    "options": [
      "Hanif",
      "Münafık",
      "Müşrik",
      "Müsrif",
      "Müfteri"
    ],
    "explanation": "Hanif, şirkten uzaklaşıp tek Allah’a yönelen kişidir; Hanefî ise bir fıkıh mezhebine mensubiyeti belirtir."
  },
  {
    "id": "din-p04",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "İslam’a göre kişinin davranışlarından sorumlu tutulabilmesi en doğrudan hangi iki özelliğiyle ilişkilidir?",
    "options": [
      "Akıl ve özgür irade",
      "Servet ve makam",
      "Soy ve aile",
      "Yaşadığı ülke ve iklim",
      "Fiziksel güç ve görünüş"
    ],
    "explanation": "İnsan, aklıyla değerlendirebildiği ve iradesiyle seçebildiği davranışlarından sorumlu olur."
  },
  {
    "id": "din-p05",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "İslam’ın insanı hem bireysel hem toplumsal yönüyle ele alması aşağıdakilerden hangisini destekler?",
    "options": [
      "Dinî hayatın ahlak ve sosyal ilişkilerle de bağlantılı olduğunu",
      "Dinin yalnızca törenlerden oluştuğunu",
      "Ahlakın dinle hiçbir ilişkisi bulunmadığını",
      "Sorumluluğun yalnızca başkalarına ait olduğunu",
      "Toplumsal adaletin önemsiz olduğunu"
    ],
    "explanation": "İslam’ın ilkeleri ibadetlerin yanında insan ilişkilerini ve ahlaki davranışları da kapsar."
  },
  {
    "id": "din-p06",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "Bir kimsenin Allah’a inanmakla birlikte başka varlıklara da ilahlık atfetmesi hangi kavramla ifade edilir?",
    "options": [
      "Şirk",
      "Tevhit",
      "İhlas",
      "İhsan",
      "Takva"
    ],
    "explanation": "Şirk, Allah’a ortak koşmaktır; tevhitle bağdaşmaz."
  },
  {
    "id": "din-p07",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "“İman, ibadet ve ahlak birbirini tamamlar.” Buna uygun davranış hangisidir?",
    "options": [
      "İbadet ederken insan haklarına da özen göstermek",
      "İbadetleri başkalarını küçük görmek için kullanmak",
      "İnancı davranışlardan tamamen ayırmak",
      "Dürüstlüğü yalnızca kazanç sağladığında önemsemek",
      "Yardımı sırf övülmek için yapmak"
    ],
    "explanation": "İnanç ve ibadet, günlük hayatta adalet ve güzel ahlakla bütünleşmelidir."
  },
  {
    "id": "din-p08",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "Bir öğrenci sınava düzenli hazırlanıyor, elinden geleni yaptıktan sonra sonucu Allah’a bırakıyor. Bu tutum hangisine örnektir?",
    "options": [
      "Tevekkül",
      "Tembellik",
      "Kadercilik adına çabayı bırakma",
      "Riya",
      "İsraf"
    ],
    "explanation": "Tevekkül, gereken çabayı ve tedbiri gösterdikten sonra Allah’a güvenmektir."
  },
  {
    "id": "din-p09",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "İslam inancında Allah’ın güzel isimlerini ifade eden kavram hangisidir?",
    "options": [
      "Esmâ-i hüsnâ",
      "Efâl-i mükellefîn",
      "Sünnetullah",
      "Siyer",
      "Esbâb-ı nüzûl"
    ],
    "explanation": "Esmâ-i hüsnâ, Allah’ı tanımaya yardımcı olan güzel isimlerdir."
  },
  {
    "id": "din-p10",
    "topic": "din",
    "kind": "Pekiştirme",
    "text": "“İnsan, seçim yapabildiği için yaptıklarının sonuçlarını da üstlenmelidir.” Bu düşüncede hangi ilişki vurgulanır?",
    "options": [
      "Özgürlük ve sorumluluk",
      "Servet ve itibar",
      "Gelenek ve coğrafya",
      "Ticaret ve üretim",
      "Sanat ve mimari"
    ],
    "explanation": "Seçme imkânı, kişinin davranışları için hesap verme sorumluluğunu beraberinde getirir."
  },
  {
    "id": "ibadet-k01",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Allah’a kulluk amacıyla dinin emirlerine uyup yasaklarından kaçınma” açıklaması hangi kavrama aittir?",
    "options": [
      "İbadet",
      "Mekruh",
      "Vacip",
      "Mubah",
      "Riya"
    ],
    "explanation": "İbadet: allah’a kulluk amacıyla dinin emirlerine uyup yasaklarından kaçınma."
  },
  {
    "id": "ibadet-o01",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci, Allah’ın rızasını gözeterek yaptığı meşru ve yararlı işlerin de kulluk kapsamına girdiğini söylüyor. Hangi kavramın geniş anlamını açıklıyor?",
    "options": [
      "İbadet",
      "Mendup",
      "Mubah",
      "Riya",
      "Mekruh"
    ],
    "explanation": "İbadet: allah’a kulluk amacıyla dinin emirlerine uyup yasaklarından kaçınma."
  },
  {
    "id": "ibadet-k02",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Bir işi hangi amaçla yapacağını kalben belirleme” açıklaması hangi kavrama aittir?",
    "options": [
      "Niyet",
      "Farz-ı ayn",
      "Farz-ı kifaye",
      "Nafile",
      "Mendup"
    ],
    "explanation": "Niyet: bir işi hangi amaçla yapacağını kalben belirleme."
  },
  {
    "id": "ibadet-o02",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi yaptığı yardımın amacını kendi içinde belirleyerek işe başlıyor. Davranışa yön veren bu iç karar hangisidir?",
    "options": [
      "Niyet",
      "Nafile",
      "Mendup",
      "Mekruh",
      "Mükellef"
    ],
    "explanation": "Niyet: bir işi hangi amaçla yapacağını kalben belirleme."
  },
  {
    "id": "ibadet-k03",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Söz ve davranışlarda yalnızca Allah’ın rızasını gözeten samimiyet” açıklaması hangi kavrama aittir?",
    "options": [
      "İhlas",
      "Sünnet",
      "Mükellef",
      "Mendup",
      "Farz"
    ],
    "explanation": "İhlas: söz ve davranışlarda yalnızca Allah’ın rızasını gözeten samimiyet."
  },
  {
    "id": "ibadet-o03",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Yardım yaptığı duyulmasa da bundan memnun olan kişi, yalnız Allah’ın rızasını amaçlıyor. Hangi ilke öne çıkar?",
    "options": [
      "İhlas",
      "Vacip",
      "İbadet",
      "Sünnet",
      "Farz"
    ],
    "explanation": "İhlas: söz ve davranışlarda yalnızca Allah’ın rızasını gözeten samimiyet."
  },
  {
    "id": "ibadet-k04",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“İbadet ve iyilikleri insanların beğenisini kazanmak için gösterişe dönüştürme” açıklaması hangi kavrama aittir?",
    "options": [
      "Riya",
      "İhlas",
      "Sünnet",
      "Mükellef",
      "Mekruh"
    ],
    "explanation": "Riya: i̇badet ve iyilikleri insanların beğenisini kazanmak için gösterişe dönüştürme."
  },
  {
    "id": "ibadet-o04",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi yardım yapmaktan çok, herkesin kendisini yardımsever olarak övmesini önemsiyor. Hangi davranış örnekleniyor?",
    "options": [
      "Riya",
      "Farz-ı kifaye",
      "Haram",
      "Farz",
      "Mükellef"
    ],
    "explanation": "Riya: i̇badet ve iyilikleri insanların beğenisini kazanmak için gösterişe dönüştürme."
  },
  {
    "id": "ibadet-k05",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Dinî emir ve yasaklardan sorumlu olan kişi” açıklaması hangi kavrama aittir?",
    "options": [
      "Mükellef",
      "Farz",
      "Vacip",
      "Niyet",
      "Farz-ı kifaye"
    ],
    "explanation": "Mükellef: dinî emir ve yasaklardan sorumlu olan kişi."
  },
  {
    "id": "ibadet-o05",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Akıl sağlığı yerinde ve ergenlik çağına ulaşmış bir Müslümanın dinî sorumluluğu anlatılıyor. Bu kişi için hangi kavram kullanılır?",
    "options": [
      "Mükellef",
      "İbadet",
      "Vacip",
      "Farz-ı kifaye",
      "Mendup"
    ],
    "explanation": "Mükellef: dinî emir ve yasaklardan sorumlu olan kişi."
  },
  {
    "id": "ibadet-k06",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Yapılması kesin ve bağlayıcı biçimde emredilen davranışın genel hükmü” açıklaması hangi kavrama aittir?",
    "options": [
      "Farz",
      "Mükellef",
      "Vacip",
      "Riya",
      "Mubah"
    ],
    "explanation": "Farz: yapılması kesin ve bağlayıcı biçimde emredilen davranışın genel hükmü."
  },
  {
    "id": "ibadet-o06",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Öğretmen, yapılması kesin olarak istenen ibadetleri kişinin veya toplumun sorumluluğu bakımından ikiye ayırıyor. Bu iki türün ortak üst başlığı hangisidir?",
    "options": [
      "Farz",
      "Mükellef",
      "Mendup",
      "İhlas",
      "Niyet"
    ],
    "explanation": "Farz: yapılması kesin ve bağlayıcı biçimde emredilen davranışın genel hükmü."
  },
  {
    "id": "ibadet-k07",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Gerekli şartları taşıyan her mükellefin bizzat yerine getirmesi gereken farz” açıklaması hangi kavrama aittir?",
    "options": [
      "Farz-ı ayn",
      "İhlas",
      "Haram",
      "Riya",
      "Mekruh"
    ],
    "explanation": "Farz-ı ayn: gerekli şartları taşıyan her mükellefin bizzat yerine getirmesi gereken farz."
  },
  {
    "id": "ibadet-o07",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci, başkasının namaz kılmasının kendi beş vakit namaz sorumluluğunu kaldırmadığını öğreniyor. Bu yükümlülüğün türü hangisidir?",
    "options": [
      "Farz-ı ayn",
      "Riya",
      "Niyet",
      "Vacip",
      "İhlas"
    ],
    "explanation": "Farz-ı ayn: gerekli şartları taşıyan her mükellefin bizzat yerine getirmesi gereken farz."
  },
  {
    "id": "ibadet-k08",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Yeterli sayıda kişinin yapmasıyla diğerlerinden sorumluluğun kalktığı farz” açıklaması hangi kavrama aittir?",
    "options": [
      "Farz-ı kifaye",
      "Vacip",
      "Niyet",
      "Mubah",
      "Riya"
    ],
    "explanation": "Farz-ı kifaye: yeterli sayıda kişinin yapmasıyla diğerlerinden sorumluluğun kalktığı farz."
  },
  {
    "id": "ibadet-o08",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir cenazenin namazını bir grup Müslüman kıldığında bu görevin diğerleri üzerindeki sorumluluğu kalkıyor. Hangi tür farz söz konusudur?",
    "options": [
      "Farz-ı kifaye",
      "Haram",
      "Mendup",
      "Niyet",
      "Mekruh"
    ],
    "explanation": "Farz-ı kifaye: yeterli sayıda kişinin yapmasıyla diğerlerinden sorumluluğun kalktığı farz."
  },
  {
    "id": "ibadet-k09",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Hanefî anlayışında farz kadar kesin delile dayanmayan fakat yapılması bağlayıcı olan yükümlülük” açıklaması hangi kavrama aittir?",
    "options": [
      "Vacip",
      "İhlas",
      "Farz-ı kifaye",
      "Mubah",
      "Riya"
    ],
    "explanation": "Vacip: hanefî anlayışında farz kadar kesin delile dayanmayan fakat yapılması bağlayıcı olan yükümlülük."
  },
  {
    "id": "ibadet-o09",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir öğretmen, Hanefî mezhebinde vitir namazının farzdan ayrı bir bağlayıcı hükümle nitelendirildiğini anlatıyor. Bu hüküm hangisidir?",
    "options": [
      "Vacip",
      "Riya",
      "Farz-ı kifaye",
      "Nafile",
      "Mubah"
    ],
    "explanation": "Vacip: hanefî anlayışında farz kadar kesin delile dayanmayan fakat yapılması bağlayıcı olan yükümlülük."
  },
  {
    "id": "ibadet-k10",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“İbadet hükümleri bağlamında Hz. Peygamber’in farz ve vacip dışında yaptığı veya tavsiye ettiği davranış” açıklaması hangi kavrama aittir?",
    "options": [
      "Sünnet",
      "Mubah",
      "Haram",
      "İhlas",
      "Mükellef"
    ],
    "explanation": "Sünnet: i̇badet hükümleri bağlamında Hz. Peygamber’in farz ve vacip dışında yaptığı veya tavsiye ettiği davranış."
  },
  {
    "id": "ibadet-o10",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir Müslüman, sabah namazının farzından önce Hz. Peygamber’in devam ettiği iki rekâtı kılıyor. Bu namaz hangi hükümle adlandırılır?",
    "options": [
      "Sünnet",
      "Mekruh",
      "Mükellef",
      "İhlas",
      "Riya"
    ],
    "explanation": "Sünnet: i̇badet hükümleri bağlamında Hz. Peygamber’in farz ve vacip dışında yaptığı veya tavsiye ettiği davranış."
  },
  {
    "id": "ibadet-k11",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Yapılması tavsiye edilen, terk edilmesi dinen kınanmayan davranış” açıklaması hangi kavrama aittir?",
    "options": [
      "Mendup",
      "Farz-ı ayn",
      "Riya",
      "Farz-ı kifaye",
      "Mubah"
    ],
    "explanation": "Mendup: yapılması tavsiye edilen, terk edilmesi dinen kınanmayan davranış."
  },
  {
    "id": "ibadet-o11",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi bağlayıcı bir emir olmadığı hâlde güzel görülen bir davranışı seçiyor. Yapılmaması kınanmayan bu tavsiyenin hükmü hangisidir?",
    "options": [
      "Mendup",
      "Haram",
      "Farz-ı kifaye",
      "Mükellef",
      "Niyet"
    ],
    "explanation": "Mendup: yapılması tavsiye edilen, terk edilmesi dinen kınanmayan davranış."
  },
  {
    "id": "ibadet-k12",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Yapılması veya yapılmaması dinen serbest bırakılan davranış” açıklaması hangi kavrama aittir?",
    "options": [
      "Mubah",
      "Mükellef",
      "Sünnet",
      "Mendup",
      "Mekruh"
    ],
    "explanation": "Mubah: yapılması veya yapılmaması dinen serbest bırakılan davranış."
  },
  {
    "id": "ibadet-o12",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Sağlığına zarar vermeyen helal yiyeceklerden hangisini yiyeceği konusunda kişi serbesttir. Bu serbestlik hangi hükümdür?",
    "options": [
      "Mubah",
      "Sünnet",
      "Mekruh",
      "Mendup",
      "İhlas"
    ],
    "explanation": "Mubah: yapılması veya yapılmaması dinen serbest bırakılan davranış."
  },
  {
    "id": "ibadet-k13",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Yapılması kesin biçimde yasaklanmış davranış” açıklaması hangi kavrama aittir?",
    "options": [
      "Haram",
      "Riya",
      "İbadet",
      "Nafile",
      "Farz-ı kifaye"
    ],
    "explanation": "Haram: yapılması kesin biçimde yasaklanmış davranış."
  },
  {
    "id": "ibadet-o13",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi, başkasının malını çalmanın dinen kesin yasak olduğunu öğreniyor. Bu fiilin hükmü nedir?",
    "options": [
      "Haram",
      "Mükellef",
      "Farz",
      "Mubah",
      "İhlas"
    ],
    "explanation": "Haram: yapılması kesin biçimde yasaklanmış davranış."
  },
  {
    "id": "ibadet-k14",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Dinen yapılması hoş görülmeyen, kaçınılması istenen davranış” açıklaması hangi kavrama aittir?",
    "options": [
      "Mekruh",
      "Mendup",
      "Riya",
      "Niyet",
      "Farz-ı ayn"
    ],
    "explanation": "Mekruh: dinen yapılması hoş görülmeyen, kaçınılması istenen davranış."
  },
  {
    "id": "ibadet-o14",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir açıklamada kesin yasakla aynı düzeyde olmayan fakat uzak durulması istenen bir davranış ele alınıyor. Hangi hüküm kastedilir?",
    "options": [
      "Mekruh",
      "Vacip",
      "Sünnet",
      "Farz",
      "Haram"
    ],
    "explanation": "Mekruh: dinen yapılması hoş görülmeyen, kaçınılması istenen davranış."
  },
  {
    "id": "ibadet-k15",
    "topic": "ibadet",
    "kind": "Kavram bilgisi",
    "text": "“Zorunlu ibadetlerin dışında gönüllü olarak yapılan ek ibadetlerin genel adı” açıklaması hangi kavrama aittir?",
    "options": [
      "Nafile",
      "İhlas",
      "Haram",
      "Mubah",
      "Mekruh"
    ],
    "explanation": "Nafile: zorunlu ibadetlerin dışında gönüllü olarak yapılan ek ibadetlerin genel adı."
  },
  {
    "id": "ibadet-o15",
    "topic": "ibadet",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci farz ibadetlerinin yanında gönüllü ek namaz ve oruçları aynı genel başlıkta topluyor. Bu başlık hangisidir?",
    "options": [
      "Nafile",
      "Mubah",
      "Mekruh",
      "Mükellef",
      "Riya"
    ],
    "explanation": "Nafile: zorunlu ibadetlerin dışında gönüllü olarak yapılan ek ibadetlerin genel adı."
  },
  {
    "id": "ibadet-p01",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Bir kişi, bir iyiliği yalnızca Allah’ın rızasını gözeterek yapıyor. İbadette hangi temel ilke öne çıkmaktadır?",
    "options": [
      "İhlas",
      "Riya",
      "Gösteriş",
      "Taassup",
      "İsraf"
    ],
    "explanation": "İhlas, davranışın samimi biçimde Allah’ın rızası için yapılmasıdır."
  },
  {
    "id": "ibadet-p02",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "İbadetin geniş anlamını en iyi yansıtan davranış hangisidir?",
    "options": [
      "Allah’ın rızasını gözeterek ihtiyaç sahibine yardım etmek",
      "Yalnızca kazanç için başkasını yanıltmak",
      "Övülmek için yardım ediyor görünmek",
      "Sorumluluklardan kaçmak",
      "İnsanları değersiz görmek"
    ],
    "explanation": "İbadet yalnızca belirli ritüellerle sınırlı değildir; iyi niyetle yapılan meşru ve faydalı işler de bu kapsamda değerlendirilir."
  },
  {
    "id": "ibadet-p03",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Dinen yapılması kesin ve bağlayıcı biçimde emredilen davranış hangi kavramla adlandırılır?",
    "options": [
      "Farz",
      "Mubah",
      "Mekruh",
      "Haram",
      "Nafile"
    ],
    "explanation": "Farz, yerine getirilmesi kesin olarak istenen yükümlülüktür."
  },
  {
    "id": "ibadet-p04",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Yeterli sayıda Müslüman yerine getirdiğinde diğerlerinden sorumluluğun kalktığı görev hangisidir?",
    "options": [
      "Farz-ı kifaye",
      "Farz-ı ayn",
      "Mubah",
      "Mekruh",
      "Nafile"
    ],
    "explanation": "Farz-ı kifaye toplumsal nitelikte bir yükümlülüktür. Cenaze namazı buna örnektir."
  },
  {
    "id": "ibadet-p05",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Dinen yapılması da yapılmaması da serbest bırakılan davranışlar hangi başlıkta yer alır?",
    "options": [
      "Mubah",
      "Haram",
      "Farz",
      "Vacip",
      "Mekruh"
    ],
    "explanation": "Mubah davranışlarda esas itibarıyla yapma veya yapmama serbestliği vardır."
  },
  {
    "id": "ibadet-p06",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "İbadet yükümlülüğüyle ilgili “mükellef” kavramı temel olarak kimi ifade eder?",
    "options": [
      "Akıl sağlığı yerinde ve ergenlik çağına ulaşmış kişiyi",
      "Yalnızca din görevlilerini",
      "Yalnızca varlıklı kişileri",
      "Yaşı ne olursa olsun herkesi",
      "Sadece yolculuk yapanları"
    ],
    "explanation": "Mükellefiyetin temel şartları akıl ve ergenliktir; belirli ibadetlerde ayrıca özel şartlar bulunur."
  },
  {
    "id": "ibadet-p07",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Dinen yapılması kesin olarak yasaklanmış davranışın hükmü hangisidir?",
    "options": [
      "Haram",
      "Mubah",
      "Müstehap",
      "Sünnet",
      "Nafile"
    ],
    "explanation": "Haram, yapılmaması kesin biçimde istenen davranıştır."
  },
  {
    "id": "ibadet-p08",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Bir öğrencinin oruç tutarken kötü sözden ve haksızlıktan da uzak durması hangi sonucu gösterir?",
    "options": [
      "İbadetin ahlaki gelişimi desteklediğini",
      "İbadetin yalnızca aç kalmak olduğunu",
      "İbadette niyetin gereksizliğini",
      "Ahlakın yalnızca dış görünüş olduğunu",
      "İbadetin insan ilişkilerini etkilemediğini"
    ],
    "explanation": "İbadetin amaçlarından biri öz denetimi güçlendirmek ve davranışları güzelleştirmektir."
  },
  {
    "id": "ibadet-p09",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Zorunlu ibadetlerin dışında, gönüllü olarak yapılan ek ibadetler için hangi genel kavram kullanılır?",
    "options": [
      "Nafile",
      "Farz-ı ayn",
      "Haram",
      "Mekruh",
      "Mükellef"
    ],
    "explanation": "Nafile, kişinin zorunlu olmadığı hâlde gönüllü yaptığı ibadetleri ifade eder."
  },
  {
    "id": "ibadet-p10",
    "topic": "ibadet",
    "kind": "Pekiştirme",
    "text": "Bir kişi yardım yaparken “Beni herkes görsün ve övsün.” diye düşünüyor. Bu tutum ibadetin hangi yönünü zedeler?",
    "options": [
      "Samimiyetini",
      "Yapıldığı yerin büyüklüğünü",
      "Kullanılan eşyanın türünü",
      "Yardım alanın yaşını",
      "Günün saatini"
    ],
    "explanation": "İnsanların beğenisini temel amaç hâline getirmek riyadır ve ihlasla bağdaşmaz."
  },
  {
    "id": "genclik-k01",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“İnsanların önem verdiği, iyi ve doğru sayarak davranışlarına ölçü yaptığı ilke” açıklaması hangi kavrama aittir?",
    "options": [
      "Değer",
      "Örf ve âdet",
      "Cömertlik",
      "Şecaat",
      "Hikmet"
    ],
    "explanation": "Değer: i̇nsanların önem verdiği, iyi ve doğru sayarak davranışlarına ölçü yaptığı ilke."
  },
  {
    "id": "genclik-o01",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir sınıf, dürüstlük ve dayanışmayı kararlarının temel ölçüsü olarak belirliyor. Bu ilkeler hangi genel kavram altında toplanır?",
    "options": [
      "Değer",
      "İffet",
      "Liyakat",
      "Adalet",
      "Örf ve âdet"
    ],
    "explanation": "Değer: i̇nsanların önem verdiği, iyi ve doğru sayarak davranışlarına ölçü yaptığı ilke."
  },
  {
    "id": "genclik-k02",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Bir toplumda kuşaktan kuşağa aktarılan yerleşmiş davranış ve uygulamalar” açıklaması hangi kavrama aittir?",
    "options": [
      "Örf ve âdet",
      "Erdem",
      "Ahlak",
      "Adalet",
      "Liyakat"
    ],
    "explanation": "Örf ve âdet: bir toplumda kuşaktan kuşağa aktarılan yerleşmiş davranış ve uygulamalar."
  },
  {
    "id": "genclik-o02",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir aile, bayramlarda büyüklerini ziyaret etme uygulamasını nesilden nesile sürdürüyor. Bu toplumsal aktarım hangi kavramla açıklanır?",
    "options": [
      "Örf ve âdet",
      "Ahlak",
      "İsraf",
      "Karakter",
      "Değer"
    ],
    "explanation": "Örf ve âdet: bir toplumda kuşaktan kuşağa aktarılan yerleşmiş davranış ve uygulamalar."
  },
  {
    "id": "genclik-k03",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“İyi ve kötü davranışları değerlendiren ilke ve tutumlar alanı” açıklaması hangi kavrama aittir?",
    "options": [
      "Ahlak",
      "Cimrilik",
      "Örf ve âdet",
      "İffet",
      "Liyakat"
    ],
    "explanation": "Ahlak: i̇yi ve kötü davranışları değerlendiren ilke ve tutumlar alanı."
  },
  {
    "id": "genclik-o03",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci doğru söylemekle yalan söylemek arasındaki iyi-kötü ayrımını inceliyor. Hangi alanı ele almaktadır?",
    "options": [
      "Ahlak",
      "Cömertlik",
      "Örf ve âdet",
      "Adalet",
      "Cimrilik"
    ],
    "explanation": "Ahlak: i̇yi ve kötü davranışları değerlendiren ilke ve tutumlar alanı."
  },
  {
    "id": "genclik-k04",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“İnsanı ahlaken iyi kılan üstün nitelik, fazilet” açıklaması hangi kavrama aittir?",
    "options": [
      "Erdem",
      "Cömertlik",
      "İffet",
      "Şecaat",
      "Hikmet"
    ],
    "explanation": "Erdem: i̇nsanı ahlaken iyi kılan üstün nitelik, fazilet."
  },
  {
    "id": "genclik-o04",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bilgelik, cesaret ve dürüstlük gibi ahlaken övülen özellikler hangi ortak adla nitelendirilir?",
    "options": [
      "Erdem",
      "İffet",
      "Liyakat",
      "Hikmet",
      "Cimrilik"
    ],
    "explanation": "Erdem: i̇nsanı ahlaken iyi kılan üstün nitelik, fazilet."
  },
  {
    "id": "genclik-k05",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Bireyi kendine özgü kılan düşünce, duygu, tutum ve davranış özelliklerinin bütünü” açıklaması hangi kavrama aittir?",
    "options": [
      "Kişilik",
      "Erdem",
      "İffet",
      "Adalet",
      "İsraf"
    ],
    "explanation": "Kişilik: bireyi kendine özgü kılan düşünce, duygu, tutum ve davranış özelliklerinin bütünü."
  },
  {
    "id": "genclik-o05",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir psikolog, bir genci yalnızca tek bir huyuyla değil, değerleri ve duygularıyla bir bütün olarak değerlendiriyor. İncelediği geniş kavram hangisidir?",
    "options": [
      "Kişilik",
      "Cimrilik",
      "İffet",
      "İsraf",
      "Adalet"
    ],
    "explanation": "Kişilik: bireyi kendine özgü kılan düşünce, duygu, tutum ve davranış özelliklerinin bütünü."
  },
  {
    "id": "genclik-k06",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Kişinin duygusal tepkilerinin hızı, şiddeti ve sürekliliğiyle ilgili yapısı” açıklaması hangi kavrama aittir?",
    "options": [
      "Mizaç",
      "İffet",
      "Erdem",
      "Hikmet",
      "Değer"
    ],
    "explanation": "Mizaç: kişinin duygusal tepkilerinin hızı, şiddeti ve sürekliliğiyle ilgili yapısı."
  },
  {
    "id": "genclik-o06",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Aynı olayda biri hemen heyecanlanırken diğeri daha sakin kalıyor. Duygusal tepki farklılığı hangi kavramla ilişkilidir?",
    "options": [
      "Mizaç",
      "Hikmet",
      "Adalet",
      "Cömertlik",
      "Liyakat"
    ],
    "explanation": "Mizaç: kişinin duygusal tepkilerinin hızı, şiddeti ve sürekliliğiyle ilgili yapısı."
  },
  {
    "id": "genclik-k07",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Kişinin zaman içinde benimsediği ahlaki tutum ve alışkanlıklar” açıklaması hangi kavrama aittir?",
    "options": [
      "Karakter",
      "Hikmet",
      "İffet",
      "Adalet",
      "Cömertlik"
    ],
    "explanation": "Karakter: kişinin zaman içinde benimsediği ahlaki tutum ve alışkanlıklar."
  },
  {
    "id": "genclik-o07",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Farklı duygusal yapılara sahip iki öğrenci, her koşulda sözünü tutma alışkanlığında birleşiyor. Ahlaki bakımdan ortak olan yönleri hangisidir?",
    "options": [
      "Karakter",
      "İsraf",
      "Cömertlik",
      "Adalet",
      "Örf ve âdet"
    ],
    "explanation": "Karakter: kişinin zaman içinde benimsediği ahlaki tutum ve alışkanlıklar."
  },
  {
    "id": "genclik-k08",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Hakları gözetme ve herkese hakkını verme” açıklaması hangi kavrama aittir?",
    "options": [
      "Adalet",
      "İsraf",
      "Şecaat",
      "Karakter",
      "Hikmet"
    ],
    "explanation": "Adalet: hakları gözetme ve herkese hakkını verme."
  },
  {
    "id": "genclik-o08",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir hakem yakın arkadaşının takımını kayırmadan kuralları iki tarafa da uyguluyor. Hangi temel değer öne çıkar?",
    "options": [
      "Adalet",
      "Kişilik",
      "İsraf",
      "Ahlak",
      "Cömertlik"
    ],
    "explanation": "Adalet: hakları gözetme ve herkese hakkını verme."
  },
  {
    "id": "genclik-k09",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Bilgi ve düşünceyi yerinde, doğru ve isabetli biçimde kullanma” açıklaması hangi kavrama aittir?",
    "options": [
      "Hikmet",
      "İsraf",
      "Erdem",
      "Ahlak",
      "Adalet"
    ],
    "explanation": "Hikmet: bilgi ve düşünceyi yerinde, doğru ve isabetli biçimde kullanma."
  },
  {
    "id": "genclik-o09",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci karar vermeden önce bilgileri değerlendiriyor, sonuçları düşünüyor ve en uygun yolu seçiyor. Hangi temel erdem örneklenir?",
    "options": [
      "Hikmet",
      "Karakter",
      "İsraf",
      "Kişilik",
      "Örf ve âdet"
    ],
    "explanation": "Hikmet: bilgi ve düşünceyi yerinde, doğru ve isabetli biçimde kullanma."
  },
  {
    "id": "genclik-k10",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“İstek ve arzuları aklın ve dinin ölçüleri içinde tutma” açıklaması hangi kavrama aittir?",
    "options": [
      "İffet",
      "Cimrilik",
      "Adalet",
      "Hikmet",
      "Liyakat"
    ],
    "explanation": "İffet: i̇stek ve arzuları aklın ve dinin ölçüleri içinde tutma."
  },
  {
    "id": "genclik-o10",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir genç, yapabileceği her şeyi yapmanın doğru olmadığını bilerek arzularını denetliyor. Hangi temel değerle hareket ediyor?",
    "options": [
      "İffet",
      "Mizaç",
      "İsraf",
      "Hikmet",
      "Örf ve âdet"
    ],
    "explanation": "İffet: i̇stek ve arzuları aklın ve dinin ölçüleri içinde tutma."
  },
  {
    "id": "genclik-k11",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Doğru olanı savunurken ölçülü ve bilinçli cesaret gösterme” açıklaması hangi kavrama aittir?",
    "options": [
      "Şecaat",
      "Cömertlik",
      "Kişilik",
      "Adalet",
      "Erdem"
    ],
    "explanation": "Şecaat: doğru olanı savunurken ölçülü ve bilinçli cesaret gösterme."
  },
  {
    "id": "genclik-o11",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci, haksızlığa uğrayan arkadaşını kavga çıkarmadan cesaretle savunuyor. Hangi temel erdem öne çıkar?",
    "options": [
      "Şecaat",
      "Değer",
      "Hikmet",
      "Adalet",
      "Kişilik"
    ],
    "explanation": "Şecaat: doğru olanı savunurken ölçülü ve bilinçli cesaret gösterme."
  },
  {
    "id": "genclik-k12",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Bir görevi üstlenmek için gerekli yeterlilik ve ehliyet” açıklaması hangi kavrama aittir?",
    "options": [
      "Liyakat",
      "Örf ve âdet",
      "Değer",
      "Erdem",
      "Mizaç"
    ],
    "explanation": "Liyakat: bir görevi üstlenmek için gerekli yeterlilik ve ehliyet."
  },
  {
    "id": "genclik-o12",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Okul temsilcisi, görevi akrabasına değil gerekli bilgi ve beceriye sahip kişiye veriyor. Hangi ilkeyi gözetiyor?",
    "options": [
      "Liyakat",
      "Cimrilik",
      "Ahlak",
      "Kişilik",
      "Cömertlik"
    ],
    "explanation": "Liyakat: bir görevi üstlenmek için gerekli yeterlilik ve ehliyet."
  },
  {
    "id": "genclik-k13",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“Kaynakları ihtiyaç ve ölçüyü aşacak biçimde tüketme” açıklaması hangi kavrama aittir?",
    "options": [
      "İsraf",
      "Mizaç",
      "İffet",
      "Değer",
      "Örf ve âdet"
    ],
    "explanation": "İsraf: kaynakları ihtiyaç ve ölçüyü aşacak biçimde tüketme."
  },
  {
    "id": "genclik-o13",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci yiyebileceğinden çok daha fazla yemek alıp fazlasını çöpe atıyor. Hangi davranış ortaya çıkmaktadır?",
    "options": [
      "İsraf",
      "Mizaç",
      "Şecaat",
      "Cömertlik",
      "Hikmet"
    ],
    "explanation": "İsraf: kaynakları ihtiyaç ve ölçüyü aşacak biçimde tüketme."
  },
  {
    "id": "genclik-k14",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“İmkânı olduğu hâlde gerekli ve yerinde harcamadan ya da paylaşmadan kaçınma” açıklaması hangi kavrama aittir?",
    "options": [
      "Cimrilik",
      "Şecaat",
      "Hikmet",
      "Örf ve âdet",
      "İffet"
    ],
    "explanation": "Cimrilik: i̇mkânı olduğu hâlde gerekli ve yerinde harcamadan ya da paylaşmadan kaçınma."
  },
  {
    "id": "genclik-o14",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir kişi maddi imkânı yeterli olduğu hâlde yerine getirmesi gereken yardımı sırf malı eksilmesin diye yapmıyor. Hangi tutum söz konusudur?",
    "options": [
      "Cimrilik",
      "Örf ve âdet",
      "Kişilik",
      "Mizaç",
      "Ahlak"
    ],
    "explanation": "Cimrilik: i̇mkânı olduğu hâlde gerekli ve yerinde harcamadan ya da paylaşmadan kaçınma."
  },
  {
    "id": "genclik-k15",
    "topic": "genclik",
    "kind": "Kavram bilgisi",
    "text": "“İmkânlarını yerinde ve gönüllü biçimde başkalarıyla paylaşma” açıklaması hangi kavrama aittir?",
    "options": [
      "Cömertlik",
      "Erdem",
      "İsraf",
      "Cimrilik",
      "Kişilik"
    ],
    "explanation": "Cömertlik: i̇mkânlarını yerinde ve gönüllü biçimde başkalarıyla paylaşma."
  },
  {
    "id": "genclik-o15",
    "topic": "genclik",
    "kind": "Örnekten kavrama",
    "text": "Bir genç, kendi ihtiyaçlarını da gözeterek harçlığından düzenli yardım ayırıyor. Ölçülü paylaşımı hangi değerle açıklanır?",
    "options": [
      "Cömertlik",
      "Şecaat",
      "İffet",
      "Mizaç",
      "Ahlak"
    ],
    "explanation": "Cömertlik: i̇mkânlarını yerinde ve gönüllü biçimde başkalarıyla paylaşma."
  },
  {
    "id": "genclik-p01",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Bir gencin öfkelenmesi çabuk olsa da öfkeliyken hakaret etmemeyi alışkanlık hâline getirmesi hangi iki kavramın farklılığını gösterir?",
    "options": [
      "Mizaç ve karakter",
      "İsraf ve cimrilik",
      "Örf ve âdet",
      "Hikmet ve bilgi kaynağı",
      "Kültür ve medeniyet"
    ],
    "explanation": "Çabuk öfkelenme duygusal tepki yapısıyla, hakaret etmemeyi benimseme ise ahlaki tutumla ilgilidir. Mizaç, kişinin ahlaki seçimlerini zorunlu olarak belirlemez."
  },
  {
    "id": "genclik-p02",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Aşağıdakilerden hangisi adaletin her durumda herkese aynı miktarı vermek anlamına gelmediğini gösterir?",
    "options": [
      "Desteği öğrencilerin ihtiyaçları ve hakları gözetilerek dağıtmak",
      "Yardımı yalnızca arkadaşlara ayırmak",
      "Hak sahibini dış görünüşüne göre seçmek",
      "Karar verirken kuralları gizlemek",
      "Yakınlarına ayrıcalık tanımak"
    ],
    "explanation": "Adalet, hakları ve ilgili koşulları gözetmektir. Farklı ihtiyaçlar karşısında uygun desteğin değişmesi adaletle bağdaşabilir."
  },
  {
    "id": "genclik-p03",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Şecaat erdemini hem korkaklıktan hem de düşüncesizce tehlikeye atılmaktan ayıran özellik hangisidir?",
    "options": [
      "Cesaretin akıl ve ölçüyle birleşmesi",
      "Her tartışmada güç kullanılması",
      "Tehlikenin her koşulda aranması",
      "Haksızlık karşısında sürekli susulması",
      "Sonuçların hiç düşünülmemesi"
    ],
    "explanation": "Şecaat, haklı olanı savunan ölçülü cesarettir; düşüncesiz saldırganlık veya gereksiz risk alma değildir."
  },
  {
    "id": "genclik-p04",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "İffet kavramıyla ilgili hangi açıklama daha kapsayıcıdır?",
    "options": [
      "İnsanın isteklerini ve davranışlarını ahlaki ölçüler içinde yönetmesidir.",
      "Yalnızca belli bir cinsiyetin sorumluluğudur.",
      "Sadece dış görünüşle ilgilidir.",
      "Her isteğin hemen karşılanmasıdır.",
      "İnsanın hiçbir arzu taşımamasıdır."
    ],
    "explanation": "İffet tüm insanlarla ilgilidir; arzuları yok etmekten çok onları aklın ve dinin ölçüleri içinde denetlemeyi anlatır."
  },
  {
    "id": "genclik-p05",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Bir öğrenci çok bilgi ezberliyor fakat hangi bilgiyi nerede kullanacağını düşünmüyor. Bilgisini doğru kararlara dönüştürebilmesi için hangi erdemi geliştirmesi beklenir?",
    "options": [
      "Hikmet",
      "İsraf",
      "Cimrilik",
      "Riya",
      "Taassup"
    ],
    "explanation": "Hikmet, bilgi sahibi olmanın yanında bilgiyi doğru yerde ve isabetli biçimde kullanmayı gerektirir."
  },
  {
    "id": "genclik-p06",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Din ile örf ve âdet ilişkisi için hangi değerlendirme uygundur?",
    "options": [
      "Yerleşmiş uygulamalar ahlaki ve dinî ilkeler bakımından değerlendirilebilir.",
      "Eski olan her uygulama zorunlu olarak doğrudur.",
      "Gelenekler hiçbir koşulda değişmez.",
      "Toplumda yaygın olan her şey dinin emridir.",
      "Bütün gelenekler koşulsuz reddedilmelidir."
    ],
    "explanation": "Örf ve âdetler toplumsal birikimin parçasıdır. Dinin ve ahlakın temel ilkeleriyle uyumu değerlendirilir; yaygınlık tek başına doğruluk ölçüsü olmaz."
  },
  {
    "id": "genclik-p07",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "İsrâ suresinin 23–29. ayetlerindeki ilkeler düşünüldüğünde hangi davranış bu öğütlerle uyumludur?",
    "options": [
      "Anne babaya saygılı davranıp ihtiyaç sahipleriyle ölçülü paylaşmak",
      "Anne babayı kırıcı sözlerle küçümsemek",
      "Bütün imkânları gösteriş için tüketmek",
      "İmkânı varken paylaşmaktan kaçınmak",
      "Yardıma ihtiyacı olanları azarlamak"
    ],
    "explanation": "Bu ayetlerde anne babaya iyi davranma, yakınların ve ihtiyaç sahiplerinin hakkını gözetme, israf ve cimrilikten uzak durma gibi ilkeler yer alır."
  },
  {
    "id": "genclik-p08",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "İmkânlarını ne gereksiz yere tüketen ne de paylaşmaktan kaçınan bir kişi, hangi iki uç tutum arasında ölçülü davranmaktadır?",
    "options": [
      "İsraf ve cimrilik",
      "Adalet ve hikmet",
      "İffet ve şecaat",
      "Dürüstlük ve güven",
      "Saygı ve merhamet"
    ],
    "explanation": "Ölçülü harcama ve cömertlik, savurganlığa düşmeden paylaşmayı; gerekli harcamaları da cimrilik nedeniyle engellememeyi gerektirir."
  },
  {
    "id": "genclik-p09",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Bir gencin dürüstlüğü yalnızca konuşmalarında övmesi, ancak çıkarı zedelendiğinde yalan söylemesi hangi açıdan eksiktir?",
    "options": [
      "Değeri davranışa dönüştürme",
      "Bilgiyi duyularla edinme",
      "Coğrafi bölgeyi tanıma",
      "Mizaç farklılığını gözleme",
      "İbadetin vaktini öğrenme"
    ],
    "explanation": "Değerlerin benimsenmesi davranışlarla görünür olur. Dürüstlük, sadece yarar sağladığında değil zor durumda da gözetilmelidir."
  },
  {
    "id": "genclik-p10",
    "topic": "genclik",
    "kind": "Pekiştirme",
    "text": "Bir görev için seçilen kişi yetenekli olsa bile seçim sürecinde diğer adayların haklarının ihlal edilmesi hangi iki ilkenin birlikte gözetilmesi gerektiğini gösterir?",
    "options": [
      "Liyakat ve adalet",
      "İsraf ve riya",
      "Cimrilik ve gösteriş",
      "Zan ve taklit",
      "Mizaç ve coğrafya"
    ],
    "explanation": "Liyakat görev için yeterliliği, adalet ise hakların korunmasını vurgular. İyi bir seçim süreci her iki ilkeyi de gözetir."
  },
  {
    "id": "gonul-k01",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Bir toplumun tarih içinde oluşturup aktardığı maddi ve manevi birikim” açıklaması hangi kavrama aittir?",
    "options": [
      "Kültür",
      "Endülüs",
      "Maveraünnehir",
      "Ümmet",
      "Kudüs"
    ],
    "explanation": "Kültür: bir toplumun tarih içinde oluşturup aktardığı maddi ve manevi birikim."
  },
  {
    "id": "gonul-o01",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Bir araştırmacı bir toplumun dilini, yemeklerini, geleneklerini ve sanatını birlikte inceliyor. Hangi birikimi araştırıyor?",
    "options": [
      "Kültür",
      "Ümmet",
      "Türkistan",
      "Medine",
      "Horasan"
    ],
    "explanation": "Kültür: bir toplumun tarih içinde oluşturup aktardığı maddi ve manevi birikim."
  },
  {
    "id": "gonul-k02",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Farklı toplumların katkısıyla gelişen ortak düşünce, kurum ve hayat birikimi” açıklaması hangi kavrama aittir?",
    "options": [
      "Medeniyet",
      "Ümmet",
      "Hicaz",
      "Kudüs",
      "Türkistan"
    ],
    "explanation": "Medeniyet: farklı toplumların katkısıyla gelişen ortak düşünce, kurum ve hayat birikimi."
  },
  {
    "id": "gonul-o02",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Bir sergi, birçok milletin katkı yaptığı bilim, eğitim ve hukuk kurumlarını ortak bir çerçevede ele alıyor. Bu geniş çerçeve hangi kavramdır?",
    "options": [
      "Medeniyet",
      "Maveraünnehir",
      "Türkistan",
      "Tevhit",
      "Balkanlar"
    ],
    "explanation": "Medeniyet: farklı toplumların katkısıyla gelişen ortak düşünce, kurum ve hayat birikimi."
  },
  {
    "id": "gonul-k03",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“İslam’ın rehberliğinde farklı toplumların oluşturduğu maddi ve manevi birikim” açıklaması hangi kavrama aittir?",
    "options": [
      "İslam medeniyeti",
      "Tevhit",
      "Ümmet",
      "Takva",
      "Hicaz"
    ],
    "explanation": "İslam medeniyeti: i̇slam’ın rehberliğinde farklı toplumların oluşturduğu maddi ve manevi birikim."
  },
  {
    "id": "gonul-o03",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Müslüman toplumların farklı coğrafyalarda ortaya koyduğu mimari, ilim, sanat ve kurumlar aynı başlıkta inceleniyor. Bu başlık hangisidir?",
    "options": [
      "İslam medeniyeti",
      "Medine",
      "Balkanlar",
      "Maveraünnehir",
      "Kudüs"
    ],
    "explanation": "İslam medeniyeti: i̇slam’ın rehberliğinde farklı toplumların oluşturduğu maddi ve manevi birikim."
  },
  {
    "id": "gonul-k04",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“İslam medeniyetinin inanç temelindeki Allah’ın birliği ilkesi” açıklaması hangi kavrama aittir?",
    "options": [
      "Tevhit",
      "Endülüs",
      "Maveraünnehir",
      "Hicaz",
      "Medeniyet"
    ],
    "explanation": "Tevhit: i̇slam medeniyetinin inanç temelindeki Allah’ın birliği ilkesi."
  },
  {
    "id": "gonul-o04",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "İslam medeniyetinin merkezinde Allah’a ortak koşmadan yönelme düşüncesi yer alır. Bu düşüncenin adı nedir?",
    "options": [
      "Tevhit",
      "Hicaz",
      "Maveraünnehir",
      "Medine",
      "İslam medeniyeti"
    ],
    "explanation": "Tevhit: i̇slam medeniyetinin inanç temelindeki Allah’ın birliği ilkesi."
  },
  {
    "id": "gonul-k05",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Aynı peygamberin getirdiği dine bağlı olan inanç topluluğu” açıklaması hangi kavrama aittir?",
    "options": [
      "Ümmet",
      "Medine",
      "Tevhit",
      "Balkanlar",
      "Hicaz"
    ],
    "explanation": "Ümmet: aynı peygamberin getirdiği dine bağlı olan inanç topluluğu."
  },
  {
    "id": "gonul-o05",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Farklı diller konuşan Müslümanların aynı peygambere bağlılık etrafında bir topluluk oluşturması hangi kavramla anlatılır?",
    "options": [
      "Ümmet",
      "Takva",
      "Kudüs",
      "Medine",
      "Horasan"
    ],
    "explanation": "Ümmet: aynı peygamberin getirdiği dine bağlı olan inanç topluluğu."
  },
  {
    "id": "gonul-k06",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Mekke ve Medine’nin bulunduğu tarihî bölge” açıklaması hangi kavrama aittir?",
    "options": [
      "Hicaz",
      "İslam medeniyeti",
      "Ümmet",
      "Türkistan",
      "Kudüs"
    ],
    "explanation": "Hicaz: mekke ve Medine’nin bulunduğu tarihî bölge."
  },
  {
    "id": "gonul-o06",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Bir ziyaret programı Mekke ve Medine’yi aynı tarihî bölge başlığı altında topluyor. Hangi bölge söz konusudur?",
    "options": [
      "Hicaz",
      "Türkistan",
      "Endülüs",
      "Kudüs",
      "Anadolu"
    ],
    "explanation": "Hicaz: mekke ve Medine’nin bulunduğu tarihî bölge."
  },
  {
    "id": "gonul-k07",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Hz. Muhammed’in hicret ettiği, eski adı Yesrib olan şehir” açıklaması hangi kavrama aittir?",
    "options": [
      "Medine",
      "İslam medeniyeti",
      "Türkistan",
      "Kudüs",
      "Anadolu"
    ],
    "explanation": "Medine: hz. Muhammed’in hicret ettiği, eski adı Yesrib olan şehir."
  },
  {
    "id": "gonul-o07",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Hicret sonrasında Mescid-i Nebevî’nin inşa edildiği şehir hangi seçenektedir?",
    "options": [
      "Medine",
      "Türkistan",
      "Kudüs",
      "Takva",
      "Ümmet"
    ],
    "explanation": "Medine: hz. Muhammed’in hicret ettiği, eski adı Yesrib olan şehir."
  },
  {
    "id": "gonul-k08",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Mescid-i Aksâ’nın bulunduğu tarihî şehir” açıklaması hangi kavrama aittir?",
    "options": [
      "Kudüs",
      "Balkanlar",
      "Ümmet",
      "Medeniyet",
      "Hicaz"
    ],
    "explanation": "Kudüs: mescid-i Aksâ’nın bulunduğu tarihî şehir."
  },
  {
    "id": "gonul-o08",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci Mescid-i Aksâ’yı ziyaret etmek için hangi şehri araştırmalıdır?",
    "options": [
      "Kudüs",
      "Endülüs",
      "Medine",
      "Maveraünnehir",
      "Balkanlar"
    ],
    "explanation": "Kudüs: mescid-i Aksâ’nın bulunduğu tarihî şehir."
  },
  {
    "id": "gonul-k09",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“İber Yarımadası’ndaki Müslüman varlığı ve mirası için kullanılan tarihî ad” açıklaması hangi kavrama aittir?",
    "options": [
      "Endülüs",
      "Balkanlar",
      "Hicaz",
      "Kültür",
      "Takva"
    ],
    "explanation": "Endülüs: i̇ber Yarımadası’ndaki Müslüman varlığı ve mirası için kullanılan tarihî ad."
  },
  {
    "id": "gonul-o09",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Kurtuba ve Gırnata’daki İslam medeniyeti izlerini inceleyen öğrenci hangi coğrafyayı çalışmaktadır?",
    "options": [
      "Endülüs",
      "Tevhit",
      "Kudüs",
      "Medeniyet",
      "Hicaz"
    ],
    "explanation": "Endülüs: i̇ber Yarımadası’ndaki Müslüman varlığı ve mirası için kullanılan tarihî ad."
  },
  {
    "id": "gonul-k10",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Orta Asya’da Türk topluluklarının yaşadığı geniş tarihî coğrafya” açıklaması hangi kavrama aittir?",
    "options": [
      "Türkistan",
      "Anadolu",
      "Takva",
      "Balkanlar",
      "Ümmet"
    ],
    "explanation": "Türkistan: orta Asya’da Türk topluluklarının yaşadığı geniş tarihî coğrafya."
  },
  {
    "id": "gonul-o10",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Hoca Ahmed Yesevî’nin yaşadığı Yesi şehri ve çevresinin içinde yer aldığı geniş tarihî Türk yurdu hangi adla anılır?",
    "options": [
      "Türkistan",
      "İslam medeniyeti",
      "Balkanlar",
      "Takva",
      "Kudüs"
    ],
    "explanation": "Türkistan: orta Asya’da Türk topluluklarının yaşadığı geniş tarihî coğrafya."
  },
  {
    "id": "gonul-k11",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Ceyhun ile Seyhun nehirleri arasındaki tarihî bölge” açıklaması hangi kavrama aittir?",
    "options": [
      "Maveraünnehir",
      "Endülüs",
      "Tevhit",
      "Ümmet",
      "Kültür"
    ],
    "explanation": "Maveraünnehir: ceyhun ile Seyhun nehirleri arasındaki tarihî bölge."
  },
  {
    "id": "gonul-o11",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Bir tarih atlası Ceyhun ve Seyhun arasındaki alanı özel bir adla gösteriyor. Bu ad hangisidir?",
    "options": [
      "Maveraünnehir",
      "Kudüs",
      "İslam medeniyeti",
      "Medine",
      "Balkanlar"
    ],
    "explanation": "Maveraünnehir: ceyhun ile Seyhun nehirleri arasındaki tarihî bölge."
  },
  {
    "id": "gonul-k12",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Nişabur, Merv ve Herat gibi merkezlerle anılan tarihî bölge” açıklaması hangi kavrama aittir?",
    "options": [
      "Horasan",
      "Medine",
      "Endülüs",
      "Medeniyet",
      "Hicaz"
    ],
    "explanation": "Horasan: nişabur, Merv ve Herat gibi merkezlerle anılan tarihî bölge."
  },
  {
    "id": "gonul-o12",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Anadolu’ya gelen bazı erenlerin çıkış yurdu olarak anlatılan, Nişabur ve Merv gibi merkezleri kapsayan tarihî bölge hangisidir?",
    "options": [
      "Horasan",
      "Medine",
      "Medeniyet",
      "Kültür",
      "Tevhit"
    ],
    "explanation": "Horasan: nişabur, Merv ve Herat gibi merkezlerle anılan tarihî bölge."
  },
  {
    "id": "gonul-k13",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Konya, Sivas ve Kayseri gibi Selçuklu mirası taşıyan şehirlerin yer aldığı coğrafya” açıklaması hangi kavrama aittir?",
    "options": [
      "Anadolu",
      "Takva",
      "Tevhit",
      "Horasan",
      "Endülüs"
    ],
    "explanation": "Anadolu: konya, Sivas ve Kayseri gibi Selçuklu mirası taşıyan şehirlerin yer aldığı coğrafya."
  },
  {
    "id": "gonul-o13",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Bir öğrenci Konya’daki Selçuklu eserlerini ve Mevlânâ’nın yaşadığı çevreyi araştırıyor. Hangi coğrafyayı incelemektedir?",
    "options": [
      "Anadolu",
      "Medine",
      "Tevhit",
      "Kudüs",
      "İslam medeniyeti"
    ],
    "explanation": "Anadolu: konya, Sivas ve Kayseri gibi Selçuklu mirası taşıyan şehirlerin yer aldığı coğrafya."
  },
  {
    "id": "gonul-k14",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Bosna-Hersek ve Arnavutluk gibi ülkelerin bulunduğu Güneydoğu Avrupa bölgesi” açıklaması hangi kavrama aittir?",
    "options": [
      "Balkanlar",
      "Kültür",
      "Medine",
      "Takva",
      "Medeniyet"
    ],
    "explanation": "Balkanlar: bosna-Hersek ve Arnavutluk gibi ülkelerin bulunduğu Güneydoğu Avrupa bölgesi."
  },
  {
    "id": "gonul-o14",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Saraybosna ve Mostar’daki Osmanlı mirasını araştıran bir grup hangi bölgeye odaklanmaktadır?",
    "options": [
      "Balkanlar",
      "Ümmet",
      "İslam medeniyeti",
      "Kudüs",
      "Kültür"
    ],
    "explanation": "Balkanlar: bosna-Hersek ve Arnavutluk gibi ülkelerin bulunduğu Güneydoğu Avrupa bölgesi."
  },
  {
    "id": "gonul-k15",
    "topic": "gonul",
    "kind": "Kavram bilgisi",
    "text": "“Allah’a karşı sorumluluk bilinciyle davranıp kötülükten sakınma” açıklaması hangi kavrama aittir?",
    "options": [
      "Takva",
      "Ümmet",
      "Kültür",
      "Hicaz",
      "Balkanlar"
    ],
    "explanation": "Takva: allah’a karşı sorumluluk bilinciyle davranıp kötülükten sakınma."
  },
  {
    "id": "gonul-o15",
    "topic": "gonul",
    "kind": "Örnekten kavrama",
    "text": "Hucurât suresi 13. ayette insanın Allah katındaki değerinin soyuna değil sorumluluk bilincine bağlı olduğu belirtilir. Bu ölçü hangi kavramdır?",
    "options": [
      "Takva",
      "Endülüs",
      "Kültür",
      "Maveraünnehir",
      "Kudüs"
    ],
    "explanation": "Takva: allah’a karşı sorumluluk bilinciyle davranıp kötülükten sakınma."
  },
  {
    "id": "gonul-p01",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Kültür ve medeniyet ilişkisini en uygun açıklayan ifade hangisidir?",
    "options": [
      "Farklı kültürlerin katkıları ortak bir medeniyet birikimini zenginleştirebilir.",
      "Bir medeniyette yalnızca tek dil bulunabilir.",
      "Kültür yalnızca binalardan oluşur.",
      "Medeniyet toplumsal kurumları kapsamaz.",
      "Farklı kültürlerin etkileşmesi mümkün değildir."
    ],
    "explanation": "Kültürler toplumların birikimini yansıtır; farklı toplumların bilim, sanat ve kurumlara katkıları ortak medeniyet içinde buluşabilir."
  },
  {
    "id": "gonul-p02",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "İslam medeniyetinde Arapça, Farsça ve Türkçe eserlerin bulunması hangi yargıyı destekler?",
    "options": [
      "Medeniyetin farklı dil ve toplumların katkısıyla geliştiğini",
      "Bütün toplumların aynı dili konuşmak zorunda olduğunu",
      "Medeniyetin yalnızca bir millete ait olduğunu",
      "Dil farklılıklarının her zaman çatışma doğurduğunu",
      "Bilimsel üretimin tek şehirle sınırlı olduğunu"
    ],
    "explanation": "Bu dillerdeki eserler, ortak inanç ve değerler etrafında farklı toplumların ilim ve edebiyat üretimine katkısını gösterir."
  },
  {
    "id": "gonul-p03",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Hucurât suresi 13. ayette insanların farklı halklar ve kabileler olarak yaratılması hangi amaçla ilişkilendirilir?",
    "options": [
      "Birbirlerini tanımaları",
      "Soylarına göre üstünlük kurmaları",
      "Her toplumun diğerinden kopması",
      "Dış görünüşe göre değer kazanmaları",
      "Mal varlığına göre sınıflanmaları"
    ],
    "explanation": "Ayette farklılıkların tanışmaya vesile olduğu belirtilir; Allah katındaki değer ölçüsü soy veya servet değil takvadır."
  },
  {
    "id": "gonul-p04",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Hucurât suresi 13. ayet bağlamında hangi üstünlük iddiası eleştirilir?",
    "options": [
      "Bir insanın yalnızca soyundan dolayı daha değerli sayılması",
      "İnsanın sorumluluğunu gözetmesi",
      "Farklı toplumların birbirini tanıması",
      "İnsanların ortak kökeninin hatırlanması",
      "Ahlaki duyarlılığın önemsenmesi"
    ],
    "explanation": "Ayette insanların ortak kökeni hatırlatılır ve değer ölçüsü takva olarak açıklanır. Soy, dil veya ırk tek başına üstünlük sebebi değildir."
  },
  {
    "id": "gonul-p05",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Aşağıdaki şehir ve tarihî coğrafya eşleştirmelerinden hangisi doğrudur?",
    "options": [
      "Kurtuba — Endülüs",
      "Mekke — Balkanlar",
      "Saraybosna — Hicaz",
      "Konya — İber Yarımadası",
      "Medine — Anadolu"
    ],
    "explanation": "Kurtuba, İber Yarımadası’ndaki Endülüs medeniyetinin önemli merkezlerindendir. Mekke ve Medine Hicaz’da, Konya Anadolu’da, Saraybosna Balkanlar’dadır."
  },
  {
    "id": "gonul-p06",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Hicaz ile Medine arasındaki ilişki hangi ifadeyle doğru açıklanır?",
    "options": [
      "Hicaz bir bölge, Medine bu bölgedeki şehirlerden biridir.",
      "İkisi aynı şehrin farklı adlarıdır.",
      "Medine bir kıta, Hicaz bir ülkedir.",
      "Hicaz yalnızca bir kişinin adıdır.",
      "İkisi de Endülüs’te bulunur."
    ],
    "explanation": "Hicaz, Mekke ve Medine’yi içeren tarihî bölgedir. Bölge adı ile şehir adı birbirine karıştırılmamalıdır."
  },
  {
    "id": "gonul-p07",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Horasan, Anadolu ve Rumeli erenlerinin farklı bölgelerde insanlara rehberlik etmesi en çok hangi süreci örnekler?",
    "options": [
      "Dinî ve ahlaki değerlerin coğrafyalar arasında aktarılmasını",
      "Bütün yerel dillerin zorunlu olarak ortadan kalkmasını",
      "Bilimin yalnızca tek bölgede gelişmesini",
      "Kültürler arasındaki bütün bağların kesilmesini",
      "Medeniyetin sadece askerî olaylardan oluşmasını"
    ],
    "explanation": "Erenlerin irşat, eğitim ve örnek yaşayışları ortak değerlerin farklı coğrafyalara taşınmasına katkı sağlamıştır."
  },
  {
    "id": "gonul-p08",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Bir öğrenci ortak İslam medeniyeti içindeki camilerin farklı bölgelerde değişik mimari özellikler taşıdığını görüyor. Bundan hangi sonuca ulaşabilir?",
    "options": [
      "Ortak değerler yerel kültürlerle farklı biçimlerde ifade edilebilir.",
      "İnanç ortaklığı bütün mimari biçimleri aynı yapar.",
      "Mimari hiçbir kültürel iz taşımaz.",
      "Farklı yapılar ortak bir medeniyette yer alamaz.",
      "Yerel malzeme ve sanat birikimi önemsizdir."
    ],
    "explanation": "Ortak işlev ve değerler korunurken yerel malzeme, sanat ve gelenekler mimaride çeşitlilik oluşturabilir."
  },
  {
    "id": "gonul-p09",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Ceyhun ile Seyhun arasındaki bölgeyi inceleyen öğrenci Türkistan ile Maveraünnehir kavramlarını nasıl ilişkilendirmelidir?",
    "options": [
      "Maveraünnehir, daha geniş Türkistan coğrafyası içinde anılan tarihî bir bölgedir.",
      "İki ad da yalnızca Mekke şehrini belirtir.",
      "Türkistan Avrupa’da, Maveraünnehir Amerika’dadır.",
      "Maveraünnehir bir akarsu, Türkistan bir kişi adıdır.",
      "Bu kavramların tarihî coğrafyayla ilgisi yoktur."
    ],
    "explanation": "Türkistan daha geniş bir tarihî coğrafyayı anlatır. Maveraünnehir ise özellikle Ceyhun ve Seyhun arasındaki alanın adıdır."
  },
  {
    "id": "gonul-p10",
    "topic": "gonul",
    "kind": "Pekiştirme",
    "text": "Farklı milletlerden Müslümanların aynı inanç topluluğunda yer almasıyla ilgili hangi yargı ümmet kavramına uygundur?",
    "options": [
      "Ortak dinî aidiyet farklı dil ve kültürlerin varlığıyla bağdaşabilir.",
      "Ümmet olmak aynı soydan gelmeyi gerektirir.",
      "Ümmet yalnızca bir şehrin sakinleridir.",
      "Ümmet üyeliğinin ölçüsü servettir.",
      "Ümmet olmak bütün yerel gelenekleri aynılaştırır."
    ],
    "explanation": "Ümmet ortak peygamber ve inanç etrafındaki topluluğu anlatır; ortak bir soy, dil veya milliyet şartı değildir."
  }
];
