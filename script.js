/* ============================================
   FANDI — PORTFOLIO SCRIPT
   Pure vanilla JavaScript. No frameworks.
   ============================================ */

/* ---------------------------------------------
   1. DATA CONFIG — edit everything here
   --------------------------------------------- */
const portfolioData = {
  name: "Fandi",
  role: "Web Developer",
  bio: "somene not Dev, ge bukan sesorang devloper yang ahli dalam bidang coding gw masi memperlajarin apa itu coding.",

  typingRoles: [
    "WEB DEVELOPER",
    "PROGRAMMER",
    "SELF-TAUGHT CODER",
    "NIGHT OWL DEBUGGER"
  ],

  social: {
    whatsapp: "https://wa.me/628318676760",
    github: "https://github.com/FanXpL",
    telegram: "https://t.me/Fanzasz",
    instagram: "https://instagram.com/xploitfann99"
  },

  journey: [
    {
      year: "2023",
      title: "Mulai menarik apa itu coding",
      description: "Buka all sosmed liatin orang cara ngoding dan apa itu coding.",
      tech: ["HTML", "CSS", "JS"]
    },
    {
      year: "2024",
      title: "Mulai dengan JavaScript",
      description: "Mulai dari JS saya tau bahasa itu di karnakan bikin project bot Wahtsapp multi fungsi dan juga bot Tele.",
      tech: ["JavaScript", "GitHup", "VpS"]
    },
    {
      year: "2025",
      title: "Membuat web kecil-kecil",
      description: "Dengan membuat beberapa web yang moderen di jaman sekrang dan juga di tahun aku suda paham apa itu ngoding dan aku juga mulai paham apa itu ApiKey.",
      tech: ["JS", "VpS", "ApiKey"]
    },
    {
      year: "2026",
      title: "Yah di tahun ini",
      description: "Saya suda mulai fokus membangun web web besar dari web yang semua ya memakai apikey dan memakai database, saya mulai paham semua bahasa programer.",
      tech: ["JS", "GO", "PayThon"]
    }
  ],

  future: [
    { title: "WahtsApp Bot`s", description: "Membangun Bot WhatsApp multi fungsi sampai sekarang!." },
    { title: "Web-Musik", description: "Saya mebuat web musik ini untuk menguji seberapa paham aku menggunakan apikey." },
    { title: "VibesCoding", description: "Nah di jaman sekrang seseorang dev harus jago dalam promprt Ai, dan dari situ saya setiap hari melatih saya dengan mencoba prompt Ai." },
    { title: "VpS", description: "Saya juga mepelajarin cara menggunakan vps sebagai kompunen utama saya untuk membangun database." },
    { title: "Web-Protofolio", description: "Ini dia, di fase sekrang aku sangat fokus untuk membangun web protofolio ini karna web protofolio ini penting untuk bukti skil skil aku di uji." },
    { title: "Scurity", description: "Saya sangan blom mengerti apa itu scurity dan saya masi meperlajari ya." }
  ],

  skills: [
    "HTML", "CSS", "JS", "PYTHON", "GO", "DB", "VPS", "HCKING"
  ],

  projects: [
    {
      name: "NoTCoRe-Song V1",
      description: "Web Musik yang aku buat untuk mengetes skill aku dalam menggunakan apikey dan ya web ini mampu menyamakan spoltpay tanpa iklan.",
      tech: ["JavaScript", "CSS", "HTML", "APIKEY"],
      image: "https://placehold.co/800x500/171715/cfff04?text=NoTCoRe-Song",
      github: "https://github.com/FanXpL",
      demo: "wa.me/FanXpL",
      size: "wide"
    },
    {
      name: "WhatsApp BoT`s Multi Fungsi",
      description: "Bot yang mempunyai berbagai fitur berguna di wa dan muda digunakan.",
      tech: ["JavaScript", "Apikey", "DataBase"],
      image: "https://placehold.co/800x500/171715/7c6fff?text=WhatsApp BoT",
      github: "https://github.com/FanXpL",
      demo: "wa.me/FanXpL",
      size: "narrow"
    },
    {
      name: "Protofolio NeoBrutal",
      description: "Web Protoflio adalah bukti skil ngoding kita di dalam dunia ngoding ini.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "JSX", "GO"],
      image: "https://placehold.co/800x500/171715/f0eee4?text=Protofolio",
      github: "https://github.com/FanXpL",
      demo: "wa.me/FanXpL",
      size: "narrow"
    },
    {
      name: "Tools ApiKey",
      description: "Aku sangat penasaran apa itu fungsi dari apikey, tapi itu dulu sekrang aku mulai tau apa itu apikey.",
      tech: ["JAVASCRIPT", "SCARPER"],
      image: "https://placehold.co/800x500/171715/cfff04?text=ApiKey",
      github: "https://github.com/FanXpL",
      demo: "wa.me/FanXpL",
      size: "wide"
    }
  ],

  archive: [
    { image: "https://files.catbox.moe/duojtr.jpg", caption: "My Waifu", category: "Elaina", year: "Always Love You" },
    { image: "https://files.catbox.moe/313lxq.jpg", caption: "My Waifu", category: "Mahiru", year: "Always Love You" },
    { image: "https://files.catbox.moe/ogeyi0.jpg", caption: "My Waifu", category: "Kurumi", year: "Always Love You" },
    { image: "https://files.catbox.moe/cm9rxj.jpg", caption: "My Waifu", category: "Mugi", year: "Always Love You" },
    { image: "https://files.catbox.moe/or32ri.jpg", caption: "My Waifu", category: "Lain", year: "Always Love You" },
    { image: "https://files.catbox.moe/7l6z13.jpg", caption: "My Waifu", category: "Ram", year: "Always Love You" },
    { image: "https://files.catbox.moe/2xer3m.jpg", caption: "My Waifu", category: "Rem", year: "Always Love You" },
    { image: "https://files.catbox.moe/dfvkfq.jpg", caption: "My Waifu", category: "Nahadia", year: "Always Love You" }
  ],

  gallery: [
    { image: "https://files.catbox.moe/v975xm.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/pod5vs.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/boyl17.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/o5iryb.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/yimuov.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/2vv294.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/82ojeu.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" },
    { image: "https://files.catbox.moe/ufkobi.jpg", caption: "Loser Core", category: "Personal", year: "i`m loser core" }
  ]
};

