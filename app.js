/* ============================================================
   SKILLS DATA  — name, category, categoryColor, iconBg, icon
   category values: FRONTEND | BACKEND | DATABASE | TOOLS | E-COMMERCE
============================================================ */
const SKILLS = [
  /* ── FRONTEND ── */
  { name:'HTML5',        category:'FRONTEND',   categoryColor:'#e34c26', iconBg:'#1e1008', icon:'icons_img/html5.png'        },
  { name:'CSS3',         category:'FRONTEND',   categoryColor:'#2965f1', iconBg:'#080e28', icon:'icons_img/css3.png'         },
  { name:'JavaScript',   category:'FRONTEND',   categoryColor:'#f7df1e', iconBg:'#1a1a06', icon:'icons_img/javascript.png'  },
  { name:'React.js',     category:'FRONTEND',   categoryColor:'#61dafb', iconBg:'#04161e', icon:'icons_img/react.png'       },
  { name:'Tailwind CSS', category:'FRONTEND',   categoryColor:'#38bdf8', iconBg:'#04141e', icon:'icons_img/tailwindcss.png' },
  // { name:'Next.js',      category:'FRONTEND',   categoryColor:'#ffffff', iconBg:'#101010', icon:'icons_img/nextjs.png'      },
  // { name:'TypeScript',   category:'FRONTEND',   categoryColor:'#3178c6', iconBg:'#081428', icon:'icons_img/typescript.png'  },
  // { name:'Redux',        category:'FRONTEND',   categoryColor:'#764abc', iconBg:'#100a1e', icon:'icons_img/redux.png'       },
  // { name:'Framer Motion',category:'FRONTEND',   categoryColor:'#ff0055', iconBg:'#180008', icon:'icons_img/framermotion.png'},

  /* ── BACKEND ── */
  // { name:'Node.js',      category:'BACKEND',    categoryColor:'#68a063', iconBg:'#081608', icon:'icons_img/nodejs.png'      },
  // { name:'Express.js',   category:'BACKEND',    categoryColor:'#ffffff', iconBg:'#101010', icon:'icons_img/expressjs.png'   },
  // { name:'REST API',     category:'BACKEND',    categoryColor:'#ff6b35', iconBg:'#1a0c04', icon:'icons_img/restapi.png'     },
  // { name:'JWT Auth',     category:'BACKEND',    categoryColor:'#d63aff', iconBg:'#12041a', icon:'icons_img/jwtauth.png'     },

  /* ── DATABASE ── */
  // { name:'MongoDB',      category:'DATABASE',   categoryColor:'#4db33d', iconBg:'#061806', icon:'icons_img/mongodb.png'     },
  // { name:'Firebase',     category:'DATABASE',   categoryColor:'#ffca28', iconBg:'#1a1404', icon:'icons_img/firebase.png'    },

  /* ── TOOLS ── */
  { name:'Git & GitHub', category:'TOOLS',      categoryColor:'#f05032', iconBg:'#1a0a04', icon:'icons_img/git.png'         },
  { name:'Postman',      category:'TOOLS',      categoryColor:'#ef5b25', iconBg:'#1a0c04', icon:'icons_img/postmen.png'     },
  // { name:'Docker',       category:'TOOLS',      categoryColor:'#2496ed', iconBg:'#041424', icon:'icons_img/docker.png'      },

  /* ── E-COMMERCE ── */
  { name:'Shopify',      category:'E-COMMERCE', categoryColor:'#96bf48', iconBg:'#0c1804', icon:'icons_img/shopify.png'     },
];

