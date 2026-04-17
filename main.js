const NAMES = [
    { ar: "ٱللَّه",       latin: "Allah",        meaning: "Yang Maha Esa",            detail: "Nama yang paling agung. Allah adalah satu-satunya Dzat yang berhak disembah, Pencipta segala sesuatu, tidak ada sekutu bagi-Nya." },
    { ar: "ٱلرَّحْمَٰن",  latin: "Ar-Rahman",    meaning: "Yang Maha Pengasih",        detail: "Sifat kasih sayang Allah yang meliputi seluruh makhluk di dunia tanpa terkecuali — Muslim maupun non-Muslim, manusia maupun hewan." },
    { ar: "ٱلرَّحِيم",    latin: "Ar-Rahim",     meaning: "Yang Maha Penyayang",       detail: "Sifat kasih sayang Allah yang khusus diberikan kepada orang-orang beriman di akhirat." },
    { ar: "ٱلْمَلِك",     latin: "Al-Malik",     meaning: "Yang Maha Merajai",         detail: "Allah adalah Raja segala raja, pemilik kerajaan langit dan bumi, tidak ada kekuasaan di atas kekuasaan-Nya." },
    { ar: "ٱلْقُدُّوس",   latin: "Al-Quddus",    meaning: "Yang Maha Suci",            detail: "Allah Maha Suci dari segala kekurangan, kelemahan, dan sifat yang tidak layak bagi-Nya." },
    { ar: "ٱلسَّلَام",    latin: "As-Salam",     meaning: "Yang Maha Memberi Kesejahteraan", detail: "Allah adalah sumber keselamatan dan kesejahteraan. Surga pun disebut Darus-Salam (Negeri Kedamaian)." },
    { ar: "ٱلْمُؤْمِن",   latin: "Al-Mu'min",    meaning: "Yang Maha Memberi Keamanan", detail: "Allah memberikan rasa aman kepada hamba-Nya yang beriman, menjaga mereka dari rasa takut yang hakiki." },
    { ar: "ٱلْمُهَيْمِن", latin: "Al-Muhaimin",  meaning: "Yang Maha Memelihara",      detail: "Allah mengawasi, menjaga, dan memelihara seluruh makhluk dengan ilmu dan kekuasaan-Nya yang sempurna." },
    { ar: "ٱلْعَزِيز",    latin: "Al-'Aziz",     meaning: "Yang Maha Perkasa",         detail: "Allah Maha Perkasa, tidak ada yang dapat mengalahkan-Nya atau menyamai-Nya dalam kemuliaan dan kekuatan." },
    { ar: "ٱلْجَبَّار",   latin: "Al-Jabbar",    meaning: "Yang Memiliki Mutlak Kegagahan", detail: "Allah Maha Berkehendak, memaksakan kehendak-Nya. Dialah yang memperbaiki keadaan hamba yang patah dan lemah." },
    { ar: "ٱلْمُتَكَبِّر", latin: "Al-Mutakabbir", meaning: "Yang Maha Megah",          detail: "Hanya Allah yang berhak menyandang keagungan dan kebesaran yang sejati. Takabur pada makhluk tercela, tapi pada Allah adalah kesempurnaan." },
    { ar: "ٱلْخَالِق",    latin: "Al-Khaliq",    meaning: "Yang Maha Pencipta",        detail: "Allah menciptakan segala sesuatu dari tiada. Setiap partikel di alam semesta ini adalah karya ciptaan-Nya." },
    { ar: "ٱلْبَارِئ",    latin: "Al-Bari'",     meaning: "Yang Maha Melepaskan",      detail: "Allah menciptakan makhluk bebas dari contoh sebelumnya, membedakan satu dengan yang lain dengan sempurna." },
    { ar: "ٱلْمُصَوِّر",  latin: "Al-Musawwir",  meaning: "Yang Maha Membentuk Rupa",  detail: "Allah membentuk setiap makhluk dengan rupa yang unik dan berbeda-beda sesuai kehendak-Nya yang sempurna." },
    { ar: "ٱلْغَفَّار",   latin: "Al-Ghaffar",   meaning: "Yang Maha Pengampun",       detail: "Allah senantiasa mengampuni dosa hamba yang bertobat, berulang kali dan tidak pernah bosan mengampuni." },
    { ar: "ٱلْقَهَّار",   latin: "Al-Qahhar",    meaning: "Yang Maha Memaksa",         detail: "Allah berkuasa atas segala sesuatu dan memaksa semua makhluk tunduk kepada hukum dan kehendak-Nya." },
    { ar: "ٱلْوَهَّاب",   latin: "Al-Wahhab",    meaning: "Yang Maha Pemberi Karunia", detail: "Allah memberi dengan melimpah tanpa batas dan tanpa mengharap imbalan. Setiap nikmat adalah pemberian-Nya." },
    { ar: "ٱلرَّزَّاق",   latin: "Ar-Razzaq",    meaning: "Yang Maha Pemberi Rezeki",  detail: "Allah adalah satu-satunya yang menjamin dan memberikan rezeki kepada setiap makhluk di langit dan di bumi." },
    { ar: "ٱلْفَتَّاح",   latin: "Al-Fattah",    meaning: "Yang Maha Membuka Rahmat",  detail: "Allah membuka pintu rezeki, rahmat, dan kemenangan. Dialah yang memberi jalan keluar dari setiap kesulitan." },
    { ar: "ٱلْعَلِيم",    latin: "Al-'Alim",     meaning: "Yang Maha Mengetahui",      detail: "Ilmu Allah meliputi segala sesuatu — yang tersembunyi maupun yang nyata, yang telah terjadi maupun yang akan terjadi." },
    { ar: "ٱلْقَابِض",    latin: "Al-Qabidh",    meaning: "Yang Maha Menyempitkan",    detail: "Allah menyempitkan rezeki atau rahmat kepada siapa yang dikehendaki-Nya berdasarkan hikmah-Nya yang sempurna." },
    { ar: "ٱلْبَاسِط",    latin: "Al-Basith",    meaning: "Yang Maha Melapangkan",     detail: "Allah melapangkan rezeki dan rahmat kepada siapa yang dikehendaki-Nya. Qabidh dan Basith berpasangan dalam hikmah." },
    { ar: "ٱلْخَافِض",    latin: "Al-Khafidh",   meaning: "Yang Maha Merendahkan",     detail: "Allah merendahkan derajat orang-orang yang zalim dan sombong sesuai dengan keadilan-Nya." },
    { ar: "ٱلرَّافِع",    latin: "Ar-Rafi'",     meaning: "Yang Maha Meninggikan",     detail: "Allah meninggikan derajat orang-orang beriman dan beramal saleh di dunia maupun di akhirat." },
    { ar: "ٱلْمُعِزّ",    latin: "Al-Mu'izz",    meaning: "Yang Maha Memuliakan",      detail: "Allah memuliakan siapa yang dikehendaki-Nya. Kemuliaan sejati hanya datang dari Allah, bukan dari makhluk." },
    { ar: "ٱلْمُذِل",     latin: "Al-Mudzill",   meaning: "Yang Maha Menghinakan",     detail: "Allah menghinakan orang-orang kafir dan para pembangkang. Kehinaan dari Allah adalah balasan yang setimpal." },
    { ar: "ٱلسَّمِيع",    latin: "As-Sami'",     meaning: "Yang Maha Mendengar",       detail: "Allah mendengar setiap suara, bisikan hati, dan doa yang terucap maupun yang tersembunyi dalam sanubari." },
    { ar: "ٱلْبَصِير",    latin: "Al-Bashir",    meaning: "Yang Maha Melihat",         detail: "Pandangan Allah meliputi segala sesuatu, yang tersembunyi maupun yang tampak, di daratan dan lautan terdalam." },
    { ar: "ٱلْحَكَم",     latin: "Al-Hakam",     meaning: "Yang Maha Menetapkan Hukum", detail: "Allah adalah Hakim yang Maha Adil. Keputusan-Nya tidak pernah keliru dan tidak dapat digugat." },
    { ar: "ٱلْعَدْل",     latin: "Al-'Adl",      meaning: "Yang Maha Adil",            detail: "Keadilan Allah sempurna dan mutlak. Setiap jiwa akan mendapat balasan yang sesuai, tidak lebih tidak kurang." },
    { ar: "ٱللَّطِيف",    latin: "Al-Lathif",    meaning: "Yang Maha Lembut",          detail: "Allah Maha Halus dalam memperhatikan hamba-Nya. Sering Dia memberikan pertolongan melalui cara-cara yang tidak terduga." },
    { ar: "ٱلْخَبِير",    latin: "Al-Khabir",    meaning: "Yang Maha Mengenal",        detail: "Allah mengetahui segala hal secara mendalam — termasuk niat tersembunyi dan rahasia terdalam makhluk-Nya." },
    { ar: "ٱلْحَلِيم",    latin: "Al-Halim",     meaning: "Yang Maha Penyantun",       detail: "Allah tidak terburu-buru dalam menghukum. Kesabaran-Nya memberi manusia kesempatan untuk bertobat." },
    { ar: "ٱلْعَظِيم",    latin: "Al-'Azhim",    meaning: "Yang Maha Agung",           detail: "Keagungan Allah melampaui segala sesuatu. Akal manusia tidak mampu menggambarkan kebesaran-Nya sepenuhnya." },
    { ar: "ٱلْغَفُور",    latin: "Al-Ghafur",    meaning: "Yang Maha Memaafkan",       detail: "Allah menutupi dosa hamba-Nya dan tidak mempermalukan mereka di hadapan makhluk lain. Ampunan-Nya luas tak terbatas." },
    { ar: "ٱلشَّكُور",    latin: "Asy-Syakur",   meaning: "Yang Maha Mensyukuri",      detail: "Allah menghargai setiap amal kecil hamba-Nya dan membalasnya dengan pahala yang berlipat ganda." },
    { ar: "ٱلْعَلِىّ",    latin: "Al-'Ali",      meaning: "Yang Maha Tinggi",          detail: "Allah berada di atas segala sesuatu dalam dzat, sifat, dan kekuasaan-Nya. Tidak ada yang melebihi ketinggian-Nya." },
    { ar: "ٱلْكَبِير",    latin: "Al-Kabir",     meaning: "Yang Maha Besar",           detail: "Kebesaran Allah tidak terbatas. Seluruh alam semesta hanyalah sebagian kecil dari ciptaan-Nya yang Maha Besar." },
    { ar: "ٱلْحَفِيظ",    latin: "Al-Hafizh",    meaning: "Yang Maha Memelihara",      detail: "Allah menjaga dan memelihara setiap makhluk dan setiap amal perbuatan. Tidak ada yang luput dari penjagaan-Nya." },
    { ar: "ٱلْمُقِيت",    latin: "Al-Muqit",     meaning: "Yang Maha Pemberi Kecukupan", detail: "Allah menyediakan makanan dan keperluan setiap makhluk. Tidak ada satu pun yang kekurangan karena kelalaian Allah." },
    { ar: "ٱلْحَسِيب",    latin: "Al-Hasib",     meaning: "Yang Maha Membuat Perhitungan", detail: "Allah mencukupi dan membuat perhitungan yang sempurna atas setiap amal perbuatan hamba-Nya." },
    { ar: "ٱلْجَلِيل",    latin: "Al-Jalil",     meaning: "Yang Maha Luhur",           detail: "Allah memiliki keagungan dan keluhuran yang sempurna dalam sifat-sifat-Nya yang mulia." },
    { ar: "ٱلْكَرِيم",    latin: "Al-Karim",     meaning: "Yang Maha Pemurah",         detail: "Kedermawanan Allah tidak terbatas. Dia memberi tanpa diminta, dan lebih banyak lagi ketika diminta." },
    { ar: "ٱلرَّقِيب",    latin: "Ar-Raqib",     meaning: "Yang Maha Mengawasi",       detail: "Allah senantiasa mengawasi setiap gerak-gerik dan keadaan makhluk-Nya tanpa pernah lalai sekejap pun." },
    { ar: "ٱلْمُجِيب",    latin: "Al-Mujib",     meaning: "Yang Maha Mengabulkan",     detail: "Allah mengabulkan doa setiap hamba yang berdoa kepada-Nya dengan cara dan waktu yang paling tepat." },
    { ar: "ٱلْوَاسِع",    latin: "Al-Wasi'",     meaning: "Yang Maha Luas",            detail: "Ilmu, rahmat, kekuasaan, dan segala sifat Allah tidak terbatas dan meliputi segala penjuru alam semesta." },
    { ar: "ٱلْحَكِيم",    latin: "Al-Hakim",     meaning: "Yang Maha Bijaksana",       detail: "Setiap keputusan dan ketetapan Allah mengandung hikmah yang sempurna, meski kadang tidak terlihat oleh manusia." },
    { ar: "ٱلْوَدُود",    latin: "Al-Wadud",     meaning: "Yang Maha Mengasihi",       detail: "Allah mencintai hamba-Nya yang beriman dengan cinta yang murni dan tulus, melebihi cinta siapa pun." },
    { ar: "ٱلْمَجِيد",    latin: "Al-Majid",     meaning: "Yang Maha Mulia",           detail: "Kemuliaan Allah dalam dzat dan perbuatan-Nya tidak tertandingi. Segala kemuliaan bersumber dari-Nya." },
    { ar: "ٱلْبَاعِث",    latin: "Al-Ba'its",    meaning: "Yang Maha Membangkitkan",   detail: "Allah akan membangkitkan seluruh makhluk pada hari kiamat untuk mempertanggungjawabkan amal perbuatan mereka." },
    { ar: "ٱلشَّهِيد",    latin: "Asy-Syahid",   meaning: "Yang Maha Menyaksikan",     detail: "Allah menyaksikan semua peristiwa yang terjadi di seluruh penjuru alam, tidak ada yang tersembunyi dari-Nya." },
    { ar: "ٱلْحَق",       latin: "Al-Haqq",      meaning: "Yang Maha Benar",           detail: "Allah adalah kebenaran mutlak. Wujud-Nya nyata, firman-Nya benar, dan janji-Nya pasti terlaksana." },
    { ar: "ٱلْوَكِيل",    latin: "Al-Wakil",     meaning: "Yang Maha Memelihara",      detail: "Allah adalah sebaik-baik tempat bersandar dan mewakilkan urusan. Bertawakal kepada-Nya adalah puncak ketenangan." },
    { ar: "ٱلْقَوِى",     latin: "Al-Qawiy",     meaning: "Yang Maha Kuat",            detail: "Kekuatan Allah tidak terbatas dan tidak dapat dilemahkan oleh siapa pun atau apa pun di alam semesta ini." },
    { ar: "ٱلْمَتِين",    latin: "Al-Matin",     meaning: "Yang Maha Kokoh",           detail: "Allah Maha Kokoh dalam kekuatan-Nya. Tidak ada yang dapat melemahkan atau menggoyahkan kekuasaan-Nya." },
    { ar: "ٱلْوَلِى",     latin: "Al-Waliy",     meaning: "Yang Maha Melindungi",      detail: "Allah adalah pelindung sejati orang-orang beriman. Dia menolong dan membimbing mereka di jalan yang benar." },
    { ar: "ٱلْحَمِيد",    latin: "Al-Hamid",     meaning: "Yang Maha Terpuji",         detail: "Segala pujian hanya layak ditujukan kepada Allah. Dia terpuji dalam segala keadaan, baik maupun buruk menurut pandangan manusia." },
    { ar: "ٱلْمُحْصِى",   latin: "Al-Muhshi",    meaning: "Yang Maha Menghitung",      detail: "Allah menghitung dan mencatat setiap hal, sekecil apapun. Tidak ada yang terlewatkan dari hitungan-Nya." },
    { ar: "ٱلْمُبْدِئ",   latin: "Al-Mubdi'",    meaning: "Yang Maha Memulai",         detail: "Allah memulai penciptaan dari tiada. Setiap awal kehidupan adalah manifestasi dari sifat ini." },
    { ar: "ٱلْمُعِيد",    latin: "Al-Mu'id",     meaning: "Yang Maha Mengembalikan",   detail: "Allah akan mengembalikan seluruh makhluk seperti semula pada hari kebangkitan." },
    { ar: "ٱلْمُحْيِى",   latin: "Al-Muhyi",     meaning: "Yang Maha Menghidupkan",    detail: "Allah yang memberi kehidupan kepada setiap makhluk hidup, dari benih hingga manusia." },
    { ar: "ٱلْمُمِيت",    latin: "Al-Mumit",     meaning: "Yang Maha Mematikan",       detail: "Kematian adalah dalam kekuasaan Allah semata. Tidak ada satu jiwa pun yang bisa menghindar dari kematian." },
    { ar: "ٱلْحَى",       latin: "Al-Hayy",      meaning: "Yang Maha Hidup",           detail: "Allah hidup dengan kehidupan yang kekal abadi, tidak didahului oleh ketiadaan dan tidak diakhiri oleh kematian." },
    { ar: "ٱلْقَيُّوم",   latin: "Al-Qayyum",    meaning: "Yang Maha Mandiri",         detail: "Allah tidak bergantung kepada siapa pun, sementara seluruh makhluk bergantung dan membutuhkan-Nya." },
    { ar: "ٱلْوَاجِد",    latin: "Al-Wajid",     meaning: "Yang Maha Menemukan",       detail: "Allah tidak pernah kekurangan sesuatu apapun. Semua yang diinginkan-Nya pasti terlaksana tanpa hambatan." },
    { ar: "ٱلْمَاجِد",    latin: "Al-Majid",     meaning: "Yang Maha Mulia",           detail: "Nama ini menekankan kemuliaan Allah dalam hubungan-Nya dengan hamba — pemurah, lembut, dan maha mulia." },
    { ar: "ٱلْوَاحِد",    latin: "Al-Wahid",     meaning: "Yang Maha Esa",             detail: "Allah adalah satu-satunya Tuhan, tidak ada sekutu, tidak ada tandingan, dan tidak ada yang serupa dengan-Nya." },
    { ar: "ٱلْأَحَد",     latin: "Al-Ahad",      meaning: "Yang Maha Tunggal",         detail: "Keesaan Allah bersifat mutlak dan sempurna. Tidak bisa dibagi, tidak tersusun, dan tidak ada yang setara." },
    { ar: "ٱلصَّمَد",     latin: "Ash-Shamad",   meaning: "Yang Maha Dibutuhkan",      detail: "Semua makhluk membutuhkan Allah, sementara Allah tidak membutuhkan siapa pun. Dialah tempat bergantung segalanya." },
    { ar: "ٱلْقَادِر",    latin: "Al-Qadir",     meaning: "Yang Maha Kuasa",           detail: "Allah berkuasa atas segala sesuatu. Tidak ada yang sulit bagi-Nya — cukup berkata 'Kun' maka jadilah." },
    { ar: "ٱلْمُقْتَدِر", latin: "Al-Muqtadir",  meaning: "Yang Maha Memiliki Kemampuan", detail: "Kemampuan Allah tidak terbatas dan sempurna dalam segala keadaan dan kondisi." },
    { ar: "ٱلْمُقَدِّم",  latin: "Al-Muqaddim",  meaning: "Yang Maha Mendahulukan",    detail: "Allah mendahulukan apa yang dikehendaki-Nya sesuai hikmah-Nya yang sempurna." },
    { ar: "ٱلْمُؤَخِّر",  latin: "Al-Mu'akhkhir", meaning: "Yang Maha Mengakhirkan",   detail: "Allah mengakhirkan apa yang dikehendaki-Nya. Pasangan dengan Al-Muqaddim dalam keseimbangan takdir." },
    { ar: "ٱلْأَوَّل",    latin: "Al-Awwal",     meaning: "Yang Maha Awal",            detail: "Allah ada sebelum segala sesuatu ada. Tidak ada yang mendahului-Nya dalam keberadaan." },
    { ar: "ٱلْآخِر",      latin: "Al-Akhir",     meaning: "Yang Maha Akhir",           detail: "Allah tetap ada setelah segala sesuatu musnah. Keberadaan-Nya tidak memiliki akhir." },
    { ar: "ٱلظَّاهِر",    latin: "Azh-Zhahir",   meaning: "Yang Maha Nyata",           detail: "Allah nyata dengan tanda-tanda kekuasaan-Nya yang terbentang di seluruh alam semesta." },
    { ar: "ٱلْبَاطِن",    latin: "Al-Bathin",    meaning: "Yang Maha Tersembunyi",     detail: "Dzat Allah tidak terjangkau oleh indera manusia, namun kehadiran-Nya terasa melalui kasih sayang-Nya." },
    { ar: "ٱلْوَالِى",    latin: "Al-Wali",      meaning: "Yang Maha Memerintah",      detail: "Allah mengatur dan mengendalikan seluruh urusan alam semesta dengan sempurna tanpa cacat." },
    { ar: "ٱلْمُتَعَالِ", latin: "Al-Muta'ali",  meaning: "Yang Maha Tinggi",          detail: "Ketinggian Allah melampaui segala yang bisa dibayangkan. Akal dan pikiran tidak bisa menggapai hakikat-Nya." },
    { ar: "ٱلْبَرُّ",     latin: "Al-Barr",      meaning: "Yang Maha Baik",            detail: "Allah Maha Baik kepada hamba-Nya, memberikan kebaikan yang tidak terhitung banyaknya setiap saat." },
    { ar: "ٱلتَّوَّاب",   latin: "At-Tawwab",    meaning: "Yang Maha Penerima Tobat",  detail: "Allah selalu membuka pintu tobat dan menerima kembali hamba yang kembali kepada-Nya dengan tulus." },
    { ar: "ٱلْمُنْتَقِم", latin: "Al-Muntaqim",  meaning: "Yang Maha Pemberi Balasan", detail: "Allah membalas orang-orang yang zalim dengan balasan yang setimpal sesuai keadilan-Nya." },
    { ar: "ٱلْعَفُو",     latin: "Al-'Afuw",     meaning: "Yang Maha Memaafkan",       detail: "Allah menghapus dosa sepenuhnya seakan dosa itu tidak pernah ada. Berbeda dengan Ghafur yang menutupi." },
    { ar: "ٱلرَّءُوف",    latin: "Ar-Ra'uf",     meaning: "Yang Maha Pengasih",        detail: "Sifat kelembutan Allah yang sangat tinggi sehingga Dia memalingkan hamba dari musibah sebelum terjadi." },
    { ar: "مَالِكُ ٱلْمُلْك", latin: "Malikul Mulk", meaning: "Yang Maha Penguasa Kerajaan", detail: "Seluruh kerajaan dan kekuasaan di langit dan bumi hanyalah milik Allah semata." },
    { ar: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", latin: "Dzul Jalali wal Ikram", meaning: "Yang Maha Pemilik Keagungan dan Kemuliaan", detail: "Nama yang paling dicintai Allah. Mengumpulkan dua sifat agung: keagungan yang menakutkan dan kemuliaan yang lembut." },
    { ar: "ٱلْمُقْسِط",   latin: "Al-Muqsith",   meaning: "Yang Maha Adil",            detail: "Allah menegakkan keadilan yang sempurna dalam setiap urusan, tidak berpihak dan tidak bertindak sewenang-wenang." },
    { ar: "ٱلْجَامِع",    latin: "Al-Jami'",     meaning: "Yang Maha Mengumpulkan",    detail: "Allah mengumpulkan seluruh makhluk pada hari kiamat. Dialah yang menyatukan hal-hal yang berbeda dalam hikmah-Nya." },
    { ar: "ٱلْغَنِى",     latin: "Al-Ghani",     meaning: "Yang Maha Kaya",            detail: "Allah tidak membutuhkan apapun dari makhluk-Nya. Kekayaan-Nya mutlak dan tidak bergantung pada apapun." },
    { ar: "ٱلْمُغْنِى",   latin: "Al-Mughni",    meaning: "Yang Maha Pemberi Kekayaan", detail: "Allah menganugerahkan kecukupan dan kekayaan kepada siapa yang dikehendaki-Nya." },
    { ar: "ٱلْمَانِع",    latin: "Al-Mani'",     meaning: "Yang Maha Mencegah",        detail: "Allah mencegah apa yang ingin dicegah-Nya sesuai hikmah-Nya. Pencegahan-Nya bisa jadi merupakan perlindungan terbaik." },
    { ar: "ٱلضَّار",      latin: "Adh-Dharr",    meaning: "Yang Maha Pemberi Mudharat", detail: "Hanya Allah yang dapat memberi mudharat sejati. Apapun yang terasa menyakiti hanyalah ijin dan takdir-Nya." },
    { ar: "ٱلنَّافِع",    latin: "An-Nafi'",     meaning: "Yang Maha Pemberi Manfaat", detail: "Hanya Allah yang memberi manfaat sejati. Segala manfaat yang diterima makhluk bersumber dari-Nya." },
    { ar: "ٱلنُّور",      latin: "An-Nur",       meaning: "Yang Maha Bercahaya",       detail: "Allah adalah cahaya langit dan bumi. Hidayah, ilmu, dan iman adalah cahaya yang berasal dari-Nya." },
    { ar: "ٱلْهَادِى",    latin: "Al-Hadi",      meaning: "Yang Maha Pemberi Petunjuk", detail: "Hanya Allah yang mampu memberi petunjuk sejati ke jalan yang lurus. Hidayah adalah anugerah terbesar dari-Nya." },
    { ar: "ٱلْبَدِيع",    latin: "Al-Badi'",     meaning: "Yang Maha Pencipta Keindahan", detail: "Allah menciptakan alam semesta dengan keindahan dan keunikan yang luar biasa tanpa contoh sebelumnya." },
    { ar: "ٱلْبَاقِى",    latin: "Al-Baqi",      meaning: "Yang Maha Kekal",           detail: "Allah kekal selamanya. Tidak ada awal dan tidak ada akhir bagi keberadaan-Nya yang mutlak." },
    { ar: "ٱلْوَارِث",    latin: "Al-Warits",    meaning: "Yang Maha Mewarisi",        detail: "Pada akhirnya, seluruh makhluk akan fana dan hanya Allah yang kekal. Dia mewarisi seluruh alam semesta." },
    { ar: "ٱلرَّشِيد",    latin: "Ar-Rasyid",    meaning: "Yang Maha Pandai",          detail: "Allah Maha Pandai dalam mengatur dan mengelola segala urusan menuju tujuan yang sempurna." },
    { ar: "ٱلصَّبُور",    latin: "Ash-Shabur",   meaning: "Yang Maha Sabar",           detail: "Allah tidak terburu-buru dalam membalas kedurhakaan makhluk. Kesabaran-Nya adalah rahmat bagi semua." },
];

// Warnanya pabos
const PALETTES = [
    { from: '#0a0118', to: '#1a0533' },
    { from: '#001a0a', to: '#012a14' },
    { from: '#130a00', to: '#2a1500' },
    { from: '#000d1a', to: '#001f3f' },
    { from: '#1a0010', to: '#2d0020' },
    { from: '#0d1a00', to: '#1a3300' },
    { from: '#1a1000', to: '#2a1a00' },
    { from: '#001a1a', to: '#002b2b' },
    { from: '#0d0010', to: '#1a0033' },
    { from: '#1a0000', to: '#2d0000' },
];

let currentPalette = 0;

function getPalette(idx) {
    return PALETTES[Math.floor(idx / 10) % PALETTES.length];
}

function applySkyPalette(p) {
    document.getElementById('sky').style.background =
        `linear-gradient(to bottom, ${p.from}, ${p.to})`;
}

function buildStars() {
    const layer = document.getElementById('stars-layer');
    layer.innerHTML = '';
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        const size = Math.random() * 2.5 + 0.8;
        s.className = 'star absolute bg-white rounded-full';
        s.style.cssText = `
            left:${Math.random() * 100}%;
            top:${Math.random() * 100}%;
            width:${size}px;
            height:${size}px;
            --dur:${(Math.random() * 3 + 1.5).toFixed(1)}s;
            --delay:${(Math.random() * 4).toFixed(1)}s;
        `;
        layer.appendChild(s);
    }
}

