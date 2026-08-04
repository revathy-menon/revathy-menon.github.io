/* ═══════════════════════════════════════════════════════════
   script.js — Revathy Menon Portfolio
   Vanilla ES6 · No dependencies
   ═══════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ───────────────  DARK MODE TOGGLE  ─────────────── */

  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  // Determine initial theme: saved preference → default to dark
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || 'dark';
  body.setAttribute('data-theme', initialTheme);

  toggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Listen for system preference changes (only if user hasn't manually set)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  /* ───────────────  MOBILE MENU  ─────────────── */

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  /* ───────────────  NAVBAR SCROLL EFFECT  ─────────────── */

  const nav = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  }, { passive: true });

  /* ───────────────  INTERSECTION OBSERVER (SCROLL REVEAL)  ─────────────── */

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Ensure all elements are visible if reduced motion is preferred
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
  }

  /* ───────────────  SCROLL-SPY: ACTIVE NAV LINK  ─────────────── */

  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a');

  const setActiveLink = (id) => {
    navAnchors.forEach((a) => a.classList.remove('active'));
    // Highlight exact match
    const activeLink = document.querySelector(`.nav__links a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('active');
    // When what-i-do section is in view, also highlight the parent + active child
    if (id === 'what-i-do') {
      const parentLink = document.querySelector('.nav__parent-link');
      if (parentLink) parentLink.classList.add('active');
      // highlight the child link matching whichever tab is currently open
      const openTab = document.querySelector('.wid-tab--active');
      if (openTab) {
        const tabName = openTab.getAttribute('data-tab');
        const childLink = document.querySelector(`.nav__child-link[data-tab="${tabName}"]`);
        if (childLink) childLink.classList.add('active');
      }
    }
  };

  // Set hero as active on load
  setActiveLink('hero');

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute('id'));
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '-64px 0px -60% 0px',
    }
  );

  sections.forEach((section) => activeObserver.observe(section));

  /* ───────────────  SMOOTH SCROLL FOR ANCHOR LINKS  ─────────────── */

  // Helper: switch the WID tab strip to a given tab name
  const activateWidTab = (tabName) => {
    const allTabs = document.querySelectorAll('.wid-tab');
    const allPanels = document.querySelectorAll('.wid-panel');
    allTabs.forEach((t) => {
      const isTarget = t.getAttribute('data-tab') === tabName;
      t.classList.toggle('wid-tab--active', isTarget);
      t.setAttribute('aria-selected', isTarget);
    });
    allPanels.forEach((p) => {
      const isTarget = p.id === `wid-panel-${tabName}`;
      p.classList.toggle('wid-panel--active', isTarget);
      p.setAttribute('aria-hidden', !isTarget);
    });
    // Update nav child highlight
    document.querySelectorAll('.nav__child-link').forEach((cl) => {
      cl.classList.toggle('active', cl.getAttribute('data-tab') === tabName);
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = anchor.getAttribute('data-tab');
      const href = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      // If this is a nav child-link, switch tab first then scroll
      if (tabName) activateWidTab(tabName);
      const isMobile = window.innerWidth <= 900;
      const offset = isMobile ? 56 : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });

  /* ───────────────  WHAT I DO — TAB STRIP  ─────────────── */

  document.querySelectorAll('.wid-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');
      activateWidTab(tabName);
      // Re-run scroll-spy logic so nav child highlight updates immediately
      setActiveLink('what-i-do');
    });
  });

  /* ───────────────  WORK CARD EXPAND TOGGLES  ─────────────── */

  document.querySelectorAll('.card__toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (!panel) return;
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      btn.textContent = isExpanded ? 'show details' : 'hide details';
      panel.classList.toggle('is-expanded', !isExpanded);
      panel.setAttribute('aria-hidden', isExpanded);
    });
  });

  /* ───────────────  PUBLICATION CARD EXPAND TOGGLES  ─────────────── */

  document.querySelectorAll('.pub-card__toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (!panel) return;
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      btn.innerHTML = isExpanded ? 'abstract &#9662;' : 'abstract &#9652;';
      panel.classList.toggle('is-expanded', !isExpanded);
      panel.setAttribute('aria-hidden', isExpanded);
    });
  });

  /* ───────────────  PUBLICATION FILTER  ─────────────── */

  const filterBtns = document.querySelectorAll('.pub-filter__btn');
  const pubCards = document.querySelectorAll('.pub-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');

      pubCards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('is-hidden');
        } else {
          const cats = card.getAttribute('data-category') || '';
          card.classList.toggle('is-hidden', !cats.includes(filter));
        }
      });
    });
  });

  /* ───────────────  PLAYGROUND CARD TILT  ─────────────── */

  document.querySelectorAll('.playground-card').forEach((card) => {
    const MAX_TILT = 12; // degrees

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);  // -1 to 1
      const dy = (e.clientY - cy) / (rect.height / 2); // -1 to 1
      const rotateX = -dy * MAX_TILT;
      const rotateY = dx * MAX_TILT;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
      card.style.transition = 'transform 0.08s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s ease, border-color 0.3s ease';
    });
  });

  /* ───────────────  GANTT CHART  ─────────────── */

  const ganttEl = document.getElementById('gantt-inner');
  if (ganttEl) {
    const START_YEAR = 2016;
    const END_YEAR = 2027;
    const TOTAL = END_YEAR - START_YEAR;

    // Most recent first (rows top-to-bottom)
    const rows = [
      { label: 'Lab Operations Lead', start: 2022, end: 2026, type: 'ops', timelineIdx: 2 },
      { label: 'Teaching Assistant', start: 2022, end: 2024, type: 'teaching', timelineIdx: 1 },
      { label: 'NCBS-TIFR PhD', start: 2021, end: 2026, type: 'research', timelineIdx: 0 },
      { label: 'IISER Tirupati BS-MS', start: 2016, end: 2021, type: 'edu', timelineIdx: 3 },
    ];

    // Build year axis — newest year LEFT, oldest RIGHT
    const axis = document.createElement('div');
    axis.className = 'gantt__axis';
    for (let y = END_YEAR - 1; y >= START_YEAR; y--) {
      const span = document.createElement('span');
      span.className = 'gantt__year';
      span.textContent = y;
      axis.appendChild(span);
    }
    ganttEl.appendChild(axis);

    const timelineItems = document.querySelectorAll('.timeline__item');
    let activeGanttBar = null;

    rows.forEach((row) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'gantt__row';

      const label = document.createElement('div');
      label.className = 'gantt__label';
      label.textContent = row.label;
      label.title = row.label;

      const track = document.createElement('div');
      track.className = 'gantt__track';

      const bar = document.createElement('div');
      bar.className = `gantt__bar gantt__bar--${row.type}`;

      // Axis is reversed: position 0% = END_YEAR, position 100% = START_YEAR
      // left  = distance from the right of the axis for bar's END year
      // right = distance from left for bar's START year
      // left%  = (END_YEAR - row.end)   / TOTAL * 100
      // width% = (row.end - row.start) / TOTAL * 100
      const left = ((END_YEAR - row.end) / TOTAL) * 100;
      const width = ((row.end - row.start) / TOTAL) * 100;
      bar.style.left = left + '%';
      bar.style.width = width + '%';
      bar.textContent = `${row.start}–${row.end}`;
      bar.style.cursor = 'pointer';
      bar.title = `Click to view: ${row.label}`;

      // Click bar → highlight corresponding timeline item
      bar.addEventListener('click', () => {
        document.querySelectorAll('.gantt__bar').forEach(b => b.classList.remove('gantt__bar--active'));
        document.querySelectorAll('.timeline__item').forEach(item => {
          item.querySelector('.timeline__marker').classList.remove('timeline__marker--active');
        });

        bar.classList.add('gantt__bar--active');

        const target = timelineItems[row.timelineIdx];
        if (target) {
          target.querySelector('.timeline__marker').classList.add('timeline__marker--active');
          const isMobile = window.innerWidth <= 900;
          const offset = isMobile ? 56 : 20;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }

        activeGanttBar = bar;
      });

      track.appendChild(bar);
      rowEl.appendChild(label);
      rowEl.appendChild(track);
      ganttEl.appendChild(rowEl);
    });
  }

  /* ───────────────  ART SLIDESHOW — INFINITE MARQUEE  ─────────────── */

  const artStrip = document.getElementById('art-strip');
  
  if (artStrip) {
    // 1. Wrap all images in a track div
    const images = Array.from(artStrip.children);
    const track1 = document.createElement('div');
    track1.className = 'art__track';
    
    images.forEach(img => track1.appendChild(img));
    artStrip.appendChild(track1);

    // 2. Clone the track and append it for the seamless infinite loop
    const track2 = track1.cloneNode(true);
    track2.setAttribute('aria-hidden', 'true'); // Hide clone from screen readers
    artStrip.appendChild(track2);
  }

})();
