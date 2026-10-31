/**
 * SPECIALTY CHEESE & CHARCUTERIE SHOP — MAIN JAVASCRIPT
 * Plain English UI Controls, Theme Toggle, RTL, Drawers, Lightbox, Toasts
 */

const SVG_ICONS = {
  sun: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>`,
  cheese: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9.5V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.5L12 2zm0 3.2L18.8 10H5.2L12 5.2zM4 12h16v7H4v-7zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>`,
  wine: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12v3c0 3.31-2.69 6-6 6s-6-2.69-6-6V3zm5 9.93V19H8v2h8v-2h-3v-6.07c3.38-.49 6-3.4 6-6.93V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4c0 3.53 2.62 6.44 6 6.93zM8 5h8v1c0 2.21-1.79 4-4 4s-4-1.79-4-4V5z"/></svg>`,
  sparkle: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>`,
  check: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
  cart: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  basket: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.6-7.4"/><path d="M4.5 15.5h15"/></svg>`,
  star: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  mail: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  lock: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  knife: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.7 2.3c-1.4-1.4-3.7-.8-5.3.8L3 14.5l6.5 6.5 11.4-11.4c1.6-1.6 2.2-3.9.8-5.3l-2-2zM4.4 15.9l3.7-3.7 3.7 3.7-3.7 3.7-3.7-3.7z"/></svg>`,
  heart: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  eye: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
  search: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  package: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`,
  gift: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  snowflake: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="4.93" x2="19.07" y1="4.93" y2="19.07"/><line x1="19.07" x2="4.93" y1="4.93" y2="19.07"/></svg>`,
  award: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  chat: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  phone: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  printer: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
  book: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>`,
  feather: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/></svg>`,
  scroll: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  compass: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  leaf: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 7 11 2 20 2c0 9-5 16-11 18z"/><path d="M4 20l7-7"/></svg>`,
  flower: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5z"/></svg>`,
  meat: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.5c-2.48-2.48-6.5-2.48-8.98 0l-7.07 7.07a6.35 6.35 0 0 0 8.98 8.98l7.07-7.07c2.48-2.48 2.48-6.5 0-8.98zm-2.12 6.86-5.66 5.66a3.35 3.35 0 0 1-4.74-4.74l5.66-5.66a3.35 3.35 0 0 1 4.74 4.74z"/></svg>`,
  honey: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8v3H8z"/><path d="M6 6h12a3 3 0 0 1 3 3v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9a3 3 0 0 1 3-3z"/><path d="M8 12h8"/><path d="M10 16h4"/></svg>`,
  warning: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  logo: `<svg class="brand-crest-svg" width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 25h24c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1-.4-1-1s.4-1 1-1z" fill="currentColor" opacity="0.6"/><path d="M18 10c3-3 8-1 8 4s-4 7-7 11h-3c3-3 6-7 5-10-1-2-2-3-3-5z" fill="#9C2F43"/><path d="M21 11c2.5-1.5 5 0 4.5 3s-3.5 5-5.5 8" stroke="#F4BAC3" stroke-width="0.8" stroke-linecap="round" opacity="0.7"/><polygon points="5,17 18,9 23,13 11,21" fill="currentColor" opacity="0.95"/><polygon points="11,21 23,13 23,20 11,26" fill="currentColor"/><polygon points="5,17 11,21 11,26 5,21" fill="currentColor" opacity="0.75"/><ellipse cx="15" cy="18" rx="1.3" ry="0.9" fill="var(--color-cocoa-dark, #352820)"/><ellipse cx="19" cy="16.5" rx="1" ry="0.8" fill="var(--color-cocoa-dark, #352820)"/><ellipse cx="14" cy="23.5" rx="1.1" ry="0.8" fill="var(--color-cocoa-dark, #352820)"/><ellipse cx="18" cy="22" rx="1.4" ry="1" fill="var(--color-cocoa-dark, #352820)"/><circle cx="12" cy="7" r="1" fill="currentColor"/></svg>`
};

window.SVG_ICONS = SVG_ICONS;

