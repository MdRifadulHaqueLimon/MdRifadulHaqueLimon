/**
 * SKILLS DATA
 */
const SKILLS = [
  // 1. Foundation
  { icon: 'icons_img/html5.png', name: 'HTML5' },
  { icon: 'icons_img/css3.png', name: 'CSS3' },
  { icon: 'icons_img/javascript.png', name: 'JavaScript' },

  // 2. Styling & Version Control
  { icon: 'icons_img/tailwindcss.png', name: 'Tailwind CSS' },
  { icon: 'icons_img/git.png', name: 'Git & GitHub' },

  // 3. Frontend Framework & State Management
  { icon: 'icons_img/react.png', name: 'React.js' },
  { icon: 'icons_img/redux.png', name: 'Redux' },

  // 4. Backend & Database
  { icon: 'icons_img/nodejs.png', name: 'Node.js' },
  { icon: 'icons_img/expressjs.png', name: 'Express.js' },
  { icon: 'icons_img/mongodb.png', name: 'MongoDB' },

  // 5. Advanced Backend & Tools
  { icon: 'icons_img/restapi.png', name: 'REST API' },
  { icon: 'icons_img/jwtauth.png', name: 'JWT Auth' },
  { icon: 'icons_img/postmen.png', name: 'Postman' },

  // 6. Production & DevOps Upgrades
  { icon: 'icons_img/typescript.png', name: 'TypeScript' },
  { icon: 'icons_img/nextjs.png', name: 'Next.js' },
  { icon: 'icons_img/docker.png', name: 'Docker' },
];

/**
 * PROJECTS DATA
 * Fill in your actual project details here.
 * category: 'fullstack' | 'frontend' | 'backend'
 * liveUrl: live deployment link (or '' to hide button)
 * repoUrl: GitHub repository link (or '' to hide button)
 * thumb: path to project screenshot image (or '' for placeholder)
 */
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
    liveUrl: '',
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
   RENDER SKILLS
============================================================ */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-card reveal" style="transition-delay:${(i % 8) * 0.06}s">
      <div class="skill-icon">
        <img src="${s.icon}" alt="${s.name}" class="skill-img" onerror="this.src='https://via.placeholder.com/40?text=Icon'" />
      </div>
      <div class="skill-name">${s.name}</div>
    </div>
  `).join('');
}

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

  // re-observe new cards
  observeReveal();
}

/* ============================================================
   FILTER TABS
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
   SCROLL REVEAL (IntersectionObserver)
============================================================ */
function observeReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ============================================================
   NAVBAR SCROLL EFFECT
============================================================ */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
});

/* ============================================================
   HAMBURGER MENU
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
}

/* ============================================================
   CONTACT FORM
============================================================ */
function handleFormSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  // Simulate async send — replace with real EmailJS / Formspree / backend call
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
renderSkills();
renderProjects('all');
observeReveal();