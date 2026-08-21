      (function () {
        "use strict";

        // 1. Translations
        const LANG = {
          fr: {
            nav_about: "À propos",
            nav_skills: "Compétences",
            nav_projects: "Projets",
            nav_edu: "Parcours",
            nav_cv: "CV",
            hero_status: "Disponible pour un stage",
            hero_desc_1: "Étudiant en",
            hero_desc_2:
              ". Je conçois des solutions à l'intersection du machine learning, de la vision par ordinateur et de l'ingénierie logicielle.",
            hero_cta: "Découvrir mes projets",
            about_title: "À propos",
            about_p1:
              "Passionné par l'intelligence artificielle et le développement logiciel, je construis des solutions qui connectent la théorie à l'impact concret. Mon parcours mêle <strong class='font-medium text-slate-900 dark:text-white'>machine learning</strong>, <strong class='font-medium text-slate-900 dark:text-white'>vision par ordinateur</strong> et <strong class='font-medium text-slate-900 dark:text-white'>ingénierie logicielle</strong>.",
            about_p2:
              "Je suis actuellement en <strong class='font-medium text-slate-900 dark:text-white'>Master Intelligence Artificielle</strong> en Algérie, et je recherche un stage pour appliquer mes compétences à des problèmes réels.",
            skills_title: "Ma stack technique",
            cat_ia: "Data Science & IA",
            cat_dev: "Développement Logiciel",
            cat_web: "Web & Mobile",
            cat_sys: "Systèmes & Réseaux",
            cat_db: "Bases de données",
            cat_tools: "Outils",
            cat_sec: "Sécurité",
            sys_rep: "Systèmes Répartis",
            bd_rel: "BD Relationnelles",
            admin_db: "Administration SGBD",
            sec_si: "Sécurité des SI",
            vuln: "Analyse Vulnérabilités",
            projects_title: "Ce que j'ai construit",
            stat_projects: "Projets",
            stat_langs: "Langages",
            view_code: "Voir le code",
            edu_title: "Formation",
            edu_current: "En cours",
            edu_present: "Présent",
            edu_graduated: "Diplômé",
            edu_licence: "Licence Informatique",
            edu_bac: "Baccalauréat",
            edu_desc1: "Intelligence Artificielle",
            edu_desc2: "Sciences Informatiques",
            edu_desc3: "Filière Techniques Mathématiques",
            edu_uni: "Université de Bejaia — Algérie",
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
            hero_desc_1: "Student in",
            hero_desc_2:
              ". I build solutions at the intersection of machine learning, computer vision, and software engineering.",
            hero_cta: "Explore projects",
            about_title: "About me",
            about_p1:
              "Passionate about artificial intelligence and software engineering, I connect theory to real-world impact. My background combines <strong class='font-medium text-slate-900 dark:text-white'>machine learning</strong>, <strong class='font-medium text-slate-900 dark:text-white'>computer vision</strong>, and <strong class='font-medium text-slate-900 dark:text-white'>software development</strong>.",
            about_p2:
              "I am currently pursuing a <strong class='font-medium text-slate-900 dark:text-white'>Master's in AI</strong> in Algeria, looking for an internship to apply my skills.",
            skills_title: "Tech Stack",
            cat_ia: "Data Science & AI",
            cat_dev: "Software Development",
            cat_web: "Web & Mobile",
            cat_sys: "Systems & Networks",
            cat_db: "Databases",
            cat_tools: "Tools",
            cat_sec: "Security",
            sys_rep: "Distributed Systems",
            bd_rel: "Relational DBs",
            admin_db: "DBMS Administration",
            sec_si: "IS Security",
            vuln: "Vuln. Analysis",
            projects_title: "What I've built",
            stat_projects: "Projects",
            stat_langs: "Languages",
            view_code: "View code",
            edu_title: "Education",
            edu_current: "Ongoing",
            edu_present: "Present",
            edu_graduated: "Graduated",
            edu_licence: "BSc in Computer Science",
            edu_bac: "High School Diploma",
            edu_desc1: "Artificial Intelligence",
            edu_desc2: "Computer Science",
            edu_desc3: "Technical Mathematics Track",
            edu_uni: "University of Bejaia — Algeria",
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
          renderSkills(); // Update translations in skills
          if (
            !document
              .getElementById("projects-list")
              .classList.contains("hidden")
          )
            renderProjects(window.loadedRepos);
        }
        document
          .getElementById("lang-btn")
          .addEventListener("click", () =>
            setLang(lang === "fr" ? "en" : "fr"),
          );

        // 2. Dark Mode
        let isDark =
          localStorage.theme === "dark" || !("theme" in localStorage);
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

        // 3. Dynamic Rendering Helpers (to save space)
        const d_url = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

        // Marquee
        const m_techs = [
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
          ...m_techs,
          ...m_techs,
          ...m_techs,
        ]
          .map(
            (t) =>
              `<div class="flex flex-row items-center justify-center gap-2 px-5 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-500/50 hover:scale-105">
                <img src="${d_url}${t.i}" class="w-5 h-5 object-contain" alt=""><span class="font-medium text-slate-700 dark:text-slate-200 text-sm leading-none pt-[1px]">${t.n}</span>
            </div>`,
          )
          .join("");

        const SKILLS_DATA = {
          fr: [
            {
              id: "ia",
              icon: "",
              title: "Data Science & Intelligence Artificielle",
              span: "md:col-span-2 lg:col-span-4",
              subcats: [
                {
                  name: "Machine Learning",
                  items: [
                    "Régression",
                    "Classification",
                    "SVM",
                    "Forêts aléatoires",
                    "K-means",
                    "ACP",
                  ],
                },
                {
                  name: "Deep Learning & Réseaux de neurones",
                  items: [
                    "CNN (ResNet, YOLO)",
                    "RNN (LSTM)",
                    "Transformers (ViT)",
                  ],
                },
                {
                  name: "IA Générative",
                  items: [
                    "Modèles de Diffusion",
                    "GANs",
                    "LLMs (BERT, GPT, LLaMA)",
                    "Prompt Engineering",
                  ],
                },
                {
                  name: "Vision par Ordinateur",
                  items: [
                    "Traitement d'images",
                    "Détection et suivi d'objets",
                    "i:opencv/opencv-original.svg|OpenCV",
                  ],
                },
                {
                  name: "Traitement du Langage Naturel (NLP)",
                  items: [
                    "Word embeddings (Word2Vec, GloVe)",
                    "Analyse de sentiments",
                  ],
                },
                {
                  name: "Apprentissage par Renforcement",
                  items: [
                    "Processus de Markov (MDP)",
                    "Q-Learning",
                    "DQN",
                    "PPO",
                  ],
                },
                {
                  name: "IA Symbolique & Optimisation",
                  items: [
                    "Systèmes Multi-Agents (SMA)",
                    "Ontologies (RDF, OWL)",
                    "Méta-heuristiques",
                    "Logique floue",
                  ],
                },
              ],
            },
            {
              id: "dev",
              icon: "",
              title: "Développement Logiciel",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Langages",
                  items: [
                    "i:python/python-original.svg|Python",
                    "i:java/java-original.svg|Java",
                    "i:c/c-original.svg|C",
                  ],
                },
                {
                  name: "Conception & Algorithmique",
                  items: [
                    "POO",
                    "Algorithmique avancée",
                    "Calcul de complexité",
                    "Théorie des graphes",
                  ],
                },
                {
                  name: "Ingénierie Logicielle",
                  items: ["UML", "Design Patterns", "Modélisation MVC"],
                },
              ],
            },
            {
              id: "db",
              icon: "",
              title: "Bases de Données",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Bases Relationnelles",
                  items: [
                    "Modélisation",
                    "SQL",
                    "PL/SQL",
                    "i:oracle/oracle-original.svg|Oracle",
                    "i:mysql/mysql-original.svg|MySQL",
                  ],
                },
                {
                  name: "Bases NoSQL",
                  items: [
                    "Orienté documents et graphes",
                    "i:mongodb/mongodb-original.svg|MongoDB",
                    "Neo4j",
                    "Cassandra",
                  ],
                },
                {
                  name: "Données semi-structurées",
                  items: ["XML", "XPath", "XQuery", "JSON"],
                },
              ],
            },
            {
              id: "infra",
              icon: "",
              title: "Infrastructures : Systèmes, Réseaux & Cloud",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Systèmes d'exploitation",
                  items: [
                    "i:linux/linux-original.svg|Administration Linux/Unix",
                    "Gestion de la mémoire et des processus",
                  ],
                },
                {
                  name: "Réseaux & Protocoles",
                  items: [
                    "Modèles OSI/TCP-IP",
                    "Routage dynamique (OSPF, BGP)",
                    "IPv6",
                    "VLAN",
                  ],
                },
                {
                  name: "Cloud Computing & Virtualisation",
                  items: ["Architectures IaaS/PaaS/SaaS", "Datacenters"],
                },
                {
                  name: "Sécurité",
                  items: [
                    "Cryptographie symétrique/asymétrique (AES, RSA)",
                    "Pare-feux",
                    "Hachage (MD5, SHA-1)",
                  ],
                },
              ],
            },
            {
              id: "web",
              icon: "",
              title: "Développement Web & Mobile",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Mobile",
                  items: ["Développement Android (Java/XML, Intents, SQLite)"],
                },
                {
                  name: "Web Frontend",
                  items: [
                    "i:html5/html5-original.svg|HTML5",
                    "i:css3/css3-original.svg|CSS3",
                    "i:javascript/javascript-original.svg|JavaScript",
                  ],
                },
                {
                  name: "Web Backend & Intégration",
                  items: [
                    "i:php/php-original.svg|PHP",
                    "Services Web (SOAP, WSDL)",
                  ],
                },
              ],
            },
            {
              id: "tools",
              icon: "",
              title: "Outils & Méthodologies",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Outils de développement",
                  items: [
                    "i:pytorch/pytorch-original.svg|PyTorch",
                    "i:tensorflow/tensorflow-original.svg|TensorFlow",
                    "i:scikitlearn/scikitlearn-original.svg|Scikit-learn",
                    "i:git/git-original.svg|Git",
                    "i:github/github-original.svg|GitHub",
                    "i:vscode/vscode-original.svg|VS Code",
                  ],
                },
                {
                  name: "Gestion de Projet",
                  items: [
                    "Méthodes Agiles (Scrum, Kanban)",
                    "Diagrammes de Gantt/PERT",
                    "Méthode Merise",
                  ],
                },
              ],
            },
          ],
          en: [
            {
              id: "ia",
              icon: "",
              title: "Data Science & Artificial Intelligence",
              span: "md:col-span-2 lg:col-span-4",
              subcats: [
                {
                  name: "Machine Learning",
                  items: [
                    "Regression",
                    "Classification",
                    "SVM",
                    "Random Forests",
                    "K-means",
                    "PCA",
                  ],
                },
                {
                  name: "Deep Learning & Neural Networks",
                  items: [
                    "CNN (ResNet, YOLO)",
                    "RNN (LSTM)",
                    "Transformers (ViT)",
                  ],
                },
                {
                  name: "Generative AI",
                  items: [
                    "Diffusion Models",
                    "GANs",
                    "LLMs (BERT, GPT, LLaMA)",
                    "Prompt Engineering",
                  ],
                },
                {
                  name: "Computer Vision",
                  items: [
                    "Image Processing",
                    "Object Detection and Tracking",
                    "i:opencv/opencv-original.svg|OpenCV",
                  ],
                },
                {
                  name: "Natural Language Processing (NLP)",
                  items: [
                    "Word embeddings (Word2Vec, GloVe)",
                    "Sentiment Analysis",
                  ],
                },
                {
                  name: "Reinforcement Learning",
                  items: [
                    "Markov Decision Process (MDP)",
                    "Q-Learning",
                    "DQN",
                    "PPO",
                  ],
                },
                {
                  name: "Symbolic AI & Optimization",
                  items: [
                    "Multi-Agent Systems (MAS)",
                    "Ontologies (RDF, OWL)",
                    "Metaheuristics",
                    "Fuzzy Logic",
                  ],
                },
              ],
            },
            {
              id: "dev",
              icon: "",
              title: "Software Development",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Languages",
                  items: [
                    "i:python/python-original.svg|Python",
                    "i:java/java-original.svg|Java",
                    "i:c/c-original.svg|C",
                  ],
                },
                {
                  name: "Design & Algorithms",
                  items: [
                    "OOP",
                    "Advanced Algorithms",
                    "Complexity Analysis",
                    "Graph Theory",
                  ],
                },
                {
                  name: "Software Engineering",
                  items: ["UML", "Design Patterns", "MVC Modeling"],
                },
              ],
            },
            {
              id: "db",
              icon: "",
              title: "Databases",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Relational Databases",
                  items: [
                    "Modeling",
                    "SQL",
                    "PL/SQL",
                    "i:oracle/oracle-original.svg|Oracle",
                    "i:mysql/mysql-original.svg|MySQL",
                  ],
                },
                {
                  name: "NoSQL Databases",
                  items: [
                    "Document and Graph-oriented",
                    "i:mongodb/mongodb-original.svg|MongoDB",
                    "Neo4j",
                    "Cassandra",
                  ],
                },
                {
                  name: "Semi-structured Data",
                  items: ["XML", "XPath", "XQuery", "JSON"],
                },
              ],
            },
            {
              id: "infra",
              icon: "",
              title: "Infrastructure: Systems, Networks & Cloud",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Operating Systems",
                  items: [
                    "i:linux/linux-original.svg|Linux/Unix Administration",
                    "Memory and Process Management",
                  ],
                },
                {
                  name: "Networks & Protocols",
                  items: [
                    "OSI/TCP-IP Models",
                    "Dynamic Routing (OSPF, BGP)",
                    "IPv6",
                    "VLAN",
                  ],
                },
                {
                  name: "Cloud Computing & Virtualization",
                  items: ["IaaS/PaaS/SaaS Architectures", "Datacenters"],
                },
                {
                  name: "Security",
                  items: [
                    "Symmetric/Asymmetric Cryptography (AES, RSA)",
                    "Firewalls",
                    "Hashing (MD5, SHA-1)",
                  ],
                },
              ],
            },
            {
              id: "web",
              icon: "",
              title: "Web & Mobile Development",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Mobile",
                  items: ["Android Development (Java/XML, Intents, SQLite)"],
                },
                {
                  name: "Web Frontend",
                  items: [
                    "i:html5/html5-original.svg|HTML5",
                    "i:css3/css3-original.svg|CSS3",
                    "i:javascript/javascript-original.svg|JavaScript",
                  ],
                },
                {
                  name: "Web Backend & Integration",
                  items: [
                    "i:php/php-original.svg|PHP",
                    "Web Services (SOAP, WSDL)",
                  ],
                },
              ],
            },
            {
              id: "tools",
              icon: "",
              title: "Tools & Methodologies",
              span: "md:col-span-2 lg:col-span-2",
              subcats: [
                {
                  name: "Development Tools",
                  items: [
                    "i:pytorch/pytorch-original.svg|PyTorch",
                    "i:tensorflow/tensorflow-original.svg|TensorFlow",
                    "i:scikitlearn/scikitlearn-original.svg|Scikit-learn",
                    "i:git/git-original.svg|Git",
                    "i:github/github-original.svg|GitHub",
                    "i:vscode/vscode-original.svg|VS Code",
                  ],
                },
                {
                  name: "Project Management",
                  items: [
                    "Agile Methods (Scrum, Kanban)",
                    "Gantt/PERT Charts",
                    "Merise Method",
                  ],
                },
              ],
            },
          ],
        };

        function renderSkills() {
          const data = SKILLS_DATA[lang];
          const renderChip = (item) => {
            let text = item;
            if (item.startsWith("i:")) {
              text = item.substring(2).split("|")[1];
            }
            return `<span class="inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 transition-transform duration-300 md:hover:bg-sky-50 dark:md:hover:bg-slate-700 md:hover:border-sky-300 dark:md:hover:border-sky-500 md:hover:text-sky-600 dark:md:hover:text-sky-300 md:hover:shadow-md md:hover:-translate-y-0.5">${text}</span>`;
          };

          const renderSubcat = (sc) => {
            const chips = sc.items.map(renderChip).join("");
            return `<div class="mb-6 last:mb-0"><h4 class="text-[11px] font-bold uppercase tracking-widest text-sky-500/80 dark:text-sky-400/80 mb-3 ml-1">${sc.name}</h4><div class="flex flex-wrap gap-2.5">${chips}</div></div>`;
          };

          const renderCard = (cat) => {
            const subcats = cat.subcats.map(renderSubcat).join("");
            const contentClass = cat.span.includes("lg:col-span-4")
              ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
              : "";
            const iconHtml = cat.icon
              ? `<span class="text-2xl filter drop-shadow-md md:group-hover:scale-110 transition-transform">${cat.icon}</span>`
              : "";
            return `<div class="${cat.span} bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-5 rounded-2xl md:rounded-[1.75rem] shadow-sm md:hover:-translate-y-1 md:hover:shadow-lg transition-transform duration-300 h-full group md:group-hover:border-slate-300 dark:md:group-hover:border-slate-600"><div class="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">${iconHtml}<h3 class="text-lg font-bold text-slate-900 dark:text-white tracking-tight">${cat.title}</h3></div><div class="${contentClass}">${subcats}</div></div>`;
          };

          document.getElementById("skills-grid").innerHTML = data
            .map(renderCard)
            .join("");
        }
        renderSkills();

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
        const TECH = {
          LucidDrive: ["Python", "OpenCV", "MediaPipe"],
          Bladiway: ["Flutter", "Dart", "Firebase"],
          LaptopExpert: ["Python", "Streamlit", "Scikit-learn"],
          "Horizon-Auto": ["Java", "MySQL", "Swing"],
          "Ping-Pong": ["C", "Raylib"],
          FireVision: ["Python", "YOLO", "PyTorch"],
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
          const sortedRepos = repos.sort((a, b) => {
            const indexA = PROJECT_ORDER.indexOf(a.name);
            const indexB = PROJECT_ORDER.indexOf(b.name);
            return indexA - indexB;
          });
          list.innerHTML = sortedRepos
            .map((r) => {
              const img = IMG[r.name],
                typ = TYPE[r.name] || "Project",
                tcs = TECH[r.name] || [r.language || ""];
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
                <a href="${r.html_url}" target="_blank" class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-[1.75rem] overflow-hidden shadow-sm md:hover:shadow-lg md:hover:-translate-y-1 transition-transform duration-300 flex flex-col md:group-hover:border-slate-300 dark:md:group-hover:border-slate-600">
                    <div class="h-36 sm:h-44 bg-slate-100 dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
                        ${img ? `<img src="${img}" loading="lazy" decoding="async" class="w-full h-full object-cover transform scale-100 md:group-hover:scale-105 transition-transform duration-700" alt="${r.name}" onerror="this.style.display='none'">` : ""}
                        ${!img ? `<div class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>` : ""}
                    </div>
                    <div class="px-5 py-4 md:px-6 md:py-5 flex-1 flex flex-col">
                        <div class="flex items-center justify-between mb-2">
                            <span class="px-2 py-[2px] rounded text-[9px] font-bold tracking-wider uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">${typ}</span>
                            <span class="text-[11px] font-medium text-slate-400 dark:text-slate-500">${dat}</span>
                        </div>
                        <h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 md:group-hover:text-sky-500 transition-colors tracking-tight">${r.name}</h3>
                        <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 md:line-clamp-3 leading-relaxed mb-4 flex-1">${desc}</p>
                        <div class="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/50">
                            <div class="flex items-center gap-1.5 font-semibold text-xs text-slate-900 dark:text-white md:group-hover:text-sky-500 transition-colors">
                                ${LANG[lang].view_code} <svg class="w-3.5 h-3.5 transform md:group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </div>
                            <div class="flex items-center gap -space-x-1.5">
                                ${tcs.map((t) => `<span class="h-7 w-7 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-900 flex items-center justify-center text-[9px] font-bold text-slate-600 dark:text-slate-300 shadow-sm z-10 md:hover:z-20 md:hover:scale-110 transition-transform cursor-help" title="${t}">${t.substring(0, 2)}</span>`).join("")}
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
            const ex = ["Sofiane-Meziane", "portfolio"];
            json = json.filter(
              (r) =>
                r.description &&
                r.description.trim() &&
                !ex.includes(r.name) &&
                !r.fork &&
                PROJECT_ORDER.includes(r.name),
            );

            // Statistiques globales retirées à la demande de l'utilisateur.

            window.loadedRepos = json;
            renderProjects(json);
            document.getElementById("projects-loading").classList.add("hidden");
            document.getElementById("projects-list").classList.remove("hidden");
          } catch (err) {
            console.error(err);
            document.getElementById("projects-loading").classList.add("hidden");
            document
              .getElementById("projects-error")
              .classList.remove("hidden");
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
        document
          .querySelectorAll(".reveal")
          .forEach((el) => observer.observe(el));

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