/* ============================================================
   PROJECTS DATA
============================================================ */
const PROJECTS = [
  {
    title: 'Project Title One',
    description: 'Short description of what this project does, the problem it solves, and key highlights. Replace this with your actual project description.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    liveUrl: '#',
    repoUrl: 'https://github.com/MdRifadulHaqueLimon',
    thumb: '',
  },
  {
    title: 'Project Title Two',
    description: 'Short description of what this project does. Highlight the tech stack, your role, and any standout features or achievements.',
    tags: ['React.js', 'Tailwind CSS', 'Firebase'],
    category: 'frontend',
    liveUrl: '#',
    repoUrl: 'https://github.com/MdRifadulHaqueLimon',
    thumb: '',
  },
  {
    title: 'Project Title Three',
    description: 'Backend API or full-stack project. Describe the architecture, endpoints, authentication method, and database design briefly.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'backend',
    liveUrl: '#',
    repoUrl: 'https://github.com/MdRifadulHaqueLimon',
    thumb: '',
  },
  {
    title: 'Project Title Four',
    description: 'Another full-stack MERN project. Describe its purpose, any unique challenges you solved, and real-world use case.',
    tags: ['MERN', 'Redux', 'REST API'],
    category: 'fullstack',
    liveUrl: '#',
    repoUrl: 'https://github.com/MdRifadulHaqueLimon',
    thumb: '',
  },
  {
    title: 'Project Title Five',
    description: 'Frontend project showcasing your UI/UX skills. Mention any libraries, design system, or complex interactions used.',
    tags: ['React.js', 'Framer Motion', 'CSS'],
    category: 'frontend',
    liveUrl: '#',
    repoUrl: 'https://github.com/MdRifadulHaqueLimon',
    thumb: '',
  },
  {
    title: 'Project Title Six',
    description: 'Describe this project clearly. What problem does it solve? Who is the target user? What was your biggest technical challenge?',
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    category: 'fullstack',
    liveUrl: '#',
    repoUrl: 'https://github.com/MdRifadulHaqueLimon',
    thumb: '',
  },
];

/* ============================================================
   TYPING EFFECT
============================================================ */
(function () {
  const roles = [
    'Frontend Developer',
    // 'MERN Stack Developer',
    'Shopify Store Designer',
    'React.js Enthusiast',
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;
  const el = document.getElementById('typingText');
  function type() {
    if (!el) return;
    const current = roles[roleIdx];
    if (deleting) {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(type, 400); return; }
      setTimeout(type, 45);
    } else {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
      setTimeout(type, 80);
    }
  }
  setTimeout(type, 600);
})();

/* ============================================================
   RENDER SKILLS  — Tawhid-style glass cards + filter tabs
============================================================ */
let activeSkillFilter = 'all';

function renderSkills(filter) {
  const grid = document.getElementById('skillsGrid');
  const filtered = filter === 'all' ? SKILLS : SKILLS.filter(s => s.category.toLowerCase() === filter);

  grid.innerHTML = filtered.map((s, i) => `
    <div
      class="skill-card reveal"
      style="
        transition-delay:${(i % 6) * 0.06}s;
        --skill-color:${s.categoryColor};
      "
    >
      <span class="skill-cat-badge" style="color:${s.categoryColor};background:${s.categoryColor}1a;border-color:${s.categoryColor}55;">
        ${s.category}
      </span>
      <div class="skill-icon-wrap" style="background:${s.iconBg};">
        <img src="${s.icon}" alt="${s.name}" class="skill-img" onerror="this.style.display='none'" />
      </div>
      <div class="skill-name">${s.name}</div>
    </div>
  `).join('');

  observeReveal();
}

/* ============================================================
   SKILL FILTER TABS
============================================================ */
document.getElementById('skillFilterTabs').addEventListener('click', e => {
  const btn = e.target.closest('.skill-filter-btn');
  if (!btn) return;
  document.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeSkillFilter = btn.dataset.filter;
  renderSkills(activeSkillFilter);
});

/* ============================================================
   RENDER PROJECTS
============================================================ */
let activeFilter = 'all';

function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card reveal" style="transition-delay:${(i % 3) * 0.12}s" data-category="${p.category}">
      <div class="project-thumb">
        ${p.thumb
          ? `<img src="${p.thumb}" alt="${p.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="project-thumb-placeholder" style="display:none">${p.title.charAt(0)}</div>`
          : `<div class="project-thumb-placeholder">${p.title.charAt(0)}</div>`
        }
        <div class="project-overlay">
          ${p.repoUrl ? `
          <a href="${p.repoUrl}" target="_blank" rel="noopener" class="project-link" title="GitHub Repository">
            <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>` : ''}
          ${p.liveUrl ? `
          <a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-link" title="Live Demo">
            <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
          </a>` : ''}
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <h3 class="project-name">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
      </div>
    </div>
  `).join('');

  observeReveal();
}

/* ============================================================
   PROJECT FILTER TABS
============================================================ */
document.getElementById('filterTabs').addEventListener('click', e => {
  const btn = e.target.closest('.filter-tab');
  if (!btn) return;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  renderProjects(activeFilter);
});

/* ============================================================
   SCROLL REVEAL
============================================================ */
function observeReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ============================================================
   NAVBAR SCROLL
============================================================ */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
});

/* ============================================================
   HAMBURGER MENU
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');
const mobOverlay = document.getElementById('mobOverlay');

function openMobile() {
  hamburger.classList.add('open');
  mobileNav.classList.add('open');
  mobOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobile() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  mobOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) {
    closeMobile();
  } else {
    openMobile();
  }
});

/* ============================================================
   CONTACT FORM
============================================================ */
function handleFormSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = '✅ Message sent! I\'ll get back to you soon.';
    status.style.display = 'block';
    e.target.reset();
    btn.disabled = false;
    btn.innerHTML = `<svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
    setTimeout(() => { status.style.display = 'none'; }, 5000);
  }, 1200);
}

