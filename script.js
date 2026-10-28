(function () {
  "use strict";

  document.documentElement.classList.add("js");

  // 1. Translations
  const LANG = {
    fr: {
      nav_about: "À propos",
      nav_skills: "Compétences",
      nav_projects: "Projets",
      nav_edu: "Parcours",
      nav_cv: "CV",
      hero_status: "Disponible pour un stage",
      hero_desc:
        'Fort d\'un parcours complet en <strong class="font-medium text-slate-900 dark:text-white">Informatique, IA et Traitement du Signal et des Images</strong>, j\'apporte une vision globale pour traiter, analyser et valoriser des données complexes au service de projets techniques exigeants. <strong class="font-medium text-slate-900 dark:text-white">À la recherche d\'un stage de 4 mois dès avril 2027.</strong>',
      hero_cta: "Découvrir mes projets",
      about_title: "À propos",
      about_p1:
        "Mon parcours s'appuie sur une progression académique complémentaire : <strong class=\"font-medium text-slate-900 dark:text-white\">une Licence en Informatique</strong> pour les bases en génie logiciel et systèmes, <strong class=\"font-medium text-slate-900 dark:text-white\">un Master 1 en Intelligence Artificielle</strong> axé sur la modélisation et l'apprentissage automatique, et <strong class=\"font-medium text-slate-900 dark:text-white\">actuellement un Master 1 en Traitement du Signal et des Images</strong> pour l'analyse de données complexes et multidimensionnelles.<br><br>Cette triple culture me permet d'intervenir sur toute la chaîne technique — de l'architecture logicielle et l'ingénierie de données (Python, SQL, Data Warehouse) jusqu'à la modélisation (Machine/Deep Learning, filtrage numérique). <strong class=\"font-medium text-slate-900 dark:text-white\">Mes projets académiques et mon immersion au sein de la DSI d'un grand groupe industriel m'ont permis d'élargir mes horizons et de mieux appréhender les enjeux réels du secteur.</strong>",
      about_p2:
        "Je suis actuellement <strong class=\"font-medium text-slate-900 dark:text-white\">à la recherche d'un stage de 4 à 6 mois à partir d'avril 2027</strong> (ainsi qu'une <strong class=\"font-medium text-slate-900 dark:text-white\">alternance en M2</strong>), au sein d'une équipe travaillant sur des problématiques <strong class=\"font-medium text-slate-900 dark:text-white\">de Data, d'IA, de Signal/Image ou d'Ingénierie Logicielle.</strong>",
      skills_kicker: "Compétences",
      skills_title: "Ma stack technique",
      skills_desc:
        "Des outils orientés vision par ordinateur, intelligence artificielle et ingénierie logicielle.",
      skill_cv: "Vision par ordinateur & apprentissage profond",
      skill_ds: "Science des données & apprentissage automatique",
      skill_se: "Ingénierie logicielle & systèmes",
      skill_data: "Données & outils de développement",
      projects_title: "Ce que j'ai construit",
      view_code: "Voir le code",
      edu_title: "Formation",
      edu_current: "En cours",
      edu_signal_master: "Master 1 Traitement du signal et des images",
      edu_signal_master_period: "2026 — 2027",
      edu_signal_uni: "Université du Littoral Côte d'Opale — France",
      edu_ai_master: "Master 1 Intelligence Artificielle",
      edu_ai_master_period: "2025 — 2026",
      edu_ai_uni: "Université de Bejaia — Algérie",
      edu_licence: "Licence Informatique",
      edu_bac: "Baccalauréat — Techniques Mathématiques",
      edu_licence_period: "2022 — 2025",
      edu_bac_period: "2019 — 2022",
      edu_hs: "Lycée Lala Fatma N'soumer — Algérie",
      contact_title: "Travaillons<br>ensemble",
      contact_desc:
        "Vous avez un projet, une question ou une opportunité de stage ? N'hésitez pas à me contacter.",
      contact_cta: "M'envoyer un email",
    },
    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_edu: "Education",
      nav_cv: "CV",
      hero_status: "Available for internship",
      hero_desc:
        'Backed by a comprehensive background in <strong class="font-medium text-slate-900 dark:text-white">Computer Science, AI, and Signal & Image Processing</strong>, I bring a holistic perspective to processing, analyzing, and extracting value from complex data for demanding technical projects. <strong class="font-medium text-slate-900 dark:text-white">Seeking a 4-month internship starting April 2027.</strong>',
      hero_cta: "Explore projects",
      about_title: "About me",
      about_p1:
        'My background is built on a complementary academic path, a <strong class="font-medium text-slate-900 dark:text-white">Bachelor\'s degree in Computer Science</strong> for software engineering and systems foundations, a <strong class="font-medium text-slate-900 dark:text-white">Master\'s (M1) in Artificial Intelligence</strong> focused on modeling and machine learning, and <strong class="font-medium text-slate-900 dark:text-white">currently a Master\'s (M1) in Signal and Image Processing</strong> for complex, multidimensional data analysis.<br><br>This triple skill set allows me to operate across the entire technical pipeline, from software architecture and data engineering (Python, SQL, Data Warehouse) to modeling (Machine/Deep Learning, digital filtering). <strong class="font-medium text-slate-900 dark:text-white">My academic projects and immersion within the IT department of a major industrial group broadened my horizons and gave me a clear understanding of real world industry challenges.</strong>',
      about_p2:
        'I am currently <strong class="font-medium text-slate-900 dark:text-white">seeking a 4-month internship starting April 2027</strong> (as well as a <strong class="font-medium text-slate-900 dark:text-white">Master 2 work-study program</strong>) within a team working on <strong class="font-medium text-slate-900 dark:text-white">Data, AI, Signal/Image Processing, or Software Engineering</strong> challenges.',
      skills_kicker: "Skills",
      skills_title: "Tech Stack",
      skills_desc:
        "Tools focused on computer vision, artificial intelligence, and software engineering.",
      skill_cv: "Computer Vision & Deep Learning",
      skill_ds: "Data Science & Machine Learning",
      skill_se: "Software Engineering & Systems",
      skill_data: "Data & Development Tools",
      projects_title: "What I've built",
      view_code: "View code",
      edu_title: "Education",
      edu_current: "Ongoing",
      edu_signal_master: "Master's in Signal and Image Processing",
      edu_signal_master_period: "2026 — 2027",
      edu_signal_uni: "University of the Littoral Opal Coast — France",
      edu_ai_master: "Master's in Artificial Intelligence",
      edu_ai_master_period: "2025 — 2026",
      edu_ai_uni: "University of Bejaia — Algeria",
      edu_licence: "BSc in Computer Science",
      edu_bac: "High School Diploma in Technical Mathematics",
      edu_licence_period: "2022 — 2025",
      edu_bac_period: "2019 — 2022",
      edu_hs: "Lala Fatma N'soumer High School — Algeria",
      contact_title: "Let's work<br>together",
      contact_desc:
        "Have a project, a question, or an internship opportunity? Reach out to me.",
      contact_cta: "Send me an email",
    },
  };

  let lang = "fr";
  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    const languageButton = document.getElementById("lang-btn");
    const nextLanguage = l === "fr" ? "EN" : "FR";
    languageButton.textContent = nextLanguage;
    languageButton.setAttribute(
      "aria-label",
      l === "fr" ? "Passer le site en anglais" : "Switch website to French",
    );
    const dict = LANG[l];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (dict[el.getAttribute("data-i18n")])
        el.innerHTML = dict[el.getAttribute("data-i18n")];
    });
    if (!document.getElementById("projects-list").classList.contains("hidden"))
      renderProjects(window.loadedRepos);
  }
  document
    .getElementById("lang-btn")
    .addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr"));

  // 2. Dark Mode
  let isDark = localStorage.theme === "dark" || !("theme" in localStorage);
  function applyTheme() {
    const themeButton = document.getElementById("theme-btn");
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.getElementById("icon-moon").classList.add("hidden");
      document.getElementById("icon-sun").classList.remove("hidden");
      themeButton.setAttribute("aria-label", "Activer le mode clair");
    } else {
      document.documentElement.classList.remove("dark");
      document.getElementById("icon-sun").classList.add("hidden");
      document.getElementById("icon-moon").classList.remove("hidden");
      themeButton.setAttribute("aria-label", "Activer le mode sombre");
    }
    localStorage.theme = isDark ? "dark" : "light";
  }
  applyTheme();
  document.getElementById("theme-btn").addEventListener("click", () => {
    isDark = !isDark;
    applyTheme();
  });

  // 3. Dynamic Rendering Helpers
  const deviconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

  function escapeHTML(value) {
    return String(value ?? "").replace(
      /[&<>'"]/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[character],
    );
  }

  function getRepositoryUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" && url.hostname === "github.com"
        ? url.href
        : "https://github.com/Sofiane-Meziane";
    } catch {
      return "https://github.com/Sofiane-Meziane";
    }
  }

  // Marquee
  const technologies = [
    { n: "Python", i: "python/python-original.svg" },
    { n: "TensorFlow", i: "tensorflow/tensorflow-original.svg" },
    { n: "OpenCV", i: "opencv/opencv-original.svg" },
    { n: "Flutter", i: "flutter/flutter-original.svg" },
    { n: "Java", i: "java/java-original.svg" },
    { n: "JS", i: "javascript/javascript-original.svg" },
    { n: "C", i: "c/c-original.svg" },
    { n: "Git", i: "git/git-original.svg" },
    { n: "MySQL", i: "mysql/mysql-original.svg" },
  ];
  document.getElementById("tech-marquee").innerHTML = [
    ...technologies,
    ...technologies,
    ...technologies,
  ]
    .map(
      (t) =>
        `<div class="flex flex-row items-center justify-center gap-2 px-5 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-500/50 hover:scale-105">
          <img src="${deviconBaseUrl}${t.i}" class="w-5 h-5 object-contain" alt=""><span class="font-medium text-slate-700 dark:text-slate-200 text-sm leading-none pt-[1px]">${escapeHTML(t.n)}</span>
            </div>`,
    )
    .join("");

  // 4. GitHub API mapping
  const IMG = {
    LucidDrive: "images/luciddrive.png",
    Bladiway: "images/covoiturage.jpg",
    LaptopExpert: "images/laptopexpert.png",
    "Horizon-Auto": "images/Design sans titre (6).png",
    "Ping-Pong": "images/Ping Pong.png",
    FireVision: "images/firevision.jpg",
  };
  const TYPE = {
    LucidDrive: "IA",
    Bladiway: "Mobile",
    LaptopExpert: "ML",
    "Horizon-Auto": "Fullstack",
    "Ping-Pong": "Game",
    FireVision: "Deep Learning",
  };
  const EN_DESC = {
    LaptopExpert:
      "Streamlit app and Machine Learning models (Random Forest & Ridge) for laptop price estimation and classification.",
    LucidDrive:
      "Driver vigilance monitoring system using fuzzy logic and computer vision (MediaPipe).",
    Bladiway:
      "Promoting sustainable and smart carpooling with a smooth, intuitive, and secure user experience (UX).",
    "Ping-Pong":
      "Classic Ping Pong game developed in C using the Raylib library.",
    "Horizon-Auto":
      "Driving school management solution with 3 dedicated spaces: Admin (users, vehicles), Secretary (schedules, registrations), and Instructor (candidate tracking).",
    FireVision:
      "A deep learning project applied to fire safety. It relies on the YOLO26s model trained on the D-Fire dataset to automatically detect the presence of fires and smoke in images and videos.",
  };

  const PROJECT_DATES = {
    "Ping-Pong": { fr: "janv. 2023", en: "Jan 2023" },
    "Horizon-Auto": { fr: "janv. 2025", en: "Jan 2025" },
    Bladiway: { fr: "mai 2025", en: "May 2025" },
    LaptopExpert: { fr: "janv. 2026", en: "Jan 2026" },
    LucidDrive: { fr: "févr. 2026", en: "Feb 2026" },
    FireVision: { fr: "mars 2026", en: "Mar 2026" },
  };

  const PROJECT_ORDER = [
    "FireVision",
    "LucidDrive",
    "LaptopExpert",
    "Bladiway",
    "Horizon-Auto",
    "Ping-Pong",
  ];

  function renderProjects(repos) {
    const list = document.getElementById("projects-list");
    const sortedRepos = [...repos].sort((a, b) => {
      const indexA = PROJECT_ORDER.indexOf(a.name);
      const indexB = PROJECT_ORDER.indexOf(b.name);
      return indexA - indexB;
    });
    list.innerHTML = sortedRepos
      .map((r) => {
        const img = IMG[r.name],
          typ = TYPE[r.name] || "Project";
        const customDates = PROJECT_DATES[r.name];
        const dat = customDates
          ? lang === "fr"
            ? customDates.fr
            : customDates.en
          : new Date(r.pushed_at).toLocaleDateString(
              lang === "fr" ? "fr-FR" : "en-US",
              { month: "short", year: "numeric" },
            );
        const desc =
          lang === "en" && EN_DESC[r.name]
            ? EN_DESC[r.name]
            : r.description || "";
        return `
                <a href="${escapeHTML(getRepositoryUrl(r.html_url))}" target="_blank" rel="noopener noreferrer" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-[1.75rem] overflow-hidden shadow-sm md:hover:shadow-lg md:hover:-translate-y-1 transition-transform duration-300 md:group-hover:border-slate-300 dark:md:group-hover:border-slate-600">
                    <div class="h-36 sm:h-44 bg-slate-100 dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
                        ${img ? `<img src="${img}" loading="lazy" decoding="async" class="w-full h-full object-cover transform scale-100 md:group-hover:scale-105 transition-transform duration-700" alt="${escapeHTML(r.name)}">` : ""}
                        ${!img ? `<div class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>` : ""}
                    </div>
                    <div class="px-5 py-4 md:px-6 md:py-5 flex-1 flex flex-col">
                        <div class="flex items-center justify-between mb-2">
                            <span class="px-2 py-[2px] rounded text-[9px] font-bold tracking-wider uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">${typ}</span>
                            <span class="text-[11px] font-medium text-slate-400 dark:text-slate-500">${dat}</span>
                        </div>
                        <h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 md:group-hover:text-sky-500 transition-colors tracking-tight">${escapeHTML(r.name)}</h3>
                        <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 md:line-clamp-3 leading-relaxed mb-4 flex-1">${escapeHTML(desc)}</p>
                        <div class="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/50">
                            <div class="flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white md:group-hover:text-sky-500 transition-colors">
                                ${LANG[lang].view_code} <svg class="w-3.5 h-3.5 transform md:group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </div>
                        </div>
                    </div>
                </a>`;
      })
      .join("");
  }

  async function fetchGit() {
    try {
      let json;
      const cached = sessionStorage.getItem("github_repos");
      if (cached) {
        json = JSON.parse(cached);
      } else {
        const res = await fetch(
          "https://api.github.com/users/Sofiane-Meziane/repos?sort=pushed&per_page=30",
        );
        if (!res.ok) throw new Error(res.status);
        json = await res.json();
        sessionStorage.setItem("github_repos", JSON.stringify(json));
      }
      json = json.filter(
        (r) =>
          r.description &&
          r.description.trim() &&
          !r.fork &&
          PROJECT_ORDER.includes(r.name),
      );

      window.loadedRepos = json;
      renderProjects(json);
      document.getElementById("projects-loading").classList.add("hidden");
      document.getElementById("projects-list").classList.remove("hidden");
    } catch (err) {
      console.error(err);
      document.getElementById("projects-loading").classList.add("hidden");
      document.getElementById("projects-error").classList.remove("hidden");
    }
  }
  fetchGit();

  // 5. Scroll Animations & Reveal
  const observer = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // 6. Back to Top
  window.addEventListener(
    "scroll",
    () => {
      document
        .getElementById("back-to-top")
        .classList.toggle("visible", window.scrollY > 500);
    },
    { passive: true },
  );
})();