function resolveSvgIcon(icon) {
  if (!icon) return SVG_ICONS.sparkle;
  if (typeof icon === 'string' && icon.trim().startsWith('<')) return icon;
  
  const map = {
    '\u{1F9C0}': SVG_ICONS.cheese, 'cheese': SVG_ICONS.cheese,
    '\u{1F377}': SVG_ICONS.wine, 'wine': SVG_ICONS.wine,
    '\u{1F319}': SVG_ICONS.moon, 'moon': SVG_ICONS.moon,
    '\u{2600}\u{FE0F}': SVG_ICONS.sun, '\u{2600}': SVG_ICONS.sun, 'sun': SVG_ICONS.sun,
    '\u{2728}': SVG_ICONS.sparkle, 'sparkle': SVG_ICONS.sparkle, 'sparkles': SVG_ICONS.sparkle,
    '\u{1F389}': SVG_ICONS.sparkle, 'celebrate': SVG_ICONS.sparkle,
    '\u{26A0}\u{FE0F}': SVG_ICONS.warning, '\u{26A0}': SVG_ICONS.warning, 'warning': SVG_ICONS.warning,
    '\u{270D}\u{FE0F}': SVG_ICONS.feather, '\u{270D}': SVG_ICONS.feather, 'feather': SVG_ICONS.feather, 'pen': SVG_ICONS.feather,
    '\u{1F4DC}': SVG_ICONS.scroll, 'scroll': SVG_ICONS.scroll,
    '\u{2709}\u{FE0F}': SVG_ICONS.mail, '\u{2709}': SVG_ICONS.mail, 'mail': SVG_ICONS.mail,
    '\u{1F381}': SVG_ICONS.gift, 'gift': SVG_ICONS.gift,
    '\u{1F4E6}': SVG_ICONS.package, 'package': SVG_ICONS.package,
    '\u{1F9FA}': SVG_ICONS.basket, 'basket': SVG_ICONS.basket,
    '\u{1F50D}': SVG_ICONS.search, 'search': SVG_ICONS.search,
    '\u{1F441}': SVG_ICONS.eye, 'eye': SVG_ICONS.eye,
    '\u{1F512}': SVG_ICONS.lock, '\u{1F510}': SVG_ICONS.lock, 'lock': SVG_ICONS.lock,
    'check': SVG_ICONS.check
  };

  return map[icon] || SVG_ICONS[icon] || `<span class="icon-fallback">${icon}</span>`;
}
window.resolveSvgIcon = resolveSvgIcon;

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDirection();
  initNavbarScroll();
  initDrawers();
  initProfileDropdown();
  initScrollReveal();
  initAccordions();
  initBackToTop();
  initGlobalSearch();
  initQuickViewModal();
  initNewsletterSubmissions();
});

/* ==========================================================================
   1. THEME (LIGHT/DARK) & DIRECTION (RTL/LTR)
   ========================================================================== */
function initThemeAndDirection() {
  const savedTheme = localStorage.getItem('gourmet_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('gourmet_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  });

  const savedDir = localStorage.getItem('gourmet_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  updateRTLIcon(savedDir);

  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('gourmet_dir', newDir);
      updateRTLIcon(newDir);
    });
  });
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll('.theme-toggle-btn span.theme-icon');
  icons.forEach(el => {
    el.innerHTML = theme === 'dark' ? SVG_ICONS.sun : SVG_ICONS.moon;
  });
  const btns = document.querySelectorAll('.theme-toggle-btn.tool-btn');
  btns.forEach(btn => {
    const textNodes = Array.from(btn.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
    if (textNodes.length > 0) {
      textNodes[textNodes.length - 1].textContent = theme === 'dark' ? ' Light Mode' : ' Dark Mode';
    }
  });
}

function updateRTLIcon(dir) {
  const badges = document.querySelectorAll('.rtl-toggle-btn span.dir-label');
  badges.forEach(el => {
    el.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });
}

/* ==========================================================================
   2. NAVBAR SCROLL
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. DRAWERS (CART, SEARCH, MOBILE MENU)
   ========================================================================== */
