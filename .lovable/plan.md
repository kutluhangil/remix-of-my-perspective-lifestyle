

# Kisisel Portfolio ve Blog Sitesine Donusum Plani

Bu plan, mevcut "Perspective" blog template'ini Kutluhan Gul icin kisisel bir portfolio/blog sitesine donusturecek.

---

## 1. Genel Yapi Degisiklikleri

Mevcut sayfa yapisi su sekilde degisecek:

```text
MEVCUT                          YENI
---------                       ---------
Home (Blog)          -->        Home (Portfolio Landing)
Articles             -->        Projects (Proje Vitrin)
Wellness/Travel/...  -->        Kaldirilacak
About                -->        About (CV bilgileri)
Contact              -->        Contact (iletisim formu)
Article/:id          -->        Project/:id (proje detay)
```

**Header navigasyonu:** Home | Projects | About | Contact
**Logo:** "P" yerine "KG" monogrami, "Perspective" yerine "Kutluhan Gul"

---

## 2. Ana Sayfa (Index) - Portfolio Landing

### Hero Section
- Baslik: "Hi, I'm Kutluhan Gul" / "Full Stack Developer"
- Aciklama: CV'deki professional summary'nin kisa versiyonu
- Butonlar: "View Projects" ve "Download CV"
- Sosyal linkler: LinkedIn, GitHub ikonlari (gercek URL'lerle)
- Mevcut tasarim yapisina (rounded card, grid layout) sadik kalinacak

### Intro Section
- Kisa bir tanitim paragrafı - kariyer gecisi hikayesi

### Skills Section (Yeni)
- CV'deki yetenekler: HTML/CSS, JavaScript, React, TypeScript, Node.js, REST API, Redux, Git, vb.
- Mevcut card tasarimina uygun pill/badge gorunumu

### Featured Projects Section (Eski Articles Grid)
- ArticleCard componenti ProjectCard'a donusturulecek
- Cinemania ve Focus.Frame projeleri gosterilecek
- Proje gorselleri (yuklenen screenshot'lar) kullanilacak
- Kategori tag'leri: "Team Project", "HTML/CSS", "JavaScript" gibi

### Newsletter Section --> Contact CTA
- "Let's connect" / "Get in touch" mesaji

---

## 3. Veri Katmani

`src/data/articles.ts` --> `src/data/projects.ts` olarak yeniden yazilacak:

- **Cinemania**: Baslik, aciklama, teknolojiler, GitHub linki, canli demo linki, ekip bilgisi, Kutluhan'in rolu (Footer & Team Modal), yuklenen gorsel
- **Focus.Frame**: Ayni sekilde, Kutluhan'in rolu (Footer), yuklenen gorsel

Her proje icin:
- id, title, subtitle, description, technologies[], role, githubUrl, liveDemoUrl, image, teamSize, screenshots[]

---

## 4. Proje Detay Sayfasi

Mevcut Article.tsx yapisini koruyarak:
- Hero gorsel (proje screenshot'i)
- Proje basligi ve aciklamasi
- Teknoloji tag'leri
- Kutluhan'in rolu
- GitHub ve Live Demo butonlari
- README'den alinan ozellikler ve teknik detaylar
- Ekip bilgisi (kisaltilmis)
- Proje gorselleri

---

## 5. About Sayfasi

CV bilgilerinden olusturulacak:
- Professional Summary
- Skills (gorsel kartlar)
- Is Deneyimi timeline'i (Amazon, Crowne Plaza, Radisson Blu, USA deneyimi)
- Egitim timeline'i (GoIT, Anadolu Uni, Mustafa Kemal, Atilim)
- CV indirme butonu

---

## 6. Contact Sayfasi

- E-posta: kutluhangul@windowslive.com
- Telefon: +90 (506) 246 10 33
- Konum: Istanbul, Turkiye
- LinkedIn ve GitHub linkleri
- Basit iletisim formu (isim, email, mesaj)

---

## 7. Proje Gorsellerinin Eklenmesi

Yuklenen iki gorsel projeye kopyalanacak:
- `Desktop_Home.png` --> Cinemania proje gorseli
- `FocusFrame_1440.png` --> Focus.Frame proje gorseli

---

## 8. Footer Guncelleme

- "Perspective" yerine "Kutluhan Gul"
- Explore linkleri: Projects
- Social linkler: LinkedIn, GitHub
- Copyright: "2025 Kutluhan Gul"

---

## 9. Renk ve Tema

Mevcut sıcak, sofistike renk paleti korunacak. Dark mode destegi devam edecek. Tasarim dili (rounded kartlar, pill nav, animasyonlar) aynen kalacak.

---

## Teknik Detaylar

### Degisecek/Olusturulacak Dosyalar:
1. `src/data/projects.ts` - Yeni proje veri dosyasi
2. `src/components/Header.tsx` - Nav linkleri ve logo guncelleme
3. `src/components/HeroSection.tsx` - Portfolio hero
4. `src/components/IntroSection.tsx` - Kisa tanitim
5. `src/components/ProjectCard.tsx` - Yeni proje kart componenti
6. `src/components/SkillsSection.tsx` - Yetenekler bolumu (yeni)
7. `src/pages/Index.tsx` - Ana sayfa yeniden yapilandirma
8. `src/pages/Project.tsx` - Proje detay sayfasi (yeni, Article.tsx bazli)
9. `src/pages/About.tsx` - CV bilgileriyle guncelleme
10. `src/pages/Contact.tsx` - Iletisim bilgileriyle guncelleme
11. `src/App.tsx` - Route'lar guncelleme, kullanilmayan sayfalar kaldirilacak
12. Gorsel dosyalari src/assets'e kopyalama
13. Kullanilmayan sayfalarin kaldirilmasi (Wellness, Travel, Creativity, Growth, Authors, StyleGuide, Privacy, Terms)

### Korunacaklar:
- Tum UI component'leri (button, card, vb.)
- CSS tasarim sistemi ve animasyonlar
- Dark/light mode
- Responsive tasarim
- Pill navigation stili
- Rounded card tasarimi