/* ============================================================
   INIT
============================================================ */
renderSkills('all');
renderProjects('all');
observeReveal();

/* ============================================================
   LANGUAGE DROPDOWN
============================================================ */
(function () {
  // ── Desktop dropdown ──
  const dropdown    = document.getElementById('langDropdown');
  const btn         = document.getElementById('langBtn');
  const menu        = document.getElementById('langMenu');
  const labelEl     = document.getElementById('langLabel');
  const options     = document.querySelectorAll('.lang-option');

  // ── Mobile custom dropdown ──
  const mobDropdown = document.getElementById('mobLangDropdown');
  const mobBtn      = document.getElementById('mobLangBtn');
  const mobMenu     = document.getElementById('mobLangMenu');
  const mobFlag     = document.getElementById('mobLangFlag');
  const mobTxt      = document.getElementById('mobLangTxt');
  const mobOpts     = document.querySelectorAll('.mob-lang-opt');

  if (!btn || !menu) return;

  // Desktop open/close
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Mobile open/close
  if (mobBtn && mobMenu) {
    mobBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = mobMenu.classList.toggle('open');
      mobBtn.classList.toggle('open', isOpen);
      mobBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Close both on outside click
  document.addEventListener('click', function (e) {
    if (dropdown && !dropdown.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    if (mobDropdown && !mobDropdown.contains(e.target)) {
      if (mobMenu) mobMenu.classList.remove('open');
      if (mobBtn)  mobBtn.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (mobMenu) mobMenu.classList.remove('open');
      if (mobBtn)  mobBtn.classList.remove('open');
    }
  });

  function translatePage(langCode) {
    var hostname = window.location.hostname;
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'googtrans=; path=/; domain=' + hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    if (langCode === 'en') { window.location.reload(); return; }
    var cookieVal = '/en/' + langCode;
    document.cookie = 'googtrans=' + cookieVal + '; path=/';
    document.cookie = 'googtrans=' + cookieVal + '; path=/; domain=' + hostname;
    var gtCombo = document.querySelector('.goog-te-combo');
    if (gtCombo) { gtCombo.value = langCode; gtCombo.dispatchEvent(new Event('change')); }
    else { window.location.reload(); }
  }

  // Desktop option click
  options.forEach(function (opt) {
    opt.addEventListener('click', function () {
      var lang = opt.dataset.lang, label = opt.dataset.label;
      options.forEach(function (o) { o.classList.remove('active'); });
      opt.classList.add('active');
      if (labelEl) labelEl.textContent = label;
      // sync mobile
      syncMobileToLang(lang);
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      translatePage(lang);
    });
  });

  // Mobile option click
  mobOpts.forEach(function (opt) {
    opt.addEventListener('click', function () {
      var lang  = opt.dataset.lang;
      var label = opt.dataset.label;
      var name  = opt.dataset.name;
      var flag  = opt.dataset.flag;
      // update mobile UI
      mobOpts.forEach(function (o) { o.classList.remove('active'); });
      opt.classList.add('active');
      if (mobFlag) mobFlag.src = 'https://flagcdn.com/w40/' + flag + '.png';
      if (mobTxt)  mobTxt.textContent = name;
      // sync desktop
      options.forEach(function (o) {
        var isMatch = o.dataset.lang === lang;
        o.classList.toggle('active', isMatch);
        if (isMatch && labelEl) labelEl.textContent = label;
      });
      mobMenu.classList.remove('open');
      mobBtn.classList.remove('open');
      translatePage(lang);
    });
  });

  function syncMobileToLang(lang) {
    mobOpts.forEach(function (o) {
      var isMatch = o.dataset.lang === lang;
      o.classList.toggle('active', isMatch);
      if (isMatch) {
        if (mobFlag) mobFlag.src = 'https://flagcdn.com/w40/' + o.dataset.flag + '.png';
        if (mobTxt)  mobTxt.textContent = o.dataset.name;
      }
    });
  }

  (function syncUIFromCookie() {
    var match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) {
      var activeLang = decodeURIComponent(match[1]);
      options.forEach(function (opt) {
        var isMatch = opt.dataset.lang === activeLang;
        opt.classList.toggle('active', isMatch);
        if (isMatch && labelEl) labelEl.textContent = opt.dataset.label;
      });
      syncMobileToLang(activeLang);
    }
  })();
})();

/* ============================================================
   3D ID CARD — Mouse / Touch Tilt + Shimmer
============================================================ */
(function () {
  var scene   = document.getElementById('hcCardScene');
  var card    = document.getElementById('hcCard');
  var wrap    = document.getElementById('heroCardWrap');
  if (!scene || !card) return;

  var MAX_TILT  = 22;   // degrees
  var FLOAT_AMP = 8;    // px swing
  var floatAnim = null;
  var currentX  = 0;
  var currentY  = 0;
  var targetX   = 0;
  var targetY   = 0;
  var isHovered = false;
  var floatT    = 0;

  /* Smooth lerp loop */
  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    if (isHovered) {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
    } else {
      /* Idle floating animation */
      floatT += 0.018;
      var idleY = Math.sin(floatT) * FLOAT_AMP;
      var idleX = Math.sin(floatT * 0.7) * (FLOAT_AMP * 0.4);
      currentX = lerp(currentX, idleX * 0.4, 0.04);
      currentY = lerp(currentY, 0, 0.04);
      card.style.transform = 'rotateX(' + (-idleX * 0.5) + 'deg) rotateY(' + (idleX * 0.8) + 'deg) translateY(' + idleY + 'px)';
    }

    if (isHovered) {
      card.style.transform =
        'rotateX(' + currentX + 'deg) rotateY(' + currentY + 'deg) translateZ(20px)';
    }
    floatAnim = requestAnimationFrame(tick);
  }
  tick();

  /* Mouse move on wrap */
  wrap.addEventListener('mousemove', function (e) {
    isHovered = true;
    var rect   = scene.getBoundingClientRect();
    var cx     = rect.left + rect.width  / 2;
    var cy     = rect.top  + rect.height / 2;
    var dx     = (e.clientX - cx) / (rect.width  / 2);
    var dy     = (e.clientY - cy) / (rect.height / 2);
    targetX    = -dy * MAX_TILT;
    targetY    =  dx * MAX_TILT;
  });

  wrap.addEventListener('mouseleave', function () {
    isHovered = false;
    targetX = 0;
    targetY = 0;
  });

  /* Touch support */
  wrap.addEventListener('touchmove', function (e) {
    if (!e.touches.length) return;
    isHovered = true;
    var t      = e.touches[0];
    var rect   = scene.getBoundingClientRect();
    var cx     = rect.left + rect.width  / 2;
    var cy     = rect.top  + rect.height / 2;
    var dx     = (t.clientX - cx) / (rect.width  / 2);
    var dy     = (t.clientY - cy) / (rect.height / 2);
    targetX    = -dy * MAX_TILT;
    targetY    =  dx * MAX_TILT;
    e.preventDefault();
  }, { passive: false });

  wrap.addEventListener('touchend', function () {
    isHovered = false;
    targetX = 0;
    targetY = 0;
  });
})();

/* ============================================================
   THEME TOGGLE — Day / Night
============================================================ */
(function () {
  var html      = document.documentElement;
  var toggles   = [document.getElementById('themeToggle'), document.getElementById('themeToggleMob')];
  var LIGHT_CLS = 'light-mode';
  var STORE_KEY = 'portfolioTheme';

  var saved = localStorage.getItem(STORE_KEY);
  if (saved === 'light') html.classList.add(LIGHT_CLS);

  function applyTheme(isLight) {
    isLight ? html.classList.add(LIGHT_CLS) : html.classList.remove(LIGHT_CLS);
    localStorage.setItem(STORE_KEY, isLight ? 'light' : 'dark');
  }

  toggles.forEach(function (btn) {
    if (!btn) return;
    btn.addEventListener('click', function () {
      applyTheme(!html.classList.contains(LIGHT_CLS));
    });
  });
})();