function initDrawers() {
  const backdrop = document.querySelector('.drawer-backdrop');
  const cartDrawer = document.querySelector('.cart-drawer');
  const searchDrawer = document.querySelector('.search-drawer');
  const mobileMenuDrawer = document.querySelector('.mobile-menu-drawer');

  const openCartBtns = document.querySelectorAll('.open-cart-btn');
  const openSearchBtns = document.querySelectorAll('.open-search-btn');
  const openMenuBtns = document.querySelectorAll('.open-menu-btn');
  const closeDrawerBtns = document.querySelectorAll('.drawer-close');

  function closeAllDrawers() {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (searchDrawer) searchDrawer.classList.remove('active');
    if (mobileMenuDrawer) mobileMenuDrawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openDrawer(drawer) {
    closeAllDrawers();
    if (drawer) {
      drawer.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer(cartDrawer);
      renderCartDrawer();
    });
  });

  openSearchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer(searchDrawer);
      const input = searchDrawer ? searchDrawer.querySelector('input') : null;
      if (input) setTimeout(() => input.focus(), 250);
    });
  });

  openMenuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer(mobileMenuDrawer);
    });
  });

  closeDrawerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllDrawers();
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeAllDrawers);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
      closeModal();
    }
  });
}

/* ==========================================================================
   3b. PROFILE DROPDOWN (Login / Signup) — click + keyboard + outside-click
   Reuses existing .nav-user-dropdown markup/CSS; hover behavior preserved.
   ========================================================================== */
function initProfileDropdown() {
  const dropdowns = document.querySelectorAll('.nav-user-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach((dd) => {
    const btn = dd.querySelector('.nav-action-btn');
    const menu = dd.querySelector('.user-dropdown-menu');
    if (!btn || !menu) return;

    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      closeAllProfileDropdowns();
      if (!isOpen) {
        dd.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) closeAllProfileDropdowns();
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-user-dropdown')) closeAllProfileDropdowns();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllProfileDropdowns();
  });

  function closeAllProfileDropdowns() {
    document.querySelectorAll('.nav-user-dropdown.open').forEach((dd) => {
      dd.classList.remove('open');
      const b = dd.querySelector('.nav-action-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
}

/* ==========================================================================
   4. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(title, message, icon = 'sparkle') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">${resolveSvgIcon(icon)}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3500);
}
window.showToast = showToast;

/* ==========================================================================
   5. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
}
window.initScrollReveal = initScrollReveal;

/* ==========================================================================
   6. ACCORDIONS (FAQ)
   ========================================================================== */
function initAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const panel = item.querySelector('.accordion-panel');
      const isExpanded = item.classList.contains('active');

      const parentGroup = item.closest('.accordion-group');
      if (parentGroup) {
        parentGroup.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const sibPanel = sibling.querySelector('.accordion-panel');
            if (sibPanel) sibPanel.style.maxHeight = null;
          }
        });
      }

      if (isExpanded) {
        item.classList.remove('active');
        if (panel) panel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   7. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   8. GLOBAL LIVE SEARCH
   ========================================================================== */
function initGlobalSearch() {
  const searchInput = document.querySelector('.search-drawer-input');
  const resultsContainer = document.querySelector('.search-results-list');
  if (!searchInput || !resultsContainer) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsContainer.innerHTML = `<p class="text-center" style="color:var(--text-muted); padding: 2rem 0;">Type at least 2 characters to search products...</p>`;
      return;
    }

    const matchedProducts = (window.GOURMET_DATABASE?.products || []).filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.origin.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tastingNotes.some(note => note.toLowerCase().includes(query))
    );

    const matchedArticles = (window.GOURMET_DATABASE?.blogArticles || []).filter(art => 
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.tags.some(tag => tag.toLowerCase().includes(query))
    );

    if (matchedProducts.length === 0 && matchedArticles.length === 0) {
      resultsContainer.innerHTML = `
        <div class="text-center" style="padding: 2.5rem 1rem;">
          <p style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:0.5rem;">No Products Found</p>
          <p style="font-size:0.85rem; color:var(--text-muted);">Try searching for "Comté", "Jamón", "Truffle", "Brie", or "Salami".</p>
        </div>
      `;
      return;
    }

    let html = '';
    if (matchedProducts.length > 0) {
      html += `<div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-gold); margin-bottom:0.75rem; font-weight:600;">Products (${matchedProducts.length})</div>`;
      matchedProducts.slice(0, 5).forEach(item => {
        html += `
          <div class="cart-item" style="cursor:pointer;" onclick="window.location.href='product-details.html?id=${item.id}'">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-meta">${item.origin} • ${item.weight}</div>
              <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
          </div>
        `;
      });
    }

    if (matchedArticles.length > 0) {
      html += `<div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-gold); margin:1.5rem 0 0.75rem; font-weight:600;">Blog Guides & Articles (${matchedArticles.length})</div>`;
      matchedArticles.forEach(art => {
        html += `
          <div style="padding:0.75rem 0; border-bottom:1px solid var(--border-subtle); cursor:pointer;" onclick="window.location.href='blog-details.html?id=${art.id}'">
            <h5 style="font-size:0.95rem; font-weight:600; margin-bottom:0.2rem;">${art.title}</h5>
            <p style="font-size:0.75rem; color:var(--text-muted);">${art.category} • ${art.readTime}</p>
          </div>
        `;
      });
    }

    resultsContainer.innerHTML = html;
  });
}

