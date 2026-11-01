/* =====================================================
   James Burdick Portfolio: script.js
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

  // ---------- Expandable project categories ----------
  function initProjectCategories() {
    document.querySelectorAll('.project-expand').forEach(function (button) {
      var panelId = button.getAttribute('aria-controls');
      var panel = panelId ? document.getElementById(panelId) : null;
      var label = button.querySelector('span');

      if (!panel || !label) return;

      button.addEventListener('click', function () {
        var isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isExpanded));
        panel.hidden = isExpanded;
        label.textContent = isExpanded ? label.textContent.replace('Hide', 'Explore') : label.textContent.replace('Explore', 'Hide');
      });
    });

    document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
      var track = carousel.querySelector('.project-carousel-track');
      var slides = Array.prototype.slice.call(carousel.querySelectorAll('.project-slide'));
      var previous = carousel.querySelector('[data-carousel-prev]');
      var next = carousel.querySelector('[data-carousel-next]');
      var count = carousel.querySelector('.carousel-count');
      var current = 0;

      if (!track || !slides.length || !previous || !next || !count) return;

      function showSlide(index) {
        current = Math.max(0, Math.min(index, slides.length - 1));
        track.style.transform = 'translateX(-' + (current * 100) + '%)';

        slides.forEach(function (slide, slideIndex) {
          var isCurrent = slideIndex === current;
          slide.setAttribute('aria-hidden', String(!isCurrent));
          slide.inert = !isCurrent;
        });

        previous.disabled = current === 0;
        next.disabled = current === slides.length - 1;
        count.textContent = (current + 1) + ' / ' + slides.length;
      }

      previous.addEventListener('click', function () {
        showSlide(current - 1);
      });

      next.addEventListener('click', function () {
        showSlide(current + 1);
      });

      carousel.addEventListener('keydown', function (event) {
        if (event.target.matches('input, textarea, select')) return;

        if (event.key === 'ArrowLeft' && current > 0) {
          event.preventDefault();
          showSlide(current - 1);
        } else if (event.key === 'ArrowRight' && current < slides.length - 1) {
          event.preventDefault();
          showSlide(current + 1);
        }
      });

      showSlide(0);
    });

    document.querySelectorAll('[data-project-gallery]').forEach(function (gallery) {
      var preview = gallery.querySelector('.project-preview-image');
      var choices = gallery.querySelectorAll('.project-image-choice');

      if (!preview || !choices.length) return;

      choices.forEach(function (choice) {
        choice.addEventListener('click', function () {
          var imageSrc = choice.getAttribute('data-preview-src');
          var imageAlt = choice.getAttribute('data-preview-alt');

          if (!imageSrc || !imageAlt) return;

          preview.setAttribute('src', imageSrc);
          preview.setAttribute('alt', imageAlt);
          choices.forEach(function (item) {
            var isSelected = item === choice;
            item.classList.toggle('is-selected', isSelected);
            item.setAttribute('aria-pressed', String(isSelected));
          });
        });
      });
    });
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initMobileMenu();
    initProjectCategories();
  });
})();