function spawnParticles() {
    for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.className = 'particle fixed w-[3px] h-[3px] rounded-full pointer-events-none z-[1]';
        p.style.cssText = `
            background: rgba(250,204,21,0.6);
            left:${Math.random() * 100}%;
            bottom:${Math.random() * 30}%;
            --spd:${(Math.random() * 10 + 6).toFixed(1)}s;
            --pdelay:${(Math.random() * 12).toFixed(1)}s;
        `;
        document.body.appendChild(p);
    }
}

function buildContent() {
    const container = document.getElementById('content');

    NAMES.forEach((name, i) => {
        // Group label
        if (i % 10 === 0) {
        const gl = document.createElement('div');
        gl.className = 'text-center relative z-[3] px-6 pt-8 pb-2.5';
        const groupNum = Math.floor(i / 10) + 1;
        gl.innerHTML = `<span class="text-[11px] tracking-[0.2em] text-white/25 font-sans uppercase">
            Kelompok ${groupNum} &nbsp;·&nbsp; No. ${i + 1}–${Math.min(i + 10, 99)}
        </span>`;
        container.appendChild(gl);
        }

    // Section
    const section = document.createElement('div');
    section.className = 'min-h-screen flex flex-col items-center justify-center px-6 py-[60px] relative';
    section.dataset.index = i;

    // Card
    const card = document.createElement('div');
    card.className = 'name-card text-center max-w-[540px] w-full';

    // Number badge
    const badge = document.createElement('div');
    badge.className = 'inline-block text-xs font-sans tracking-[0.15em] text-yellow-400/60 mb-[18px] border border-yellow-400/20 px-3.5 py-1 rounded-full';
    badge.textContent = `No. ${i + 1} dari 99`;

    // Arabic text
    const ar = document.createElement('div');
    ar.className = 'text-yellow-400 leading-[1.1] mb-4 font-serif cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_60px_rgba(250,204,21,0.9)]';
    ar.style.cssText = `
        font-size: clamp(52px, 10vw, 82px);
        text-shadow: 0 0 40px rgba(250,204,21,0.5);
        direction: rtl;
    `;
    ar.textContent = name.ar;
    ar.onclick = () => openModal(i);
    ar.title = 'Klik untuk detail';

    // Latin name
    const latin = document.createElement('div');
    latin.className = 'text-white/92 font-sans font-light tracking-[0.05em] mb-2';
    latin.style.fontSize = 'clamp(18px, 4vw, 26px)';
    latin.textContent = name.latin;

    // Meaning
    const meaning = document.createElement('div');
    meaning.className = 'text-white/55 font-sans font-light mb-6';
    meaning.style.fontSize = 'clamp(13px, 2.5vw, 16px)';
    meaning.textContent = name.meaning;

    // Detail button
    const btn = document.createElement('button');
    btn.className = 'inline-block text-xs font-sans tracking-[0.12em] text-yellow-400/75 border border-yellow-400/30 px-[18px] py-1.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-yellow-400/12 hover:text-yellow-400 hover:border-yellow-400/70 bg-transparent';
    btn.innerHTML = 'Baca Makna &rsaquo;';
    btn.onclick = () => openModal(i);

    card.appendChild(badge);
    card.appendChild(ar);
    card.appendChild(latin);
    card.appendChild(meaning);
    card.appendChild(btn);
    section.appendChild(card);
    container.appendChild(section);

    // Divider
    if (i < NAMES.length - 1) {
        const div = document.createElement('div');
        div.className = 'h-px mx-[10%] relative z-[3]';
        div.style.background = 'linear-gradient(to right, transparent, rgba(250,204,21,0.35), transparent)';
        container.appendChild(div);
        }
    });
}

