const FLAG_US = '<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#b22234"/><rect y="1.23" width="24" height="1.23" fill="#fff"/><rect y="3.69" width="24" height="1.23" fill="#fff"/><rect y="6.15" width="24" height="1.23" fill="#fff"/><rect y="8.62" width="24" height="1.23" fill="#fff"/><rect y="11.08" width="24" height="1.23" fill="#fff"/><rect y="13.54" width="24" height="1.23" fill="#fff"/><rect width="9.6" height="8.62" fill="#3c3b6e"/></svg>';
const FLAG_ES = '<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#c60b1e"/><rect y="4" width="24" height="8" fill="#ffc400"/></svg>';

const translations = {
  es: {
    "a11y.skip": "Saltar al contenido",
    "nav.home": "Inicio",
    "nav.about": "Quiénes Somos",
    "nav.images": "Imágenes",
    "nav.donate": "Donar",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    "hero.issue": "Edición 01 · Miami · 2026",
    "hero.headline": "Cada rostro tiene una <em>historia</em> que contar.",
    "hero.lede": "Documentamos la realidad diaria de las personas que el mundo ignora — y convertimos cada aporte en comida, abrigo y dignidad en las calles de Miami.",
    "hero.cta": "<span>Apoya la causa</span><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/><polyline points='12 5 19 12 12 19'/></svg>",

    "about.eyebrow": "Nuestra misión",
    "about.lead": "Conducta es una organización sin fines de lucro con sede en Miami que apoya a poblaciones vulnerables a través de la asistencia directa y narrativas que dan visibilidad a las comunidades que el mundo prefiere no ver.",
    "about.p1.title": "Asistencia directa",
    "about.p1.text": "Distribución de alimentos y recursos esenciales para personas en situación de calle.",
    "about.p2.title": "Conexión a programas",
    "about.p2.text": "Acompañamiento hacia programas de ayuda, rehabilitación y reintegración.",
    "about.p3.title": "Documentación",
    "about.p3.text": "Trabajo documental que captura historias auténticas, sin filtro y sin guión.",

    "images.eyebrow": "Galería",
    "images.title": "Imágenes",
    "images.sub": "Momentos que documentan nuestra labor en las calles — crudos, sin montaje, sin filtro.",
    "images.empty": "Pronto compartiremos nuestras historias visuales.",

    "donate.eyebrow": "Apóyanos",
    "donate.title": "Donar",
    "donate.sub": "Cada aporte se convierte en comida, abrigo y sonrisas. El uso de cada donación se documenta en nuestro blog.",
    "donate.instant": "Instantáneo",
    "donate.card": "Tarjeta / Débito",
    "donate.zelleTitle": "Enviar por Zelle",
    "donate.zelleNote": "Directo desde tu app de banca sin comisiones.",
    "donate.paypalTitle": "Donar con PayPal",
    "donate.paypalNote": "Puedes usar tarjeta de crédito o débito, sin necesidad de iniciar sesión.",
    "donate.copy": "Copiar correo",
    "donate.paypal": "Donar con PayPal",

    "blog.eyebrow": "Últimas historias",
    "blog.title": "Blog",
    "blog.sub": "Crónicas, actualizaciones y el uso transparente de cada donación.",
    "blog.loading": "Cargando publicaciones…",
    "blog.empty": "No hay publicaciones todavía.",
    "blog.error": "Error cargando publicaciones.",

    "admin.title": "Nueva publicación",
    "admin.sub": "Completa el formulario y copia el JSON generado en posts.json en GitHub.",
    "admin.postTitle": "Título del post",
    "admin.postDate": "Fecha",
    "admin.postImage": "URL de imagen",
    "admin.postBody": "Contenido",
    "admin.generate": "Generar JSON",
    "admin.outputTitle": "JSON generado",
    "admin.copy": "Copiar",
    "admin.step1": "Abre posts.json en GitHub.",
    "admin.step2": "Pega este objeto dentro del array [ … ], separado por una coma si ya hay posts.",
    "admin.step3": "Haz commit del cambio. Vercel redeploya automáticamente.",

    "contact.eyebrow": "En contacto",
    "contact.title": "Contacto",
    "contact.text": "¿Quieres colaborar, ofrecer recursos o conocer más sobre nuestro trabajo? Escríbenos.",

    "footer.explore": "Explorar",
    "footer.connect": "Conecta",
    "footer.tag": "Sin filtro. Sin guión.",
    "footer.longTag": "Una voz para las personas que el mundo prefiere no ver. Miami, Florida.",
    "footer.ein": "Conducta es una organización sin fines de lucro registrada en Florida. EIN: [TODO]",
    "footer.colophon": "Compuesto en Newsreader e Inter. Sin filtro, sin guión.",

    "toast.copied": "Correo copiado",
    "lang.toggle": FLAG_US + "<span>English</span>",
    "meta.description": "Conducta — Documentamos la realidad diaria sin filtro y sin guión. Somos la voz de las personas que el mundo ignora.",
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.images": "Images",
    "nav.donate": "Donate",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    "hero.issue": "Issue 01 · Miami · 2026",
    "hero.headline": "Every face has a <em>story</em> worth telling.",
    "hero.lede": "We document the daily reality of the people the world ignores — and turn every contribution into food, shelter, and dignity on the streets of Miami.",
    "hero.cta": "<span>Support the cause</span><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/><polyline points='12 5 19 12 12 19'/></svg>",

    "about.eyebrow": "Our mission",
    "about.lead": "Conducta is a Miami-based nonprofit supporting vulnerable populations through direct assistance and storytelling that brings visibility to the communities the world prefers not to see.",
    "about.p1.title": "Direct assistance",
    "about.p1.text": "Distribution of food and essential resources to people experiencing homelessness.",
    "about.p2.title": "Program connection",
    "about.p2.text": "Guidance toward aid, rehabilitation, and reintegration programs.",
    "about.p3.title": "Documentation",
    "about.p3.text": "Documentary work capturing authentic stories — unfiltered and unscripted.",

    "images.eyebrow": "Gallery",
    "images.title": "Images",
    "images.sub": "Moments documenting our work on the streets — raw, unstaged, unfiltered.",
    "images.empty": "We will soon share our visual stories.",

    "donate.eyebrow": "Support us",
    "donate.title": "Donate",
    "donate.sub": "Every contribution becomes food, shelter, and smiles. The use of every donation is documented in our blog.",
    "donate.instant": "Instant",
    "donate.card": "Card / Debit",
    "donate.zelleTitle": "Send via Zelle",
    "donate.zelleNote": "Direct from your banking app with no fees.",
    "donate.paypalTitle": "Donate with PayPal",
    "donate.paypalNote": "You can use credit/debit card, no sign in required.",
    "donate.copy": "Copy email",
    "donate.paypal": "Donate with PayPal",

    "blog.eyebrow": "Latest stories",
    "blog.title": "Blog",
    "blog.sub": "Chronicles, updates, and the transparent use of every donation.",
    "blog.loading": "Loading posts…",
    "blog.empty": "No posts yet.",
    "blog.error": "Error loading posts.",

    "admin.title": "New post",
    "admin.sub": "Fill the form and paste the generated JSON into posts.json on GitHub.",
    "admin.postTitle": "Post title",
    "admin.postDate": "Date",
    "admin.postImage": "Image URL",
    "admin.postBody": "Body text",
    "admin.generate": "Generate JSON",
    "admin.outputTitle": "Generated JSON",
    "admin.copy": "Copy",
    "admin.step1": "Open posts.json on GitHub.",
    "admin.step2": "Paste this object inside the [ … ] array, separated by a comma if other posts exist.",
    "admin.step3": "Commit the change. Vercel redeploys automatically.",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Contact",
    "contact.text": "Want to collaborate, offer resources, or learn more about our work? Get in touch.",

    "footer.explore": "Explore",
    "footer.connect": "Connect",
    "footer.tag": "Unfiltered. Unscripted.",
    "footer.longTag": "A voice for the people the world prefers not to see. Miami, Florida.",
    "footer.ein": "Conducta is a registered nonprofit in Florida. EIN: [TODO]",
    "footer.colophon": "Set in Newsreader & Inter. Unfiltered, unscripted.",

    "toast.copied": "Email copied",
    "lang.toggle": FLAG_ES + "<span>Español</span>",
    "meta.description": "Conducta — We document daily reality unfiltered and unscripted. We are the voice of the people the world ignores.",
  },
};

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("#lang-toggle").forEach((toggle) => {
    toggle.innerHTML = dict["lang.toggle"];
  });

  try { localStorage.setItem("conducta-lang", lang); } catch (e) {}
}

