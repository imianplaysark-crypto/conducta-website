const FLAG_US = '<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#b22234"/><rect y="1.23" width="24" height="1.23" fill="#fff"/><rect y="3.69" width="24" height="1.23" fill="#fff"/><rect y="6.15" width="24" height="1.23" fill="#fff"/><rect y="8.62" width="24" height="1.23" fill="#fff"/><rect y="11.08" width="24" height="1.23" fill="#fff"/><rect y="13.54" width="24" height="1.23" fill="#fff"/><rect width="9.6" height="8.62" fill="#3c3b6e"/></svg>';
const FLAG_ES = '<svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#c60b1e"/><rect y="4" width="24" height="8" fill="#ffc400"/></svg>';

const translations = {
  es: {
    "nav.about": "Quiénes Somos",
    "nav.images": "Imágenes",
    "nav.donate": "Donar",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.home": "Inicio",
    "hero.tag": "Documentamos la realidad diaria sin filtro y sin guión.<br />Somos la voz de las personas que el mundo ignora.",
    "hero.location": "Miami · Sin fines de lucro",
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
    "footer.tag": "Sin filtro. Sin guión.",
    "toast.copied": "Correo copiado",
    "lang.toggle": FLAG_US + "<span>English</span>",
    "meta.description": "Conducta — Documentamos la realidad diaria sin filtro y sin guión. Somos la voz de las personas que el mundo ignora.",
  },
  en: {
    "nav.about": "About",
    "nav.images": "Images",
    "nav.donate": "Donate",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.home": "Home",
    "hero.tag": "We document daily reality unfiltered and unscripted.<br />We are the voice of the people the world ignores.",
    "hero.location": "Miami · Nonprofit",
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
    "donate.paypal": "Go to PayPal.me",
    "donate.paypalNote": "You can use credit/debit card, no sign in required.",
    "blog.title": "Blog",
    "blog.sub": "Stories from the streets of Miami.",
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
    "contact.title": "Contact",
    "contact.text": "Want to collaborate, offer resources, or learn more about our work? Get in touch.",
    "footer.tag": "Unfiltered. Unscripted.",
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

  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.innerHTML = dict["lang.toggle"];

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
});