/* Combined list used by the lightbox so prev/next can move across both galleries */
let lightboxImages = [];
let lightboxIndex = 0;

/* ---------------------------------------------
   2. NAVIGATION
   --------------------------------------------- */
function initNavigation() {
  const nav = document.getElementById("nav");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll("[data-nav]");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });

  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute("href")));
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(sec => { if (sec) activeObserver.observe(sec); });
}

/* ---------------------------------------------
   3. SCROLL PROGRESS
   --------------------------------------------- */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

/* ---------------------------------------------
   4. TYPING EFFECT (hero role)
   --------------------------------------------- */
function initTyping() {
  const el = document.getElementById("typedText");
  const roles = portfolioData.typingRoles;
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}

/* ---------------------------------------------
   5. SCROLL REVEAL (generic [data-reveal] + counters)
   --------------------------------------------- */
function initAnimations() {
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Counter animation
  const counterEl = document.querySelector("[data-counter]");
  if (counterEl) {
    const target = parseInt(counterEl.dataset.counter, 10);
    let animated = false;
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          let current = 0;
          const step = () => {
            current++;
            counterEl.textContent = current;
            if (current < target) requestAnimationFrame(() => setTimeout(step, 220));
          };
          step();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterObserver.observe(counterEl);
  }
}

/* ---------------------------------------------
   6. TIMELINE (coding journey)
   --------------------------------------------- */
function initTimeline() {
  const container = document.getElementById("timeline");
  const fill = document.createElement("div");
  fill.className = "timeline-fill";
  container.appendChild(fill);

  portfolioData.journey.forEach(item => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <p class="timeline-year">${item.year}</p>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-desc">${item.description}</p>
      <div class="timeline-tech">${item.tech.map(t => `<span>${t}</span>`).join("")}</div>
    `;
    container.appendChild(el);
  });

  const items = container.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.3 });
  items.forEach(item => timelineObserver.observe(item));

  // Line fill follows scroll progress through the timeline block
  window.addEventListener("scroll", () => {
    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    const progressed = Math.min(Math.max(vh * 0.6 - rect.top, 0), total);
    const pct = total > 0 ? (progressed / total) * 100 : 0;
    fill.style.height = `${pct}%`;
  }, { passive: true });
}

/* ---------------------------------------------
   7. FUTURE GOALS
   --------------------------------------------- */
function initFuture() {
  const grid = document.getElementById("futureGrid");
  grid.innerHTML = portfolioData.future.map(item => `
    <div class="future-block" data-reveal>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </div>
  `).join("");
  document.querySelectorAll(".future-block[data-reveal]").forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); });
    }, { threshold: 0.15 });
    obs.observe(el);
  });
}

/* ---------------------------------------------
   8. SKILLS
   --------------------------------------------- */
function initSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <span class="skill-name">${skill}</span>
    </div>
  `).join("");
}

