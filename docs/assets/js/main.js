/* ==========================================================================
   GMHAPEX.COM -- main.js
   Vanilla JS only. No frameworks, no dependencies.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Mobile nav toggle -------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.site-nav__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Active nav link ---------------------------------------------------- */
  var currentPath = window.location.pathname;
  var navAnchors = document.querySelectorAll('.site-nav__links a');

  navAnchors.forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (!href) return;

    // Normalize: strip leading slash, trailing slash, .html extension
    var normalized = href.replace(/^\/|\/$/g, '').replace(/\.html$/, '');
    var page = currentPath.replace(/^\/|\/$/g, '').replace(/\.html$/, '') || 'index';

    if (
      (normalized === 'index' && page === '') ||
      (normalized === page) ||
      (page.startsWith('blog') && normalized === 'blog/index') ||
      (page.startsWith('blog/') && normalized === 'blog/index')
    ) {
      anchor.classList.add('active');
    }
  });

  /* --- Smooth scroll for in-page anchor links ----------------------------- */
  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[href^="#"]');
    if (!target) return;
    var id = target.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

})();
