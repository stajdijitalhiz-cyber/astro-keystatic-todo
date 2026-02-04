# Astro + Keystatic Todo List Uygulaması

Bu proje, Astro ve Keystatic kullanılarak oluşturulmuş bir todo list yönetim sistemidir. Yöneticiler tarayıcı üzerinden bir panel aracılığıyla todo ekleyebilir, düzenleyebilir ve silebilir. Tüm veriler dosya sistemine yazılır ve anasayfada otomatik olarak görüntülenir.

## 🎯 Özellikler

- **Tarayıcı Tabanlı Yönetim Paneli**: Keystatic admin paneli ile kolay içerik yönetimi
- **Dosya Tabanlı Veri Saklama**: Tüm veriler `src/content/todos/` dizininde Markdown formatında saklanır
- **Üç Durum Kategorisi**: Yapılacak, Yapılıyor, Yapıldı
- **Otomatik Kategorizasyon**: Anasayfada duruma göre otomatik sütunlara ayrılır
- **Modern ve Responsive Tasarım**: Gradient arka plan, kartlı görünüm
- **Git Uyumlu**: Dosya tabanlı yapı sayesinde sürüm kontrolü yapılabilir

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ 
- pnpm (veya npm/yarn)

### Bağımlılıkları Yükleme

```bash
cd todo-keystatic
pnpm install
```

## 🚀 Çalıştırma

### Geliştirme Sunucusu

```bash
pnpm dev
```

Sunucu başladığında:
- **Anasayfa**: http://localhost:4321/
- **Yönetim Paneli**: http://localhost:4321/keystatic

### Production Build

```bash
pnpm build
pnpm preview
```

## 📁 Proje Yapısı

```
todo-keystatic/
├── keystatic.config.ts          # Keystatic yapılandırması
├── astro.config.mjs             # Astro yapılandırması
├── src/
│   ├── content/
│   │   ├── config.ts            # Content collection tanımı
│   │   └── todos/               # Todo içerikleri (her todo bir klasör)
│   │       ├── ornek-gorev-1/
│   │       │   └── index.mdoc   # Todo verisi (frontmatter + içerik)
│   │       ├── ornek-gorev-2/
│   │       └── ornek-gorev-3/
│   └── pages/
│       └── index.astro          # Anasayfa (todo listesi görünümü)
└── public/                      # Statik dosyalar
```

## 🎨 Kullanım

### 1. Yönetim Paneline Giriş

Tarayıcınızda `http://localhost:4321/keystatic` adresine gidin.

### 2. Yeni Todo Ekleme

1. Keystatic panelinde **"Todos"** koleksiyonuna tıklayın
2. **"Create Todos"** butonuna basın
3. Formu doldurun:
   - **Başlık**: Todo'nun başlığı (URL slug olarak kullanılır)
   - **İçerik**: Detaylı açıklama (zengin metin editörü)
   - **Durum**: Yapılacak / Yapılıyor / Yapıldı
   - **Oluşturulma Tarihi**: Otomatik bugünün tarihi gelir
4. **"Create"** butonuna tıklayın

### 3. Todo Düzenleme

1. Keystatic panelinde listeden düzenlemek istediğiniz todo'ya tıklayın
2. Gerekli değişiklikleri yapın
3. **"Update"** butonuna tıklayın

### 4. Todo Silme

1. Keystatic panelinde listeden silmek istediğiniz todo'ya tıklayın
2. **"Delete"** butonuna tıklayın
3. Onaylayın

### 5. Anasayfada Görüntüleme

Anasayfada (`http://localhost:4321/`) tüm todo'lar durumlarına göre üç sütunda görüntülenir:

- **Yapılacak** (Turuncu): `status: todo`
- **Yapılıyor** (Mavi): `status: in-progress`
- **Yapıldı** (Yeşil): `status: done`

Her kartda şunlar görünür:
- Todo başlığı
- İçerik metni
- Oluşturulma tarihi

## 🔧 Yapılandırma

### Todo Şeması (keystatic.config.ts)

```typescript
{
  title: fields.slug({ name: { label: 'Başlık' } }),
  content: fields.document({
    label: 'İçerik',
    formatting: true,
    dividers: true,
    links: true,
    images: true,
  }),
  status: fields.select({
    label: 'Durum',
    options: [
      { label: 'Yapılacak', value: 'todo' },
      { label: 'Yapılıyor', value: 'in-progress' },
      { label: 'Yapıldı', value: 'done' },
    ],
    defaultValue: 'todo',
  }),
  createdAt: fields.date({
    label: 'Oluşturulma Tarihi',
    defaultValue: { kind: 'today' },
  }),
}
```

### Durum Kategorilerini Değiştirme

`src/pages/index.astro` dosyasında `statusLabels` objesini düzenleyebilirsiniz.

## 🎨 Tasarımı Özelleştirme

Anasayfa tasarımı `src/pages/index.astro` dosyasının `<style>` bölümünde bulunur. Renkleri, boyutları ve düzeni buradan değiştirebilirsiniz.

### Renk Şeması

- **Yapılacak**: `#f59e0b` (Turuncu)
- **Yapılıyor**: `#3b82f6` (Mavi)
- **Yapıldı**: `#10b981` (Yeşil)
- **Arka Plan Gradient**: `#667eea` → `#764ba2`

## 📝 Veri Formatı

Her todo, `src/content/todos/` dizininde ayrı bir klasörde saklanır. Örnek:

```markdown
---
title: ornek-gorev-1
status: todo
createdAt: '2026-02-04'
---

Bu bir örnek yapılacak görevdir. Keystatic panelinden düzenleyebilir veya silebilirsiniz.
```

## 🔄 Git Entegrasyonu

Keystatic dosya tabanlı çalıştığı için tüm değişiklikler Git ile takip edilebilir:

```bash
git add src/content/todos/
git commit -m "Yeni todo eklendi"
git push
```

## 🚢 Deployment

Projeyi Netlify, Vercel veya diğer Astro destekleyen platformlarda yayınlayabilirsiniz. Node.js adapter kullanıldığı için SSR (Server-Side Rendering) desteklenir.

### Netlify/Vercel için

```bash
pnpm build
```

Build çıktısı `dist/` klasöründe oluşur.

## 🛠️ Teknolojiler

- **Astro 5.17.1**: Web framework
- **Keystatic 0.5.48**: CMS (Content Management System)
- **React 19.2.4**: UI bileşenleri için
- **Markdoc**: İçerik formatı
- **Node.js Adapter**: SSR desteği

## 📚 Daha Fazla Bilgi

- [Astro Dokümantasyonu](https://astro.build)
- [Keystatic Dokümantasyonu](https://keystatic.com)
- [Markdoc Dokümantasyonu](https://markdoc.dev)

## 🤝 Katkıda Bulunma

Bu proje açık kaynaklıdır. İyileştirme önerilerinizi ve katkılarınızı bekliyoruz!

## 📄 Lisans

MIT License
