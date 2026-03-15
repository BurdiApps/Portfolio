/* =====================================================
   James Burdick Portfolio — script.js
   ===================================================== */

(function () {
  'use strict';

  // ---------- Active nav link highlighting ----------
  function setActiveNav() {
    var links = document.querySelectorAll('.nav-link');
    var path = window.location.pathname;

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      // Normalise: strip trailing slash
      var normPath = path.replace(/\/$/, '') || '/';
      var normHref = href.replace(/\/$/, '') || '/';

      // Match exact path or end-of-path (handles baseurl prefix)
      var isActive =
        normPath === normHref ||
        normPath.endsWith(normHref) ||
        (normHref !== '/' && normHref !== '' && normPath.endsWith(normHref.replace(/\.html$/, '')));

      link.classList.toggle('active', isActive);
    });
  }

  // ---------- Mobile hamburger menu ----------
  function initMobileMenu() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    links.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initMobileMenu();
  });
})();
