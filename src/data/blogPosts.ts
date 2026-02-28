export interface BlogPost {
  id: string;
  projectId: string;
  title: string;
  emoji: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  sections: {
    heading?: string;
    emoji?: string;
    content?: string;
    bullets?: string[];
    callout?: { emoji: string; text: string };
    code?: { language: string; code: string };
    divider?: boolean;
  }[];
}

export const blogPosts: BlogPost[] = [
  // ─── CINEMANIA ───
  {
    id: "cinemania-build-in-public",
    projectId: "cinemania",
    title: "Cinemania: Vanilla JS ile 10 Kişilik Ekipte Film Platformu Geliştirmek",
    emoji: "🎬",
    date: "2025-12-15",
    readTime: "5 min",
    tags: ["Build in Public", "JavaScript", "Team Project"],
    summary:
      "10 kişilik bir ekipte framework kullanmadan, sadece Vanilla JavaScript ile nasıl modern bir film keşif platformu geliştirdik? PR süreçleri, TMDB API entegrasyonu ve öğrendiğim dersler.",
    sections: [
      {
        heading: "Proje Neydi?",
        emoji: "📖",
        content:
          "Cinemania, GoIT Full Stack Developer programı kapsamında geliştirdiğimiz bir film keşif platformu. Kullanıcılar trending filmleri görebiliyor, arama yapabiliyor ve kendi kütüphanelerini oluşturabiliyor. En önemli kısıt: hiçbir framework kullanmadık — saf JavaScript.",
      },
      {
        heading: "Benim Rolüm: Footer & Team Modal",
        emoji: "🎯",
        content:
          "Ben projede Footer ve Team Modal bileşenlerinden sorumluydum. İlk bakışta basit görünebilir ama 10 kişilik bir ekipte bile en küçük component'in doğru yapılması projenin bütünlüğünü etkiliyor.",
        bullets: [
          "Footer'da responsive tasarım — 320px'den 1280px'e kadar pixel-perfect uyum",
          "Team Modal ile tüm ekip üyelerinin dinamik olarak listelenmesi",
          "Sosyal linklerin accessibility standartlarına uygun şekilde eklenmesi",
          "Dark/Light theme desteğinin footer'a entegrasyonu",
        ],
      },
      {
        callout: {
          emoji: "💡",
          text: "Öğrendiğim en önemli ders: Küçük bir görev bile olsa, onu mükemmel yapmak ekip güvenini kazandırır. Footer'ı zamanında ve hatasız teslim etmek, sonraki projelerde daha büyük sorumluluklar almamı sağladı.",
        },
      },
      {
        heading: "PR Sürecinde Neler Öğrendim?",
        emoji: "🔀",
        content:
          "10 kişilik ekipte Git workflow'u öğrenmek başlı başına bir deneyimdi.",
        bullets: [
          "Feature branch stratejisi — her görev için ayrı branch",
          "Pull Request'lerde açıklayıcı description yazmanın önemi",
          "Merge conflict çözümünü ilk kez gerçek projede deneyimledim",
          "Code review sürecinde başkalarının kodunu okumayı öğrendim",
        ],
      },
      {
        heading: "Teknik Zorluklar",
        emoji: "⚡",
        content:
          "Framework olmadan modüler bir yapı kurmak zordu. Her ekip üyesi kendi bölümünde farklı bir pattern kullanıyordu. Bunu standartlaştırmak için ekip olarak coding convention'lar belirledik.",
        bullets: [
          "Vanilla JS'de component-based düşünme alışkanlığı kazandım",
          "localStorage ile state management — framework'süz persistent data",
          "TMDB API ile asenkron veri çekme ve hata yönetimi",
          "Mobile-first CSS yazarak responsive tasarım pratiği",
        ],
      },
      {
        callout: {
          emoji: "🏆",
          text: "Sonuç: PageSpeed skoru %80+ ve sıfır console hatası ile projeyi başarıyla GitHub Pages'a deploy ettik.",
        },
      },
    ],
  },

  // ─── FOCUS.FRAME ───
  {
    id: "focusframe-build-in-public",
    projectId: "focusframe",
    title: "Focus.Frame: Figma'dan Pixel-Perfect Koda — İlk Ekip Projesi Deneyimim",
    emoji: "📸",
    date: "2025-11-20",
    readTime: "4 min",
    tags: ["Build in Public", "HTML/CSS", "Team Project"],
    summary:
      "8 kişilik bir ekipte Figma mockup'larını birebir koda çevirme sürecim. Semantic HTML, SVG sprites ve responsive CSS Grid ile neler öğrendim?",
    sections: [
      {
        heading: "İlk Gerçek Ekip Projesi",
        emoji: "🚀",
        content:
          "Focus.Frame, GoIT programındaki ilk ekip projemdi. Bir fotoğrafçılık okulu web sitesi geliştirdik — kurslar, mentörler, öğrenci yorumları ve kayıt formu içeren tek sayfalık bir landing page.",
      },
      {
        heading: "Benim Rolüm: Footer",
        emoji: "🎯",
        content:
          "Footer bölümünün tamamından sorumluydum. Bu ilk ekip deneyimimde öğrendiğim en önemli şey, tek başına kod yazmanın ötesinde ekiple uyumlu çalışma disipliniydi.",
        bullets: [
          "Sosyal linkler (Instagram, YouTube, Facebook) — tümü yeni sekmede açılıyor",
          "İletişim bilgileri — telefon numarası tel: protokolü ile",
          "SVG sprite kullanarak ikon entegrasyonu",
          "Responsive yapı: 375px → 768px → 1280px",
        ],
      },
      {
        heading: "Figma'dan Koda Geçiş Süreci",
        emoji: "🎨",
        content:
          "Figma'yı ilk kez profesyonel bir workflow'da kullandım. Pixel-perfect implementasyon yapmak, sadece 'yaklaşık olarak benzesin' demek değil — her padding, margin ve font-size'ın birebir eşleşmesi gerekiyordu.",
        bullets: [
          "Figma'dan spacing ve typography değerlerini çıkarmayı öğrendim",
          "Retina-ready görsel optimizasyonu (2x assets)",
          "CSS custom properties ile tutarlı design token'lar",
          "W3C HTML & CSS validasyonundan geçen temiz kod",
        ],
      },
      {
        callout: {
          emoji: "💡",
          text: "Figma'dan koda geçerken en çok zorlandığım şey spacing tutarlılığıydı. Ama bu proje sayesinde 'design system düşüncesi' ile tanıştım ve sonraki projelerde çok işime yaradı.",
        },
      },
      {
        heading: "Ekip Çalışması ve Workflow",
        emoji: "👥",
        content:
          "8 kişilik ekipte Trello ile görev yönetimi yaptık. Her ekip üyesi kendi section'ından sorumluydu. GitHub'da branch stratejisi ve PR süreçleri ile çalıştık.",
        bullets: [
          "Trello board ile task tracking",
          "GitHub branch'leri ile paralel geliştirme",
          "PR review sürecinde semantic HTML öğrenme",
          "Ekip içi iletişim — hangi CSS class'ları ortaklaştıracağımızı belirlemek",
        ],
      },
      {
        callout: {
          emoji: "🏆",
          text: "Bu proje, HTML/CSS'in 'basit' olmadığını gösterdi. Semantic yapı, accessibility ve pixel-perfect uygulama, güçlü bir frontend temeli oluşturdu.",
        },
      },
    ],
  },

  // ─── MONEY GUARD ───
  {
    id: "moneyguard-build-in-public",
    projectId: "moneyguard",
    title: "Money Guard: React & Redux ile Transaction CRUD Sistemini Nasıl Kurdum?",
    emoji: "💰",
    date: "2026-01-10",
    readTime: "6 min",
    tags: ["Build in Public", "React", "Redux", "Team Project"],
    summary:
      "5 kişilik ekipte React 18, Redux Toolkit ve react-hook-form kullanarak tam kapsamlı bir CRUD sistemi geliştirdim. JWT authentication, modal-based formlar ve otomatik bakiye senkronizasyonu.",
    sections: [
      {
        heading: "En Kapsamlı Projem",
        emoji: "📖",
        content:
          "Money Guard, şimdiye kadar üzerinde çalıştığım en kapsamlı proje. Gerçek bir finans uygulaması — kullanıcılar gelir/gider takibi yapabiliyor, istatistik görüntüleyebiliyor ve döviz kurlarını takip edebiliyor.",
      },
      {
        heading: "Benim Rolüm: Transaction CRUD & Modals",
        emoji: "🎯",
        content:
          "Bu projede uygulamanın kalbi olan transaction yönetim sisteminin tamamını geliştirdim. Bu, önceki projelere kıyasla çok daha büyük bir sorumluluktu.",
        bullets: [
          "Floating '+' butonu ile yeni transaction ekleme",
          "ModalAddTransaction — tam ekran modal ile form deneyimi",
          "AddTransactionForm — react-hook-form + Yup validasyonu",
          "ModalEditTransaction — mevcut veriyi doldurarak düzenleme",
          "EditTransactionForm — güncelleme logic'i",
          "Delete transaction — onay dialog'u ile silme",
          "Her işlem sonrası otomatik bakiye senkronizasyonu",
        ],
      },
      {
        heading: "react-hook-form + Yup Entegrasyonu",
        emoji: "📝",
        content:
          "Form yönetimi için react-hook-form tercih ettik. Yup ile schema-based validasyon, formların hem güvenilir hem de kullanıcı dostu olmasını sağladı.",
        bullets: [
          "useForm hook'u ile controlled form state",
          "Yup schema ile tip güvenli validasyon kuralları",
          "react-datepicker entegrasyonu — tarih seçimi",
          "Gelir/Gider toggle — kategori seçimi dinamik olarak değişiyor",
          "Form reset — başarılı submit sonrası otomatik temizleme",
        ],
      },
      {
        callout: {
          emoji: "💡",
          text: "react-hook-form'un en güçlü yanı: re-render sayısını minimize etmesi. Klasik useState ile form yönetimine kıyasla performans farkı gözle görülür seviyedeydi.",
        },
      },
      {
        heading: "Redux ile State Yönetimi",
        emoji: "🔄",
        content:
          "Transaction CRUD operasyonlarının tamamı Redux Toolkit async thunk'ları ile yönetildi. Her operasyon sonrası balance otomatik güncelleniyor.",
        bullets: [
          "createAsyncThunk ile API çağrıları",
          "extraReducers ile loading/success/error state yönetimi",
          "Transaction ekleme/silme sonrası balance thunk'ının tetiklenmesi",
          "redux-persist ile JWT token persistence",
          "Optimistic UI yerine confirmed state yaklaşımı",
        ],
      },
      {
        heading: "Modal Tasarım Kararları",
        emoji: "🎨",
        content:
          "Modal-based form deneyimi, kullanıcının ana sayfadan ayrılmadan işlem yapabilmesini sağladı. Hem mobile hem desktop'ta sorunsuz çalışan bir modal sistemi kurdum.",
        bullets: [
          "Backdrop click ile kapatma",
          "ESC tuşu ile kapatma",
          "Mobile'da tam ekran modal deneyimi",
          "Scroll lock — modal açıkken arka planın scroll olmaması",
          "Focus trap — accessibility uyumu",
        ],
      },
      {
        callout: {
          emoji: "🏆",
          text: "Bu proje beni 'HTML/CSS bilen bir geliştirici'den 'React ekosisteminde CRUD operasyonları yönetebilen bir Full Stack Developer adayı'na dönüştürdü.",
        },
      },
    ],
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined =>
  blogPosts.find((p) => p.id === id);

export const getBlogPostsByProject = (projectId: string): BlogPost[] =>
  blogPosts.filter((p) => p.projectId === projectId);