function updateProgress() {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = Math.min(100, (scrolled / total) * 100);
    document.getElementById('progress-bar').style.width = pct + '%';

    const idx = Math.floor((scrolled / total) * 99);
    document.getElementById('page-num').textContent = `${Math.min(idx + 1, 99)} / 99`;

    const group = Math.floor(idx / 10);
    if (group !== currentPalette) {
        currentPalette = group;
        applySkyPalette(getPalette(idx));
    }
}

function checkFades() {
    const cards = document.querySelectorAll('.name-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.82) {
        card.classList.add('visible');
        }
    });
}

function openModal(idx) {
    const n = NAMES[idx];
    document.getElementById('modal-ar').textContent = n.ar;
    document.getElementById('modal-latin').textContent = n.latin;
    document.getElementById('modal-meaning').textContent = n.meaning;
    document.getElementById('modal-detail').textContent = n.detail;
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
}

// Modal close on overlay click
document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});

// Close on Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// Hide scroll hint on scroll
function hideScrollHint() {
    const hint = document.getElementById('scroll-hint');
    if (window.scrollY > 80) {
        hint.style.opacity = '0';
        hint.style.transition = 'opacity 0.5s';
    }
}

window.addEventListener('scroll', () => {
    updateProgress();
    checkFades();
    hideScrollHint();
});

// Init
buildStars();
buildContent();
spawnParticles();
applySkyPalette(PALETTES[0]);
updateProgress();
setTimeout(checkFades, 200);