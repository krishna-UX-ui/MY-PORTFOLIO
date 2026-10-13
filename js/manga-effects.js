/**
 * CINEMATIC DARK MANGA PROTAGONIST PORTFOLIO
 * Identity: GHANA KRISHNA SONOWAL
 * Interactive Effects, 14-Step Intro Sequence, Speed Lines, Ink Splashes, SFX Popups
 */

(function () {
  'use strict';

  // Sound Effects Catalog (Visual Onomatopoeia)
  const SFX_LIST = ['「ドン！」', '「シュッ」', '「ザッ」', '「バッ」', '「カッ」', '「ゴゴゴ…」', '「ギュン」'];

  // Project Dossiers Data
  const CHAPTER_DOSSIERS = {
    'datalens': {
      chapter: 'CHAPTER 01',
      title: 'DATA-LENS',
      subtitle: 'CSV Analysis Studio & Statistical ML Pipeline',
      tech: 'PHP 8.2 • MySQL • PapaParse • jsPDF • Chart.js • Vanilla JS',
      summary: 'A full-stack data analytics and CSV intelligence suite. Ingests raw multidimensional tabular datasets, automatically isolates anomalies, computes Pearson correlation matrices, generates distribution graphs, and produces automated corporate PDF executive summaries.',
      architecture: [
        'Client-side streaming CSV parser handling 100,000+ records with zero UI freeze',
        'Automated cleaning engine: missing value imputation, outlier IQR capping, type inference',
        'Automated statistical analysis: skewness, kurtosis, variance, multidimensional distributions',
        'Secure PHP + MySQL user session management with bcrypt hashing and telemetry storage'
      ],
      metrics: 'Tested on real-world epidemiological and financial datasets (COVID-19 WHO, Sales Records)'
    },
    'nexora': {
      chapter: 'CHAPTER 02',
      title: 'NEXORA',
      subtitle: 'Digital Behavior Intelligence Engine & Telemetry ML',
      tech: 'Python 3.12 • Flask • Scikit-learn • Pandas • SQLite3 • Chart.js',
      summary: 'A zero-content, privacy-preserving digital behavior intelligence engine. Quantifies human-computer interaction rhythms (velocity, click cadence, window transitions) without logging keystroke characters, passwords, or screen contents.',
      architecture: [
        'Supervised Random Forest classification into 5 behavioral archetypes (Deep Focus, Casual, Fragmented, etc.)',
        'Unsupervised Isolation Forest baseline profiling with dynamic anomaly scoring',
        'Mathematical indices: Focus Index, Continuity Index, Fragmentation Score, Interaction Stability',
        'Local SQLite persistence, streaming websocket charts, and privacy-first data purge controls'
      ],
      metrics: 'Over 94% behavioral classification accuracy; zero text or credential capture'
    },
    'aetheris': {
      chapter: 'CHAPTER 03',
      title: 'AETHERIS',
      subtitle: 'Autonomous AI Agent Benchmarking & Evaluation Suite',
      tech: 'Docker • Python • X-Ray Telemetry • JSONL Benchmarks • Voice/UI Console',
      summary: 'An autonomous multi-agent evaluation framework designed to benchmark autonomous coding models against complex edge-case tasks. Employs sandboxed test harnesses and runtime execution telemetry.',
      architecture: [
        'Isolated containerized harness execution with resource constraints and timeout governance',
        'X-Ray telemetry tracing agent tool calls, decision graphs, and token consumption',
        'Standardized evaluation datasets (JSONL) with automated pass/fail scoring matrices',
        'Dual-interface console: Interactive CLI runtime + full-fidelity web observer dashboard'
      ],
      metrics: 'Automated multi-turn evaluation harness with sub-second execution tracing'
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    initCinematicIntro();
    initSpeedLinesCanvas();
    initInkSplashesCanvas();
    initScrollSFX();
    initParallax();
    initModal();
    initMobileNav();
    initForm();
  });

  /* ==========================================================================
     1. CINEMATIC INTRO SEQUENCE (14 STEPS)
     ========================================================================== */
  function initCinematicIntro() {
    const introOverlay = document.getElementById('cinematic-intro');
    const introCanvas = document.getElementById('intro-canvas');
    const comicFrame = document.querySelector('.intro-comic-frame');
    const visualStage = document.querySelector('.intro-visual-stage');
    const introSFX = document.querySelector('.intro-sfx');
    const introName = document.querySelector('.intro-name');
    const introSubtitle = document.querySelector('.intro-subtitle');
    const introTagline = document.querySelector('.intro-tagline');
    const skipBtn = document.querySelector('.skip-intro-btn');
    const replayBtn = document.getElementById('replay-intro-btn');

    if (!introOverlay) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      introOverlay.classList.add('intro-hidden');
      return;
    }

    let introCtx = null;
    let animId = null;
    let introStartTime = 0;
    let isIntroRunning = false;

    if (introCanvas) {
      introCtx = introCanvas.getContext('2d');
      resizeCanvas(introCanvas);
      window.addEventListener('resize', () => resizeCanvas(introCanvas));
    }

    function resizeCanvas(canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function startIntro() {
      isIntroRunning = true;
      introOverlay.classList.remove('intro-hidden');
      if (comicFrame) comicFrame.classList.remove('active');
      if (visualStage) visualStage.classList.remove('active');
      if (introSFX) introSFX.classList.remove('slam');
      if (introName) introName.classList.remove('reveal');
      if (introSubtitle) introSubtitle.classList.remove('reveal');
      if (introTagline) introTagline.classList.remove('reveal');

      introStartTime = performance.now();
      requestAnimationFrame(runIntroTimeline);
    }

    function runIntroTimeline(currentTime) {
      if (!isIntroRunning) return;
      const elapsed = currentTime - introStartTime;
      const width = introCanvas.width;
      const height = introCanvas.height;
      const cx = width / 2;
      const cy = height / 2;

      introCtx.clearRect(0, 0, width, height);

      // STEP 1 & 2: Black screen + Expanding white ink stroke (0 - 400ms)
      if (elapsed < 600) {
        const progress = Math.min(elapsed / 500, 1);
        introCtx.fillStyle = '#ffffff';
        introCtx.beginPath();
        // Central organic ink streak
        const strokeLen = progress * (width * 0.7);
        const strokeH = Math.sin(progress * Math.PI) * 18 + 4;
        introCtx.ellipse(cx, cy, strokeLen / 2, strokeH, -0.05, 0, Math.PI * 2);
        introCtx.fill();
      }

      // STEP 3 & 4: Ink particles & droplets spread (400 - 1100ms)
      if (elapsed >= 400 && elapsed < 1200) {
        const pElapsed = elapsed - 400;
        const count = 35;
        introCtx.fillStyle = '#ffffff';
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          const speed = (i % 5 + 3) * 1.8;
          const dist = (pElapsed * 0.001) * 350 * speed;
          const px = cx + Math.cos(angle) * dist;
          const py = cy + Math.sin(angle) * dist * 0.6;
          const radius = Math.max(1, (1 - (pElapsed / 800)) * (i % 6 + 2));
          introCtx.beginPath();
          introCtx.arc(px, py, radius, 0, Math.PI * 2);
          introCtx.fill();
        }
      }

      // STEP 5: Manga speed lines from center (700 - 1600ms)
      if (elapsed >= 700 && elapsed < 1800) {
        introCtx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        introCtx.lineWidth = 2;
        const lineCount = 45;
        for (let i = 0; i < lineCount; i++) {
          const angle = (i / lineCount) * Math.PI * 2 + (elapsed * 0.001);
          const innerR = Math.min(width, height) * 0.18;
          const outerR = Math.min(width, height) * 0.65;
          const x1 = cx + Math.cos(angle) * innerR;
          const y1 = cy + Math.sin(angle) * innerR;
          const x2 = cx + Math.cos(angle) * outerR;
          const y2 = cy + Math.sin(angle) * outerR;
          introCtx.beginPath();
          introCtx.moveTo(x1, y1);
          introCtx.lineTo(x2, y2);
          introCtx.stroke();
        }
      }

      // STEP 6: Comic panel frame forms (900ms)
      if (elapsed >= 900 && comicFrame && !comicFrame.classList.contains('active')) {
        comicFrame.classList.add('active');
      }

      // STEP 7 & 8: Eye Close-Up & Protagonist Silhouette reveals (1200ms)
      if (elapsed >= 1200 && visualStage && !visualStage.classList.contains('active')) {
        visualStage.classList.add('active');
      }

      // STEP 10: Japanese Manga SFX 「ドン！」 slams in (1600ms)
      if (elapsed >= 1600 && introSFX && !introSFX.classList.contains('slam')) {
        introSFX.classList.add('slam');
        spawnSFXAtCenter('「ドン！」');
      }

      // STEP 11, 12, 13: Name, Subtitle, Tagline appear (1800ms - 2200ms)
      if (elapsed >= 1800 && introName && !introName.classList.contains('reveal')) {
        introName.classList.add('reveal');
      }
      if (elapsed >= 2000 && introSubtitle && !introSubtitle.classList.contains('reveal')) {
        introSubtitle.classList.add('reveal');
      }
      if (elapsed >= 2200 && introTagline && !introTagline.classList.contains('reveal')) {
        introTagline.classList.add('reveal');
      }

      // STEP 14: Transition to main page (3200ms)
      if (elapsed >= 3400) {
        finishIntro();
        return;
      }

      requestAnimationFrame(runIntroTimeline);
    }

    function finishIntro() {
      isIntroRunning = false;
      introOverlay.classList.add('intro-hidden');
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', finishIntro);
    }

    if (replayBtn) {
      replayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(startIntro, 400);
      });
    }

    // Auto-start on load
    startIntro();
  }

  /* ==========================================================================
     2. DYNAMIC MANGA SPEED LINES CANVAS
     ========================================================================== */
  function initSpeedLinesCanvas() {
    const canvas = document.getElementById('speed-lines-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let activeBursts = 0;
    let lines = [];
    const NUM_LINES = 60;

    for (let i = 0; i < NUM_LINES; i++) {
      lines.push({
        angle: (i / NUM_LINES) * Math.PI * 2,
        length: Math.random() * 0.4 + 0.2,
        offset: Math.random() * 0.2,
        speed: Math.random() * 0.005 + 0.002,
        width: Math.random() * 2 + 1
      });
    }

    let isScrolling = false;
    let scrollTimer = null;

    window.addEventListener('scroll', () => {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
      }, 150);
    }, { passive: true });

    function renderLines() {
      ctx.clearRect(0, 0, width, height);

      // Only draw when user is scrolling or hovering buttons to avoid distraction
      if (isScrolling || activeBursts > 0) {
        const cx = width * 0.72; // Anchored near character on desktop
        const cy = height * 0.48;
        const maxR = Math.max(width, height);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';

        for (let i = 0; i < lines.length; i++) {
          const l = lines[i];
          l.angle += l.speed;
          const r1 = maxR * (0.15 + l.offset);
          const r2 = r1 + maxR * l.length;

          const x1 = cx + Math.cos(l.angle) * r1;
          const y1 = cy + Math.sin(l.angle) * r1;
          const x2 = cx + Math.cos(l.angle) * r2;
          const y2 = cy + Math.sin(l.angle) * r2;

          ctx.lineWidth = l.width;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      requestAnimationFrame(renderLines);
    }

    requestAnimationFrame(renderLines);

    // Speed burst on CTA hover
    document.querySelectorAll('.manga-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        activeBursts++;
        setTimeout(() => { if (activeBursts > 0) activeBursts--; }, 400);
      });
    });
  }

  /* ==========================================================================
     3. INK SPLASHES & DROPLETS CANVAS
     ========================================================================== */
  function initInkSplashesCanvas() {
    const canvas = document.getElementById('ink-splashes-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];

    function addInkBurst(x, y, count = 18) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3.5 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    }

    // Trigger ink splashes on button clicks
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        addInkBurst(e.clientX, e.clientY, 24);
      }
    });

    function updateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(updateParticles);
    }

    requestAnimationFrame(updateParticles);

    // Export burst function
    window.spawnInkBurst = addInkBurst;
  }

  /* ==========================================================================
     4. JAPANESE MANGA SOUND EFFECTS (ONOMATOPOEIA)
     ========================================================================== */
  function initScrollSFX() {
    const sfxContainer = document.getElementById('manga-sfx-layer');
    if (!sfxContainer) return;

    let lastSFXTime = 0;
    const cooldown = 2500; // Do not overwhelm

    // Observer for section entrances
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const now = Date.now();
          if (now - lastSFXTime > cooldown) {
            lastSFXTime = now;
            const chosenSFX = SFX_LIST[Math.floor(Math.random() * SFX_LIST.length)];
            spawnRandomSFX(chosenSFX);
          }
        }
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('.section-wrapper, .chapter-panel').forEach(el => {
      observer.observe(el);
    });
  }

  function spawnRandomSFX(text) {
    const container = document.getElementById('manga-sfx-layer');
    if (!container) return;

    const elem = document.createElement('div');
    elem.className = 'floating-sfx';
    elem.textContent = text;

    // Position at random pleasing manga comic margin
    const isLeft = Math.random() > 0.5;
    const x = isLeft ? (Math.random() * 15 + 4) : (Math.random() * 15 + 80);
    const y = Math.random() * 50 + 25;
    const size = Math.random() * 1.5 + 2.5;

    elem.style.left = `${x}vw`;
    elem.style.top = `${y}vh`;
    elem.style.fontSize = `${size}rem`;

    container.appendChild(elem);

    setTimeout(() => {
      elem.remove();
    }, 1300);
  }

  function spawnSFXAtCenter(text) {
    const container = document.getElementById('manga-sfx-layer');
    if (!container) return;

    const elem = document.createElement('div');
    elem.className = 'floating-sfx';
    elem.textContent = text;
    elem.style.left = '50%';
    elem.style.top = '40%';
    elem.style.transform = 'translate(-50%, -50%)';
    elem.style.fontSize = '4.5rem';

    container.appendChild(elem);

    setTimeout(() => {
      elem.remove();
    }, 1300);
  }

  /* ==========================================================================
     5. SUBTLE LAYERED PARALLAX DEPTH
     ========================================================================== */
  function initParallax() {
    const heroFrame = document.querySelector('.hero-character-frame');
    const heroBackdrop = document.querySelector('.hero-art-backdrop');
    if (!heroFrame) return;

    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      heroFrame.style.transform = `translate(${dx * -8}px, ${dy * -8}px)`;
      if (heroBackdrop) {
        heroBackdrop.style.transform = `translate(${dx * 12}px, ${dy * 12}px)`;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     6. PROJECT CHAPTER DOSSIER MODAL
     ========================================================================== */
  function initModal() {
    const modal = document.getElementById('chapter-modal');
    const closeBtn = document.querySelector('.modal-close-btn');
    const inspectBtns = document.querySelectorAll('.inspect-chapter-btn');

    if (!modal) return;

    function openDossier(chapterKey) {
      const data = CHAPTER_DOSSIERS[chapterKey];
      if (!data) return;

      document.getElementById('modal-chapter-tag').textContent = data.chapter;
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-subtitle').textContent = data.subtitle;
      document.getElementById('modal-tech').textContent = data.tech;
      document.getElementById('modal-summary').textContent = data.summary;
      document.getElementById('modal-metrics').textContent = data.metrics;

      const archList = document.getElementById('modal-architecture-list');
      archList.innerHTML = '';
      data.architecture.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        archList.appendChild(li);
      });

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.spawnInkBurst) {
        window.spawnInkBurst(window.innerWidth / 2, window.innerHeight / 2, 30);
      }
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    inspectBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const key = btn.getAttribute('data-chapter');
        openDossier(key);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     7. MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!toggleBtn || !navLinks) return;

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggleBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.textContent = '☰';
      });
    });
  }

  /* ==========================================================================
     8. TRANSMISSION FORM INTERACTION
     ========================================================================== */
  function initForm() {
    const form = document.getElementById('transmission-form');
    const statusMsg = document.getElementById('transmission-status');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.textContent;

      btn.disabled = true;
      btn.textContent = 'TRANSMITTING INK SIGNAL...';

      setTimeout(() => {
        btn.textContent = 'TRANSMISSION RECEIVED ✓';
        if (statusMsg) {
          statusMsg.textContent = 'Packet logged to Ghana Krishna Sonowal secure channel.';
          statusMsg.style.display = 'block';
        }
        form.reset();
        if (window.spawnInkBurst) {
          const rect = btn.getBoundingClientRect();
          window.spawnInkBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
        }
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = origText;
        }, 4000);
      }, 900);
    });
  }

})();
