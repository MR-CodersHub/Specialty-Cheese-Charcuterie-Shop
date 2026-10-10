/**
 * ARTISAN — AUTHENTICATION (Login / Signup, standalone pages)
 * Frontend-only: validation, password toggles, demo social, toast + redirect.
 * Redirect flow (existing site architecture): Login/Signup -> products.html
 */

(function () {
  'use strict';

  var EYE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
  var EYE_OFF_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.addEventListener('DOMContentLoaded', function () {
    initAuthTheme();
    initPasswordToggles();
    initLoginForm();
    initSignupForm();
    initSocialButtons();
  });

  /* Respect saved theme/dir; no toggles on auth pages */
  function initAuthTheme() {
    try {
      var theme = localStorage.getItem('gourmet_theme') || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      var dir = localStorage.getItem('gourmet_dir') || 'ltr';
      document.documentElement.setAttribute('dir', dir);
    } catch (e) { /* private mode: keep defaults */ }
  }

  /* Password visibility toggles */
  function initPasswordToggles() {
    var toggles = document.querySelectorAll('[data-toggle-password]');
    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var inputId = btn.getAttribute('aria-controls');
        var input = inputId ? document.getElementById(inputId) : btn.closest('.auth-input-wrap').querySelector('input');
        if (!input) return;
        var show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.innerHTML = show ? EYE_OFF_SVG : EYE_SVG;
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
        btn.setAttribute('aria-pressed', show ? 'true' : 'false');
        input.focus();
      });
    });
  }

  /* ---- validation helpers ---- */
  function setError(input, message) {
    clearError(input);
    if (!message) return true;
    input.setAttribute('aria-invalid', 'true');
    var err = document.createElement('p');
    err.className = 'auth-error';
    err.id = input.id + '-error';
    err.textContent = message;
    input.setAttribute('aria-describedby', err.id);
    input.insertAdjacentElement('afterend', err);
    return false;
  }

  function clearError(input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    var wrap = input.closest('.auth-field') || input.parentElement;
    var old = wrap ? wrap.querySelector('.auth-error') : null;
    if (old) old.remove();
    var live = document.getElementById(input.id + '-error');
    if (live) live.remove();
  }

  function validEmail(v) { return EMAIL_RE.test(String(v).trim()); }

  /* ---- login ---- */
  function initLoginForm() {
    var form = document.getElementById('loginForm');
    if (!form) return;
    var email = document.getElementById('loginEmail');
    var pass = document.getElementById('loginPassword');
    var remember = document.getElementById('rememberMe');

    try {
      var saved = localStorage.getItem('artisan_remember_email');
      if (saved && email && !email.value) email.value = saved;
    } catch (e) {}

    [email, pass].forEach(function (el) {
      if (el) el.addEventListener('input', function () { clearError(el); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      if (!email.value.trim()) ok = setError(email, 'Email address is required.') && ok;
      else if (!validEmail(email.value)) ok = setError(email, 'Enter a valid email address.') && ok;
      if (!pass.value) ok = setError(pass, 'Password is required.') && ok;
      if (!ok) {
        var first = form.querySelector('[aria-invalid="true"]');
        if (first) first.focus();
        return;
      }
      try {
        if (remember && remember.checked) localStorage.setItem('artisan_remember_email', email.value.trim());
        else localStorage.removeItem('artisan_remember_email');
      } catch (err) {}
      authToast('Login Successful', 'Welcome back! Redirecting to the shop...');
      setTimeout(function () { window.location.href = 'products.html'; }, 1100);
    });
  }

  /* ---- signup ---- */
  function initSignupForm() {
    var form = document.getElementById('signupForm');
    if (!form) return;
    var name = document.getElementById('signupName');
    var email = document.getElementById('signupEmail');
    var pass = document.getElementById('signupPassword');
    var confirm = document.getElementById('signupConfirm');
    var terms = document.getElementById('termsCheck');

    [name, email, pass, confirm].forEach(function (el) {
      if (el) el.addEventListener('input', function () { clearError(el); });
    });
    if (terms) terms.addEventListener('change', function () {
      var msg = document.getElementById('terms-error');
      if (msg) msg.remove();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      if (!name.value.trim() || name.value.trim().length < 2) ok = setError(name, 'Enter your full name.') && ok;
      if (!email.value.trim()) ok = setError(email, 'Email address is required.') && ok;
      else if (!validEmail(email.value)) ok = setError(email, 'Enter a valid email address.') && ok;
      if (!pass.value) ok = setError(pass, 'Create a password.') && ok;
      else if (pass.value.length < 8) ok = setError(pass, 'Password must be at least 8 characters.') && ok;
      if (!confirm.value) ok = setError(confirm, 'Confirm your password.') && ok;
      else if (confirm.value !== pass.value) ok = setError(confirm, 'Passwords do not match.') && ok;
      if (terms && !terms.checked) {
        ok = false;
        if (!document.getElementById('terms-error')) {
          var p = document.createElement('p');
          p.className = 'auth-error';
          p.id = 'terms-error';
          p.textContent = 'Please accept the Terms & Conditions and Privacy Policy.';
          terms.closest('.auth-checkbox').insertAdjacentElement('afterend', p);
        }
      }
      if (!ok) {
        var first = form.querySelector('[aria-invalid="true"]');
        if (first) first.focus();
        else if (terms && !terms.checked) terms.focus();
        return;
      }
      authToast('Account Created!', 'Welcome to Artisan! Redirecting to the shop...');
      setTimeout(function () { window.location.href = 'products.html'; }, 1100);
    });
  }

  /* ---- social (frontend UI only) ---- */
  function initSocialButtons() {
    document.querySelectorAll('[data-social]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var provider = btn.getAttribute('data-social') || 'Social';
        authToast(provider + ' Sign-In', 'Social sign-in is a demo here — use email to continue.');
      });
    });
  }

  /* Toast: reuse main.js style if present, else minimal fallback */
  function authToast(title, message) {
    if (window.showToast) {
      window.showToast(title, message, 'cheese');
      return;
    }
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<div class="toast-content"><div class="toast-title"></div><div class="toast-message"></div></div>';
    toast.querySelector('.toast-title').textContent = title;
    toast.querySelector('.toast-message').textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add('show'); });
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 400);
    }, 3200);
  }
})();