/* ---------------------------------------------
   9. PROJECTS
   --------------------------------------------- */
function initProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = portfolioData.projects.map(p => `
    <article class="project-card project-card--${p.size}">
      <div class="project-img-wrap">
        <img class="project-img" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="project-body">
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener">GITHUB &#8599;</a>
          <a href="${p.demo}" target="_blank" rel="noopener">LIVE DEMO &#8599;</a>
        </div>
      </div>
    </article>
  `).join("");

  const cards = grid.querySelectorAll(".project-card");
  const projObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("in-view"), i * 80);
        projObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => projObserver.observe(card));
}

/* ---------------------------------------------
   10. LOSER CORE ARCHIVE (masonry) + GALLERY
   --------------------------------------------- */
function initGallery() {
  const archiveGrid = document.getElementById("archiveGrid");
  const galleryGrid = document.getElementById("galleryGrid");

  // Build combined lightbox source: archive first, then gallery
  lightboxImages = [...portfolioData.archive, ...portfolioData.gallery];

  archiveGrid.innerHTML = portfolioData.archive.map((item, i) => `
    <div class="archive-item" data-index="${i}">
      <img src="${item.image}" alt="${item.caption}" loading="lazy">
      <div class="archive-caption">
        <p class="cap-title">${item.caption}</p>
        <p class="cap-meta">${item.category} — ${item.year}</p>
      </div>
    </div>
  `).join("");

  const galleryOffset = portfolioData.archive.length;
  galleryGrid.innerHTML = portfolioData.gallery.map((item, i) => `
    <div class="gallery-item" data-index="${galleryOffset + i}">
      <img src="${item.image}" alt="${item.caption}" loading="lazy">
    </div>
  `).join("");

  // Reveal animation for archive items
  const archiveItems = archiveGrid.querySelectorAll(".archive-item");
  const archiveObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("in-view"), (i % 4) * 70);
        archiveObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  archiveItems.forEach(item => archiveObserver.observe(item));

  // Click handlers -> lightbox
  document.querySelectorAll(".archive-item, .gallery-item").forEach(el => {
    el.addEventListener("click", () => {
      openLightbox(parseInt(el.dataset.index, 10));
    });
  });
}

/* ---------------------------------------------
   11. LIGHTBOX
   --------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const meta = document.getElementById("lightboxMeta");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  function render() {
    const item = lightboxImages[lightboxIndex];
    if (!item) return;
    img.src = item.image;
    img.alt = item.caption;
    title.textContent = item.caption;
    meta.textContent = `${item.category} — ${item.year}`;
  }

  window.openLightbox = function (index) {
    lightboxIndex = index;
    render();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }
  function next() {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    render();
  }
  function prev() {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    render();
  }

  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

/* ---------------------------------------------
   12. CONTACT + FOOTER SOCIAL LINKS
   --------------------------------------------- */
const socialIcons = {
  whatsapp: `<svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" stroke-width="1.8"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`
};

function initContact() {
  const links = document.getElementById("contactLinks");
  const footerSocial = document.getElementById("footerSocial");
  const entries = Object.entries(portfolioData.social);

  links.innerHTML = entries.map(([key, url]) => `
    <a class="contact-link" href="${url}" target="_blank" rel="noopener">
      ${socialIcons[key] || ""}
      <span>${key.toUpperCase()}</span>
    </a>
  `).join("");

  footerSocial.innerHTML = entries.map(([key, url]) => `
    <a href="${url}" target="_blank" rel="noopener">${key.toUpperCase()}</a>
  `).join("");

  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------------------------------------------
   13. CUSTOM CURSOR
   --------------------------------------------- */
function initCursor() {
  if (window.matchMedia("(max-width: 860px)").matches) return;
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll("a, button, .skill-card, .project-card, .archive-item, .gallery-item").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("hovered"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hovered"));
  });
}

/* ---------------------------------------------
   INIT — run everything once DOM is ready
   --------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollProgress();
  initTyping();
  initTimeline();
  initFuture();
  initSkills();
  initProjects();
  initGallery();
  initLightbox();
  initContact();
  initCursor();
  initAnimations();
});