/* ==========================================================================
   9. QUICK VIEW MODAL
   ========================================================================== */
function initQuickViewModal() {
  let modalOverlay = document.querySelector('.quickview-modal-overlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay quickview-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-container">
        <button class="modal-close-btn" onclick="closeModal()">✕</button>
        <div class="quickview-body" style="padding: 2rem;"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

function openQuickView(productId) {
  const product = (window.GOURMET_DATABASE?.products || []).find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.querySelector('.quickview-modal-overlay');
  const modalBody = modalOverlay.querySelector('.quickview-body');

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: center;">
      <div style="position:relative; border-radius: var(--radius-sm); overflow:hidden;">
        <img src="${product.image}" alt="${product.name}" style="width:100%; height:340px; object-fit:cover; border-radius:var(--radius-sm);" />
        <span class="badge badge-gold" style="position:absolute; top:1rem; left:1rem;">${product.badge || 'Artisan Special'}</span>
      </div>
      <div>
        <div class="eyebrow">${product.origin}</div>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem;">${product.name}</h2>
        <p style="color:var(--color-olive); font-weight:600; font-size:0.85rem; margin-bottom:1rem;">${product.subName}</p>
        <div class="quick-view-price" style="font-family:var(--font-serif); font-size:1.8rem; font-weight:700; color:var(--color-burgundy); margin-bottom:1rem;">
          $${product.price.toFixed(2)} <span style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-sans); font-weight:400;">/ ${product.weight}</span>
        </div>
        <p style="font-size:0.9rem; line-height:1.7; margin-bottom:1.5rem; color:var(--text-secondary);">${product.description}</p>
        
        <div style="margin-bottom: 1.5rem;">
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-muted); margin-bottom:0.4rem;">Tasting Notes:</div>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
            ${product.tastingNotes.map(n => `<span class="flavor-pill">✦ ${n}</span>`).join('')}
          </div>
        </div>

        <div style="display:flex; gap:1rem; align-items:center;">
          <button class="btn btn-primary" onclick="addToCart('${product.id}', 1); closeModal();">
            Add to Cart
          </button>
          <a href="product-details.html?id=${product.id}" class="btn btn-outline" style="font-size:0.75rem;">Full Product Details</a>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openQuickView = openQuickView;

function closeModal() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => overlay.classList.remove('active'));
  document.body.style.overflow = '';
}
window.closeModal = closeModal;

/* ==========================================================================
   10. NEWSLETTER & FORMS
   ========================================================================== */
function initNewsletterSubmissions() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Subscribed Successfully!', `Welcome! We have sent our free guide and coupon to ${input.value}.`, 'wine');
        input.value = '';
      }
    });
  });
}

/* ==========================================================================
   11. GLOBAL IMAGE ERROR HANDLING & RESILIENT FALLBACKS
   ========================================================================== */
window.addEventListener('error', (e) => {
  if (e.target && e.target.tagName === 'IMG') {
    if (!e.target.dataset.fallbackApplied) {
      e.target.dataset.fallbackApplied = 'true';
      e.target.src = 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80';
    }
  }
}, true);

