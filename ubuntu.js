/* ═══════════════════════════════════════════
   ubuntu.js — Desktop Environment Logic
   ═══════════════════════════════════════════ */

(() => {
  'use strict';

  /* ── Clock ── */
  const clockEl = document.getElementById('topbar-time');
  const updateClock = () => {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  updateClock();
  setInterval(updateClock, 10000);

  /* ── Window content definitions ── */
  const WINDOWS = {
    about: {
      title: 'About Me — Revathy Menon',
      width: 560,
      height: 420,
      render: () => `
        <h2>👤 About Me</h2>
        <p>I'm a <strong>computational biology PhD candidate</strong> at the <strong>National Centre for Biological Sciences (NCBS-TIFR)</strong>, Bangalore, working under Prof. Ramanathan Sowdhamini.</p>
        <p>My research sits at the convergence of structural bioinformatics, machine learning, and molecular modelling — I design end-to-end ML pipelines that decode how proteins recognise their partners.</p>
        <h3>Quick Facts</h3>
        <ul>
          <li><strong>Institution:</strong> NCBS-TIFR, Bangalore</li>
          <li><strong>Degree:</strong> PhD Biological Sciences (Expected Jul 2026)</li>
          <li><strong>Prior Education:</strong> Integrated BS-MS, IISER Tirupati</li>
          <li><strong>Rank:</strong> CSIR-NET JRF — AIR 65 (Top 0.1%)</li>
          <li><strong>Publications:</strong> 6 peer-reviewed (3 co-first author)</li>
          <li><strong>Languages:</strong> English · Hindi · Malayalam · Bengali</li>
        </ul>
      `
    },
    research: {
      title: 'Research Projects',
      width: 620,
      height: 500,
      render: () => `
        <h2>🔬 Research Projects</h2>
        <h3>DockScore 2.0</h3>
        <p>ML-augmented protein–protein docking scorer. Achieved <strong>F1 = 0.91</strong> and Spearman's ρ = 0.70 across 257 complexes and 100K+ decoys.</p>
        <div><span class="win__tag">Python</span><span class="win__tag">XGBoost</span><span class="win__tag">GNNs</span><span class="win__tag">LightDock</span></div>

        <h3>PASS2 v8 Database</h3>
        <p>Led update of PASS2 — <strong>26,690 protein domains</strong> across 2,058 superfamilies. 90.4% pipeline success rate.</p>
        <div><span class="win__tag">Python</span><span class="win__tag">HMMER</span><span class="win__tag">MariaDB</span><span class="win__tag">BioPython</span></div>

        <h3>Actin–Tropomyosin Interface</h3>
        <p>Modelled actin–tropomyosin interface across human and yeast isoforms using AlphaFold2-Multimer and iterative LightDock docking.</p>
        <div><span class="win__tag">AlphaFold2</span><span class="win__tag">LightDock</span><span class="win__tag">FoldX</span><span class="win__tag">PyMol</span></div>

        <h3>TRAM Dimer Interface Mutations</h3>
        <p>Investigated dominant-negative mutations via <strong>200 ns MD simulations</strong>. Revealed structural basis for abrogated TRIF recruitment.</p>
        <div><span class="win__tag">GROMACS</span><span class="win__tag">HADDOCK</span><span class="win__tag">MDM-TASK</span></div>
      `
    },
    publications: {
      title: 'Publications',
      width: 600,
      height: 480,
      render: () => `
        <h2>📄 Publications</h2>
        <p style="font-size:0.78rem;color:var(--ubuntu-muted);margin-bottom:1rem">Sorted by year (newest first), then title.</p>

        <h3>2026</h3>
        <p><strong>Menon, R.</strong>, et al.<br/>
        GRAYU: graph-based database integrating Ayurvedic formulations, medicinal plants, phytochemicals and diseases<br/>
        <em>Frontiers in Pharmacology</em><br/>
        <a href="https://doi.org/10.3389/fphar.2025.1727224" target="_blank">DOI ↗</a></p>

        <h3>2025</h3>
        <p><strong>Menon, R.*, Bheemireddy, S.*</strong>, Chavali, S., Sowdhamini, R., Srinivasan, N.<br/>
        Computational analyses of bifurcated inter-protein interactions in protein–protein assemblies<br/>
        <em>Proteins: Structure, Function, and Bioinformatics</em><br/>
        <a href="https://doi.org/10.1002/prot.70090" target="_blank">DOI ↗</a></p>

        <p><strong>Menon, R.</strong> et al.<br/>
        Evolution of Protein Families<br/>
        <em>Encyclopedia of Bioinformatics and Computational Biology (2nd ed.), Vol. 3</em><br/>
        <a href="https://doi.org/10.1016/B978-0-323-95502-7.00144-5" target="_blank">DOI ↗</a></p>

        <p><strong>Menon, R.*, Nayak, S.*</strong>, Rajesh, R., Sowdhamini, R.<br/>
        PASS2: update of database of structure-based sequence alignments of protein superfamilies<br/>
        <em>Database</em><br/>
        <a href="https://doi.org/10.1093/database/baaf072" target="_blank">DOI ↗</a></p>

        <p>Pathak, A., Tiwari, V., <strong>Menon, R.</strong>, Sowdhamini, R.<br/>
        Prediction of Protein–Protein Interactions<br/>
        <em>Encyclopedia of Bioinformatics and Computational Biology (2nd ed.), Vol. 4</em><br/>
        <a href="https://doi.org/10.1016/B978-0-323-95502-7.00146-9" target="_blank">DOI ↗</a></p>

        <h3>2024</h3>
        <p><strong>Menon, R.*, Verma, S.*</strong>, Sowdhamini, R.<br/>
        Structural insights into the role of deleterious mutations at the dimeric interface of TRAM<br/>
        <em>Proteins: Structure, Function, and Bioinformatics</em> &mdash; Top 10% most-viewed (2024)<br/>
        <a href="https://doi.org/10.1002/prot.26707" target="_blank">DOI ↗</a></p>
      `
    },
    skills: {
      title: 'Technical Skills',
      width: 520,
      height: 420,
      render: () => `
        <h2>⚙️ Technical Skills</h2>
        <h3>Languages &amp; Frameworks</h3>
        <div><span class="win__tag">Python</span><span class="win__tag">R</span><span class="win__tag">SQL</span><span class="win__tag">PHP</span><span class="win__tag">JavaScript</span><span class="win__tag">Django</span><span class="win__tag">LaTeX</span></div>
        <h3>Machine Learning</h3>
        <div><span class="win__tag">XGBoost</span><span class="win__tag">Random Forest</span><span class="win__tag">SVM</span><span class="win__tag">Neural Networks</span><span class="win__tag">GNNs</span><span class="win__tag">Knowledge Distillation</span><span class="win__tag">K-Means</span><span class="win__tag">MCMC</span></div>
        <h3>Structural Biology</h3>
        <div><span class="win__tag">AlphaFold 2/3</span><span class="win__tag">GROMACS</span><span class="win__tag">LightDock</span><span class="win__tag">HADDOCK</span><span class="win__tag">PyMol</span><span class="win__tag">FoldX</span><span class="win__tag">ColabFold</span></div>
        <h3>Data &amp; Analysis</h3>
        <div><span class="win__tag">Pandas</span><span class="win__tag">NumPy</span><span class="win__tag">scikit-learn</span><span class="win__tag">Matplotlib</span><span class="win__tag">BioPython</span><span class="win__tag">DESeq2</span><span class="win__tag">HMMER</span></div>
      `
    },
    contact: {
      title: 'Contact',
      width: 440,
      height: 320,
      render: () => `
        <h2>✉️ Contact</h2>
        <p>Whether you want to talk science, collaboration, or opportunities — I'd love to hear from you.</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:revathy@ncbs.res.in">revathy@ncbs.res.in</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/revathy-menon" target="_blank">revathy-menon</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/revathy-menon/" target="_blank">revathy-menon</a></li>
          <li><strong>Google Scholar:</strong> <a href="https://scholar.google.com/scholar?q=Revathy+Menon+NCBS" target="_blank">Revathy Menon</a></li>
        </ul>
      `
    },
    terminal: {
      title: 'Terminal — revathy@ncbs',
      width: 560,
      height: 380,
      isTerminal: true,
      render: () => '' // handled separately
    }
  };

  const TERMINAL_LINES = [
    { type: 'prompt', text: 'revathy@ncbs:~$ whoami' },
    { type: 'output', text: 'revathy' },
    { type: 'prompt', text: 'revathy@ncbs:~$ cat about.txt' },
    { type: 'output', text: 'PhD Candidate · Computational Structural Biology' },
    { type: 'output', text: 'NCBS-TIFR, Bangalore · Expected graduation: Jul 2026' },
    { type: 'prompt', text: 'revathy@ncbs:~$ ls publications/' },
    { type: 'output', text: 'tram_2024.pdf  pass2_2025.pdf  bifurcated_2025.pdf  grayu_2026.pdf' },
    { type: 'prompt', text: 'revathy@ncbs:~$ echo $CSIR_NET_RANK' },
    { type: 'output', text: 'AIR 65 (Top 0.1%)' },
    { type: 'prompt', text: 'revathy@ncbs:~$ python --version' },
    { type: 'output', text: 'Python 3.11.4' },
    { type: 'prompt', text: 'revathy@ncbs:~$ █' },
  ];

  /* ── Window manager ── */
  let zCounter = 100;
  const openWindows = {}; // id -> winEl

  const windowsLayer = document.getElementById('windows-layer');

  function createWindow(id) {
    const def = WINDOWS[id];
    if (!def) return;

    // If already open, focus it
    if (openWindows[id]) {
      focusWindow(openWindows[id]);
      return;
    }

    const win = document.createElement('div');
    win.className = 'win';
    win.id = 'win-' + id;

    // Position with slight offset stacking
    const existingCount = Object.keys(openWindows).length;
    const offsetX = 80 + existingCount * 30;
    const offsetY = 50 + existingCount * 25;
    win.style.left   = offsetX + 'px';
    win.style.top    = (offsetY + 32) + 'px';
    win.style.width  = def.width  + 'px';
    win.style.height = def.height + 'px';
    win.style.zIndex = ++zCounter;

    // Title bar
    const titlebar = document.createElement('div');
    titlebar.className = 'win__titlebar';
    titlebar.innerHTML = `
      <span class="win__title">${def.title}</span>
      <div class="win__controls">
        <button class="win__btn win__btn--minimize" title="Minimise">&#8211;</button>
        <button class="win__btn win__btn--maximize" title="Maximise">&#9633;</button>
        <button class="win__btn win__btn--close"    title="Close">&#10005;</button>
      </div>
    `;

    // Body
    let body;
    if (def.isTerminal) {
      const termDiv = document.createElement('div');
      termDiv.className = 'win__terminal';
      TERMINAL_LINES.forEach((line, i) => {
        const el = document.createElement('div');
        el.className = 'term-line';
        el.innerHTML = line.type === 'prompt'
          ? `<span class="term-prompt">$ </span>${line.text.replace(/^\S+\$ /, '')}`
          : `<span class="term-output">${line.text}</span>`;
        el.style.opacity = '0';
        setTimeout(() => { el.style.transition = 'opacity 0.3s'; el.style.opacity = '1'; }, i * 120);
        termDiv.appendChild(el);
      });
      body = termDiv;
    } else {
      body = document.createElement('div');
      body.className = 'win__body';
      body.innerHTML = def.render();
    }

    win.appendChild(titlebar);
    win.appendChild(body);
    windowsLayer.appendChild(win);
    openWindows[id] = win;

    // Mark dock icon as open
    document.querySelectorAll(`.dock__item[data-window="${id}"]`)
      .forEach(el => el.classList.add('is-open'));

    // Close button
    titlebar.querySelector('.win__btn--close').addEventListener('click', () => closeWindow(id));

    // Maximize button
    titlebar.querySelector('.win__btn--maximize').addEventListener('click', () => {
      if (win.dataset.maximized === 'true') {
        Object.assign(win.style, {
          left: win.dataset.prevLeft, top: win.dataset.prevTop,
          width: win.dataset.prevW, height: win.dataset.prevH
        });
        win.dataset.maximized = 'false';
      } else {
        win.dataset.prevLeft = win.style.left;
        win.dataset.prevTop  = win.style.top;
        win.dataset.prevW    = win.style.width;
        win.dataset.prevH    = win.style.height;
        Object.assign(win.style, {
          left: '0', top: '32px',
          width: '100vw', height: 'calc(100vh - 32px - 62px)'
        });
        win.dataset.maximized = 'true';
      }
    });

    // Drag to move
    makeDraggable(win, titlebar);

    // Focus on click
    win.addEventListener('mousedown', () => focusWindow(win));
    focusWindow(win);
  }

  function closeWindow(id) {
    const win = openWindows[id];
    if (!win) return;
    win.remove();
    delete openWindows[id];
    document.querySelectorAll(`.dock__item[data-window="${id}"]`)
      .forEach(el => el.classList.remove('is-open'));
  }

  function focusWindow(win) {
    document.querySelectorAll('.win').forEach(w => w.classList.remove('is-focused'));
    win.style.zIndex = ++zCounter;
    win.classList.add('is-focused');
  }

  function makeDraggable(win, handle) {
    let startX, startY, startL, startT;

    handle.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('win__btn')) return;
      startX = e.clientX;
      startY = e.clientY;
      startL = parseInt(win.style.left) || 0;
      startT = parseInt(win.style.top)  || 0;

      const onMove = (e2) => {
        win.style.left = (startL + e2.clientX - startX) + 'px';
        win.style.top  = Math.max(32, startT + e2.clientY - startY) + 'px';
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });
  }

  /* ── Wire up desktop icons and dock ── */
  document.querySelectorAll('[data-window]').forEach((el) => {
    el.addEventListener('click', () => createWindow(el.dataset.window));
  });

  /* ── Double-click desktop icons ── */
  // (single click already works — kept for consistency)

})();
