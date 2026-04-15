const translations = {
  es: {
    "nav.about": "Quiénes Somos",
    "nav.images": "Imágenes",
    "nav.donate": "Donar",
    "nav.contact": "Contacto",
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
    "images.sub": "Momentos del trabajo en las calles de Miami.",
    "donate.title": "Donar",
    "donate.sub": "Cada aporte se convierte en comida, abrigo y dignidad. Gracias por sumar.",
    "donate.copy": "Copiar correo",
    "donate.paypal": "Donar con PayPal",
    "contact.title": "Contacto",
    "contact.text": "¿Quieres colaborar, ofrecer recursos o conocer más sobre nuestro trabajo? Escríbenos.",
    "footer.tag": "Sin filtro. Sin guión.",
    "toast.copied": "Correo copiado",
    "lang.toggle": "EN",
    "meta.description": "Conducta — Documentamos la realidad diaria sin filtro y sin guión. Somos la voz de las personas que el mundo ignora.",
  },
  en: {
    "nav.about": "About",
    "nav.images": "Images",
    "nav.donate": "Donate",
    "nav.contact": "Contact",
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
    "images.sub": "Moments from the work on the streets of Miami.",
    "donate.title": "Donate",
    "donate.sub": "Every contribution becomes food, shelter, and dignity. Thank you for joining in.",
    "donate.copy": "Copy email",
    "donate.paypal": "Donate with PayPal",
    "contact.title": "Contact",
    "contact.text": "Want to collaborate, offer resources, or learn more about our work? Get in touch.",
    "footer.tag": "Unfiltered. Unscripted.",
    "toast.copied": "Email copied",
    "lang.toggle": "ES",
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
  if (toggle) toggle.textContent = dict["lang.toggle"];

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

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = detectLang();
  applyLang(currentLang);

  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyLang(currentLang);
  });

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
