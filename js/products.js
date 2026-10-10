/**
 * SPECIALTY CHEESE & CHARCUTERIE SHOP — PRODUCTS CATALOG ENGINE
 * Handles multi-facet filters, sorting, search, and dynamic card generation in plain English
 */

document.addEventListener('DOMContentLoaded', () => {
  initProductsCatalog();
});

let productFilterState = {
  category: 'all',
  country: 'all',
  milk: 'all',
  search: '',
  sort: 'featured',
  view: 'grid'
};

function initProductsCatalog() {
  const gridContainer = document.getElementById('productsCatalogGrid');
  if (!gridContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('category')) {
    productFilterState.category = urlParams.get('category');
  }

  // Category buttons
  document.querySelectorAll('.filter-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === productFilterState.category);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      productFilterState.category = btn.dataset.category;
      document.querySelectorAll('.filter-category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyProductFilters();
    });
  });

  // Country select filter
  const countrySelect = document.getElementById('filterCountrySelect');
  if (countrySelect) {
    countrySelect.addEventListener('change', (e) => {
      productFilterState.country = e.target.value;
      applyProductFilters();
    });
  }

  // Milk / meat source filter
  const milkSelect = document.getElementById('filterMilkSelect');
  if (milkSelect) {
    milkSelect.addEventListener('change', (e) => {
      productFilterState.milk = e.target.value;
      applyProductFilters();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      productFilterState.sort = e.target.value;
      applyProductFilters();
    });
  }

  // Search input
  const searchInput = document.getElementById('productCatalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      productFilterState.search = e.target.value.toLowerCase().trim();
      applyProductFilters();
    });
  }

  applyProductFilters();
}

function applyProductFilters() {
  const gridContainer = document.getElementById('productsCatalogGrid');
  if (!gridContainer) return;

  let list = [...(window.GOURMET_DATABASE?.products || [])];

  // Category filter
  if (productFilterState.category !== 'all') {
    list = list.filter(item => item.category === productFilterState.category);
  }

  // Country filter
  if (productFilterState.country !== 'all') {
    list = list.filter(item => item.country === productFilterState.country);
  }

  // Milk / Meat source filter
  if (productFilterState.milk !== 'all') {
    list = list.filter(item => item.milk.toLowerCase().includes(productFilterState.milk.toLowerCase()));
  }

  // Search filter
  if (productFilterState.search) {
    list = list.filter(item =>
      item.name.toLowerCase().includes(productFilterState.search) ||
      item.description.toLowerCase().includes(productFilterState.search) ||
      item.origin.toLowerCase().includes(productFilterState.search) ||
      item.tastingNotes.some(n => n.toLowerCase().includes(productFilterState.search))
    );
  }

  // Sort
  if (productFilterState.sort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (productFilterState.sort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (productFilterState.sort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  // Counter
  const countDisplay = document.getElementById('productResultsCount');
  if (countDisplay) {
    countDisplay.textContent = `Showing ${list.length} Products`;
  }

  if (list.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="margin-bottom: 1rem; color: var(--color-gold);">
          <svg class="svg-icon" style="width: 52px; height: 52px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </div>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem;">No Matching Products Found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
          Try changing your search terms or clearing your filters.
        </p>
        <button class="btn btn-outline-gold" onclick="resetProductFilters()">Clear All Filters</button>
      </div>
    `;
    return;
  }

  let html = '';
  list.forEach(p => {
    html += `
      <div class="product-card reveal-on-scroll">
        <div class="product-card-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <div class="product-badge-flag">
            <span class="badge badge-${p.badgeColor || 'gold'}">${p.badge}</span>
          </div>
          <div class="product-quick-actions">
            <button class="btn-card-action" onclick="addToCart('${p.id}', 1)">+ Add to Cart</button>
            <button class="btn-card-wishlist" onclick="openQuickView('${p.id}')" title="Quick View" aria-label="Quick View">
              <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-origin-meta">
            <span>${p.origin}</span>
            <span>★ ${p.rating.toFixed(1)}</span>
          </div>
          <h4 class="product-title">
            <a href="product-details.html?id=${p.id}">${p.name}</a>
          </h4>
          <p class="product-tasting-notes">${p.subName}</p>
          <div class="product-flavor-pills">
            ${p.tastingNotes.slice(0, 3).map(n => `<span class="flavor-pill">${n}</span>`).join('')}
          </div>
          <div class="product-card-footer">
            <div class="product-price-box">
              <span class="product-weight">${p.weight}</span>
              <span class="product-price">$${p.price.toFixed(2)}</span>
            </div>
            <a href="product-details.html?id=${p.id}" class="btn btn-outline btn-sm" style="font-size:0.75rem; padding:0.4rem 0.8rem;">
              View Details →
            </a>
          </div>
        </div>
      </div>
    `;
  });

  gridContainer.innerHTML = html;
  if (window.initScrollReveal) window.initScrollReveal();
}

function resetProductFilters() {
  productFilterState = {
    category: 'all',
    country: 'all',
    milk: 'all',
    search: '',
    sort: 'featured',
    view: 'grid'
  };

  const cSelect = document.getElementById('filterCountrySelect');
  if (cSelect) cSelect.value = 'all';
  const mSelect = document.getElementById('filterMilkSelect');
  if (mSelect) mSelect.value = 'all';
  const sInput = document.getElementById('productCatalogSearch');
  if (sInput) sInput.value = '';

  document.querySelectorAll('.filter-category-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });

  applyProductFilters();
}
window.resetProductFilters = resetProductFilters;