function detectLang() {
  try {
    const saved = localStorage.getItem("conducta-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) {}
  const browser = (navigator.language || navigator.userLanguage || "es").toLowerCase();
  return browser.startsWith("en") ? "en" : "es";
}

function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

let blogPostsCache = null;

async function loadBlogPosts() {
  if (blogPostsCache) return blogPostsCache;
  const res = await fetch("posts.json", { cache: "no-store" });
  if (!res.ok) throw new Error("fetch failed");
  const data = await res.json();
  blogPostsCache = Array.isArray(data) ? data : data.posts || [];
  return blogPostsCache;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function formatPostDate(iso, lang) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString(lang === "en" ? "en-US" : "es-ES", { year: "numeric", month: "long", day: "numeric" });
}

function renderPost(p, lang) {
  const img = p.image
    ? `<div class="blog-post-image"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title || "")}" loading="lazy" /></div>`
    : "";
  const date = formatPostDate(p.date, lang);
  const bodyParas = escapeHtml(p.body || "")
    .split(/\n\n+/)
    .map((para) => `<p>${para.replace(/\n/g, "<br />")}</p>`)
    .join("");
  return `
    <article class="blog-post">
      ${img}
      <div class="blog-post-content">
        <time class="blog-post-date">${escapeHtml(date)}</time>
        <h2 class="blog-post-title">${escapeHtml(p.title || "")}</h2>
        <div class="blog-post-body">${bodyParas}</div>
      </div>
    </article>
  `;
}

async function renderBlog(lang) {
  const container = document.getElementById("blog-posts");
  if (!container) return;
  try {
    const posts = await loadBlogPosts();
    if (!posts.length) {
      container.innerHTML = `<p class="blog-empty">${translations[lang]["blog.empty"]}</p>`;
      return;
    }
    const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
    container.innerHTML = sorted.map((p) => renderPost(p, lang)).join("");
  } catch (e) {
    container.innerHTML = `<p class="blog-error">${translations[lang]["blog.error"]}</p>`;
  }
}

/* ============================================================
   Slideshow
   ============================================================ */

function initSlideshow() {
  const track = document.getElementById("slideshow-track");
  const counter = document.getElementById("slideshow-counter");
  const emptyEl = document.getElementById("slideshow-empty");
  const prevBtn = document.getElementById("slideshow-prev");
  const nextBtn = document.getElementById("slideshow-next");
  const viewport = track ? track.closest(".slideshow-viewport") : null;
  if (!track) return;

  fetch("gallery.json")
    .then((r) => r.ok ? r.json() : [])
    .catch(() => [])
    .then((slides) => {
      if (!slides.length) {
        if (emptyEl) emptyEl.hidden = false;
        if (counter) counter.hidden = true;
        if (prevBtn) prevBtn.hidden = true;
        if (nextBtn) nextBtn.hidden = true;
        return;
      }

      let current = 0;
      let timer = null;
      const INTERVAL = 5000;
      const total = slides.length;

      // Build slides
      slides.forEach((s, i) => {
        const fig = document.createElement("figure");
        fig.className = "slideshow-slide" + (i === 0 ? " active" : "");
        fig.setAttribute("aria-hidden", i === 0 ? "false" : "true");

        const img = document.createElement("img");
        img.alt = s.caption || "";
        img.loading = i <= 1 ? "eager" : "lazy";
        img.src = s.src;
        fig.appendChild(img);

        if (s.caption) {
          const cap = document.createElement("figcaption");
          cap.textContent = s.caption;
          fig.appendChild(cap);
        }

        track.appendChild(fig);
      });

      function updateCounter() {
        if (counter) {
          const cur = String(current + 1).padStart(2, "0");
          const tot = String(total).padStart(2, "0");
          counter.textContent = cur + " / " + tot;
        }
      }

      function goTo(idx) {
        const slideEls = track.querySelectorAll(".slideshow-slide");
        slideEls[current].classList.remove("active");
        slideEls[current].setAttribute("aria-hidden", "true");
        current = ((idx % total) + total) % total;
        slideEls[current].classList.add("active");
        slideEls[current].setAttribute("aria-hidden", "false");
        updateCounter();

        // Preload next image
        const nextIdx = (current + 1) % total;
        const nextImg = slideEls[nextIdx].querySelector("img");
        if (nextImg && nextImg.loading === "lazy") {
          nextImg.loading = "eager";
        }
      }

      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }

      function startTimer() {
        stopTimer();
        timer = setInterval(next, INTERVAL);
      }

      function stopTimer() {
        if (timer) { clearInterval(timer); timer = null; }
      }

      updateCounter();
      startTimer();

      if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startTimer(); });
      if (nextBtn) nextBtn.addEventListener("click", () => { next(); startTimer(); });

      // Pause on hover
      if (viewport) {
        viewport.addEventListener("mouseenter", stopTimer);
        viewport.addEventListener("mouseleave", startTimer);
      }

      // Swipe on mobile
      let touchStartX = 0;
      let touchEndX = 0;
      if (viewport) {
        viewport.addEventListener("touchstart", (e) => {
          touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        viewport.addEventListener("touchend", (e) => {
          touchEndX = e.changedTouches[0].screenX;
          const diff = touchStartX - touchEndX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) next(); else prev();
            startTimer();
          }
        }, { passive: true });
      }

      // Keyboard
      track.closest(".slideshow").addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { prev(); startTimer(); }
        if (e.key === "ArrowRight") { next(); startTimer(); }
      });
    });
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const close = document.getElementById("mobile-menu-close");
  if (!toggle || !menu) return;

  const open = () => {
    menu.classList.add("open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", open);
  if (close) close.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
}

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const update = () => {
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion) {
    document.querySelectorAll(".section, .hero").forEach((section) => {
      section.querySelectorAll(".reveal").forEach((el, i) => {
        el.style.transitionDelay = i * 100 + "ms";
      });
    });
  }

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

function initParallax() {
  const heroLogo = document.querySelector(".hero-logo");
  if (!heroLogo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  heroLogo.classList.add("parallax-target");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        heroLogo.style.transform = "translateY(" + (y * 0.12) + "px)";
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a[href^='#']");
  if (!sections.length || !navLinks.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((a) => {
          a.classList.toggle("nav-active", a.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { threshold: 0.15, rootMargin: "-96px 0px -40% 0px" });
  sections.forEach((s) => io.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = detectLang();
  applyLang(currentLang);
  renderBlog(currentLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyLang(currentLang);
      renderBlog(currentLang);
    });
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        showToast(translations[currentLang]["toast.copied"]);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast(translations[currentLang]["toast.copied"]);
      }
    });
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initSlideshow();
  initMobileMenu();
  initHeaderScroll();
  initReveal();
  initParallax();
  initActiveNav();
});
