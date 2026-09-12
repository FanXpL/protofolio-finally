# FANDI — Portfolio Website

Portfolio developer personal. Full **HTML5 + CSS3 + Vanilla JavaScript** —
tanpa framework, tanpa build tools, tanpa backend.

## Struktur File

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        └── profile.jpg   (opsional — ganti foto profil kamu di sini)
```

## Cara Menjalankan

### Opsi 1 — VS Code + Live Server (disarankan)
1. Buka folder project ini di VS Code.
2. Install extension **Live Server** (kalau belum punya).
3. Klik kanan pada `index.html` → **Open with Live Server**.
4. Website otomatis terbuka di browser dan auto-reload saat kamu edit file.

### Opsi 2 — Langsung buka file
Klik dua kali `index.html`, atau drag file itu ke browser kamu. Semua fitur
tetap jalan karena tidak ada backend/API eksternal yang wajib.

## Cara Mengganti Konten

Semua data (nama, role, social links, timeline, projects, foto gallery, dll)
ada di satu tempat: bagian atas file **`script.js`**, di object
`portfolioData`. Kamu tidak perlu menyentuh HTML sama sekali untuk mengganti
konten — cukup edit object ini:

```javascript
const portfolioData = {
  name: "Fandi",
  role: "Web Developer",
  social: {
    whatsapp: "https://wa.me/XXXXXXXXXXX",
    github: "https://github.com/USERNAME",
    telegram: "https://t.me/USERNAME",
    instagram: "https://instagram.com/USERNAME"
  },
  projects: [ /* ... */ ],
  journey: [ /* ... */ ],
  archive: [ /* ... */ ],
  gallery: [ /* ... */ ]
};
```

- **Ganti social links** → edit `social.whatsapp`, `social.github`, dll.
- **Ganti/tambah project** → tambahkan object baru ke array `projects`.
  Field `size` menerima `"wide"` (kolom besar) atau `"narrow"` (kolom kecil)
  untuk mengatur grid asimetris.
- **Ganti timeline** → edit array `journey`, masing-masing item punya
  `year`, `title`, `description`, `tech`.
- **Ganti foto Loser Core Archive / Visual Archive** → edit array `archive`
  dan `gallery`. Field `image` bisa diisi path lokal (misal
  `assets/images/foto1.jpg`) atau URL.
- **Ganti foto profil hero** → simpan file sebagai
  `assets/images/profile.jpg`. Kalau file tidak ditemukan, otomatis
  fallback ke placeholder supaya website tetap tidak rusak.

## Fitur

- Hero dengan glitch text, typing effect, dan grid background.
- About section dengan layout asimetris ala neo-brutalism.
- Timeline coding journey interaktif (scroll-driven, pakai `IntersectionObserver`).
- Skill cards dengan hover animation.
- Project cards dengan grid asimetris + stagger animation saat scroll.
- **Loser Core Archive** — masonry gallery dengan lightbox custom (next/prev,
  keyboard support, ESC untuk close).
- Visual Archive gallery responsif (4 kolom desktop → 1 kolom mobile).
- Navbar sticky dengan active-section indicator + hamburger menu mobile.
- Custom cursor (otomatis nonaktif di mobile).
- Scroll progress bar.
- Mendukung `prefers-reduced-motion` untuk mengurangi animasi.
- 100% vanilla JS — dipecah jadi function modular (`initNavigation()`,
  `initTimeline()`, `initGallery()`, `initLightbox()`, dst.) di `script.js`.

## Catatan Performa

- Semua gambar pakai `loading="lazy"`.
- Tidak ada canvas particle system, WebGL, Three.js, atau video background.
- Animasi difokuskan ke `transform` dan `opacity` supaya ringan di device
  low-end.

## Kustomisasi Warna

Semua warna diatur lewat CSS custom properties di bagian atas `style.css`:

```css
:root {
  --bg: #0b0b0a;       /* background utama */
  --fg: #f0eee4;       /* warna teks utama */
  --accent: #cfff04;   /* neon accent 1 (lime) */
  --accent-2: #7c6fff; /* neon accent 2 (violet) */
}
```

Ganti nilai-nilai ini untuk theming ulang seluruh website tanpa perlu cari
satu per satu di CSS.
