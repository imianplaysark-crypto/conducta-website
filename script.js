const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Quiénes Somos",
    "nav.images": "Imágenes",
    "nav.donate": "Donar",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "label.mission": "Misión",
    "label.work": "Trabajo",
    "label.support": "Apoyo",
    "label.diary": "Diario",
    "label.contact": "Contacto",
    "hero.tag": "Documentamos la realidad diaria sin filtro y sin guión.<br />Somos la voz de las personas que el mundo ignora.",
    "hero.cta": "Apoya la causa",
    "about.title": "Quiénes Somos",
    "about.lead": "Conducta es una organización sin fines de lucro con sede en Miami que apoya a poblaciones vulnerables a través de la asistencia directa y narrativas que dan visibilidad a las comunidades que el mundo prefiere no ver.",
    "about.p1.title": "Asistencia directa",
    "about.p1.text": "Distribución de alimentos y recursos esenciales para personas en situación de calle.",
    "about.p2.title": "Conexión a programas",
    "about.p2.text": "Acompañamiento hacia programas de ayuda, rehabilitación y reintegración.",
    "about.p3.title": "Documentación",
    "about.p3.text": "Trabajo documental que captura historias auténticas, sin filtro y sin guión.",
    "images.title": "Imágenes",
    "images.sub": "Momentos que documentan nuestra labor.",
    "donate.title": "Donar",
    "donate.sub": "Cada aporte se convierte en comida, abrigo y sonrisas. El uso de las donaciones se muestra en nuestra sección de blog.",
    "donate.blogCta": "Ver Blog",
    "donate.copy": "Copiar correo",
    "donate.paypal": "Donar con PayPal",
    "donate.paypalNote": "Puedes usar tarjeta de crédito o débito, sin necesidad de iniciar sesión.",
    "blog.title": "Blog",
    "blog.sub": "Historias desde las calles de Miami.",
    "blog.loading": "Cargando publicaciones…",
    "blog.empty": "No hay publicaciones todavía.",
    "blog.error": "Error cargando publicaciones.",
    "blog.read": "Leer",
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
    "contact.title": "Contacto",
    "contact.text": "¿Quieres colaborar, ofrecer recursos o conocer más sobre nuestro trabajo? Escríbenos.",
    "toast.copied": "Correo copiado",
    "lang.toggle": "🇺🇸 English",
    "meta.description": "Conducta — Documentamos la realidad diaria sin filtro y sin guión. Somos la voz de las personas que el mundo ignora.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.images": "Images",
    "nav.donate": "Donate",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "label.mission": "Mission",
    "label.work": "Work",
    "label.support": "Support",
    "label.diary": "Diary",
    "label.contact": "Contact",
    "hero.tag": "We document daily reality unfiltered and unscripted.<br />We are the voice of the people the world ignores.",
    "hero.cta": "Support the cause",
    "about.title": "About Us",
    "about.lead": "Conducta is a Miami-based nonprofit supporting vulnerable populations through direct assistance and storytelling that brings visibility to the communities the world prefers not to see.",
    "about.p1.title": "Direct assistance",
    "about.p1.text": "Distribution of food and essential resources to people experiencing homelessness.",
    "about.p2.title": "Program connection",
    "about.p2.text": "Guidance toward aid, rehabilitation, and reintegration programs.",
    "about.p3.title": "Documentation",
    "about.p3.text": "Documentary work capturing authentic stories — unfiltered and unscripted.",
    "images.title": "Images",
    "images.sub": "Moments that document our work.",
    "donate.title": "Donate",
    "donate.sub": "Every contribution becomes food, shelter, and smiles. The use of donations is shown in our blog section.",
    "donate.blogCta": "View Blog",
    "donate.copy": "Copy email",
    "donate.paypal": "Donate with PayPal",
    "donate.paypalNote": "You can use credit/debit card, no sign in required.",
    "blog.title": "Blog",
    "blog.sub": "Stories from the streets of Miami.",
    "blog.loading": "Loading posts…",
    "blog.empty": "No posts yet.",
    "blog.error": "Error loading posts.",
    "blog.read": "Read",
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
    "contact.title": "Contact",
    "contact.text": "Want to collaborate, offer resources, or learn more about our work? Get in touch.",
    "toast.copied": "Email copied",
    "lang.toggle": "🇪🇸 Español",
    "meta.description": "Conducta — We document daily reality unfiltered and unscripted. We are the voice of the people the world ignores.",
  },
};

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("#lang-toggle, .lang-toggle-mobile").forEach((btn) => {
    btn.textContent = dict["lang.toggle"];
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
    toast.className = "toast fixed left-1/2 -translate-x-1/2 bottom-8 z-50 bg-ink text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-medium shadow-xl opacity-0 translate-y-4 pointer-events-none transition-all duration-300";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.remove("opacity-0", "translate-y-4");
  toast.classList.add("opacity-100", "translate-y-0");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 2200);
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

function renderPostCard(p, lang, opts = {}) {
  const excerptLength = opts.excerpt || 0;
  const img = p.image
    ? `<div class="aspect-[16/10] overflow-hidden bg-ink/5 mb-5"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title || "")}" loading="lazy" class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div>`
    : `<div class="aspect-[16/10] bg-ink/5 mb-5 flex items-center justify-center font-serif italic text-3xl text-ink/20">Conducta</div>`;
  const date = formatPostDate(p.date, lang);
  const rawBody = (p.body || "").replace(/\s+/g, " ").trim();
  const excerpt = excerptLength > 0 && rawBody.length > excerptLength
    ? rawBody.slice(0, excerptLength).trim() + "…"
    : rawBody;
  return `
    <article class="group flex flex-col">
      ${img}
      <time class="block text-[10px] tracking-[0.22em] uppercase text-ink/50 font-medium mb-3">${escapeHtml(date)}</time>
      <h3 class="font-serif italic text-2xl md:text-3xl font-medium text-ink leading-[1.15] mb-3">${escapeHtml(p.title || "")}</h3>
      ${excerpt ? `<p class="text-sm text-ink/70 leading-relaxed">${escapeHtml(excerpt)}</p>` : ""}
    </article>
  `;
}

function renderFullPost(p, lang) {
  const img = p.image
    ? `<div class="aspect-[16/9] overflow-hidden bg-ink/5 mb-8"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title || "")}" loading="lazy" class="w-full h-full object-cover" /></div>`
    : "";
  const date = formatPostDate(p.date, lang);
  const bodyParas = escapeHtml(p.body || "")
    .split(/\n\n+/)
    .map((para) => `<p class="text-[17px] leading-[1.75] text-ink/80 mb-5">${para.replace(/\n/g, "<br />")}</p>`)
    .join("");
  return `
    <article class="flex flex-col">
      ${img}
      <time class="block text-[10px] tracking-[0.22em] uppercase text-ink/50 font-medium mb-3">${escapeHtml(date)}</time>
      <h2 class="font-serif italic text-3xl md:text-4xl font-medium text-ink leading-[1.12] mb-5">${escapeHtml(p.title || "")}</h2>
      <div>${bodyParas}</div>
    </article>
  `;
}

async function renderBlog(lang) {
  const fullContainer = document.getElementById("blog-posts");
  const teaserContainer = document.getElementById("blog-teaser-grid");

  if (!fullContainer && !teaserContainer) return;

  try {
    const posts = await loadBlogPosts();
    const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

    if (fullContainer) {
      if (!sorted.length) {
        fullContainer.innerHTML = `<p class="font-serif italic text-ink/50">${translations[lang]["blog.empty"]}</p>`;
      } else {
        fullContainer.innerHTML = sorted.map((p) => renderFullPost(p, lang)).join("");
      }
    }

    if (teaserContainer) {
      if (!sorted.length) {
        teaserContainer.innerHTML = `<p class="font-serif italic text-ink/50">${translations[lang]["blog.empty"]}</p>`;
      } else {
        teaserContainer.innerHTML = sorted.slice(0, 3).map((p) => renderPostCard(p, lang, { excerpt: 140 })).join("");
      }
    }
  } catch (e) {
    if (fullContainer) fullContainer.innerHTML = `<p class="font-serif italic text-ink/50">${translations[lang]["blog.error"]}</p>`;
    if (teaserContainer) teaserContainer.innerHTML = `<p class="font-serif italic text-ink/50">${translations[lang]["blog.error"]}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = detectLang();
  applyLang(currentLang);
  renderBlog(currentLang);

  const toggleButtons = document.querySelectorAll("#lang-toggle, .lang-toggle-mobile");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyLang(currentLang);
      renderBlog(currentLang);
    });
  });

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast(translations[currentLang]["toast.copied"]);
    });
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("hidden") === false;
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
