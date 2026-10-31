/**
 * SPECIALTY CHEESE & CHARCUTERIE SHOP — BOARD BUILDER ENGINE
 * Live platter layout, guest calculator, and simple wine pairing recommendations
 */

document.addEventListener('DOMContentLoaded', () => {
  initBoardBuilder();
});

let currentBoardState = {
  guests: 6,
  occasion: 'cocktail', // 'cocktail' (90g / person) or 'dinner' (180g / person)
  platterMaterial: 'walnut',
  selectedItems: []
};

function initBoardBuilder() {
  const container = document.querySelector('.board-builder-container');
  if (!container) return;

  renderPlatterControls();
  renderIngredientTabs('all');
  updateBoardCalculations();
}

function setPlatterMaterial(material) {
  currentBoardState.platterMaterial = material;
  const platter = document.getElementById('boardPlatter');
  if (platter) {
    platter.className = `board-platter-wrapper ${material}`;
  }
  document.querySelectorAll('.material-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.material === material);
  });
}
window.setPlatterMaterial = setPlatterMaterial;

function updateGuests(count) {
  currentBoardState.guests = Math.max(2, Math.min(30, count));
  const countDisplay = document.getElementById('guestCountDisplay');
  if (countDisplay) countDisplay.textContent = currentBoardState.guests;
  updateBoardCalculations();
}
window.updateGuests = updateGuests;

function setOccasion(type) {
  currentBoardState.occasion = type;
  document.querySelectorAll('.occasion-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.occasion === type);
  });
  updateBoardCalculations();
}
window.setOccasion = setOccasion;

function toggleBoardItem(itemId) {
  const item = (window.GOURMET_DATABASE?.boardBuilderIngredients || []).find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = currentBoardState.selectedItems.findIndex(i => i.id === itemId);
  if (existingIndex > -1) {
    currentBoardState.selectedItems.splice(existingIndex, 1);
  } else {
    currentBoardState.selectedItems.push(item);
  }

  renderBoardCanvasItems();
  renderIngredientTabs(currentActiveTab || 'all');
  updateBoardCalculations();
}
window.toggleBoardItem = toggleBoardItem;

let currentActiveTab = 'all';
function renderIngredientTabs(category) {
  currentActiveTab = category;
  const tabs = document.querySelectorAll('.category-tab-btn');
  tabs.forEach(t => t.classList.toggle('active', t.dataset.category === category));

  const listContainer = document.getElementById('ingredientSelectList');
  if (!listContainer) return;

  const allItems = window.GOURMET_DATABASE?.boardBuilderIngredients || [];
  const filtered = category === 'all' ? allItems : allItems.filter(i => i.category === category);

  let html = '';
  filtered.forEach(item => {
    const isSelected = currentBoardState.selectedItems.some(i => i.id === item.id);
    html += `
      <div class="ingredient-pick-card ${isSelected ? 'selected' : ''}" onclick="toggleBoardItem('${item.id}')">
        <div class="ingredient-meta">
          <div style="font-size: 1.8rem; line-height:1; width:44px; height:44px; display:flex; align-items:center; justify-content:center; background:var(--bg-tertiary); border-radius:var(--radius-xs);">
            ${item.icon}
          </div>
          <div class="ingredient-info">
            <h5>${item.name}</h5>
            <p>${item.type} • ${item.weight}</p>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div class="builder-item-price" style="font-family:var(--font-serif); font-weight:700; color:var(--color-burgundy); font-size:1.1rem;">
            $${item.price.toFixed(2)}
          </div>
          <button class="ingredient-action-btn" title="${isSelected ? 'Remove' : 'Add to Platter'}">
            ${isSelected ? '✓' : '+'}
          </button>
        </div>
      </div>
    `;
  });

  listContainer.innerHTML = html;
}
window.renderIngredientTabs = renderIngredientTabs;

function renderBoardCanvasItems() {
  const canvas = document.getElementById('boardCanvasItems');
  if (!canvas) return;

  if (currentBoardState.selectedItems.length === 0) {
    canvas.innerHTML = `
      <div class="board-empty-state">
        <div class="board-empty-icon">
          <svg class="svg-icon" style="width:40px; height:40px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/>
          </svg>
        </div>
        <p class="board-empty-title">Your Platter is Ready</p>
        <p class="board-empty-hint">Click cheeses, cured meats, and fruits on the right panel to place them on your board.</p>
      </div>
    `;
    return;
  }

  let html = '';
  currentBoardState.selectedItems.forEach(item => {
    html += `
      <div class="placed-board-item" onclick="toggleBoardItem('${item.id}')" title="Click to remove">
        <span>${item.icon}</span>
        <strong>${item.name}</strong>
        <span class="remove-icon">✕</span>
      </div>
    `;
  });

  canvas.innerHTML = html;
}

function updateBoardCalculations() {
  const totalCost = currentBoardState.selectedItems.reduce((sum, item) => sum + item.price, 0);
  const costDisplay = document.getElementById('boardTotalCost');
  if (costDisplay) costDisplay.textContent = `$${totalCost.toFixed(2)}`;

  const countDisplay = document.getElementById('boardItemCount');
  if (countDisplay) countDisplay.textContent = currentBoardState.selectedItems.length;

  // Recommended weight requirement:
  const multiplier = currentBoardState.occasion === 'cocktail' ? 90 : 180;
  const targetGrams = currentBoardState.guests * multiplier;
  const targetGramsDisplay = document.getElementById('boardTargetGrams');
  if (targetGramsDisplay) targetGramsDisplay.textContent = `${targetGrams}g`;

  // Wine recommendation
  const wineRecBox = document.getElementById('sommelierWineRec');
  if (wineRecBox) {
    const hasBlueOrTruffle = currentBoardState.selectedItems.some(i => i.name.includes('Blue') || i.name.includes('Truffle'));
    const hasIberico = currentBoardState.selectedItems.some(i => i.name.includes('Ibérico') || i.name.includes('Chorizo'));
    const hasGoat = currentBoardState.selectedItems.some(i => i.name.includes('Goat') || i.name.includes('Chèvre'));

    let recWine = 'Chardonnay or Dry Pinot Noir';
    let tastingReason = 'A great all-around pairing that balances rich cheeses and savory cured meats.';

    if (hasBlueOrTruffle) {
      recWine = 'Sweet Dessert Wine (Sauternes) or Bold Italian Red';
      recWine += ' — The perfect sweet and bold balance for rich black truffles and savory blue cheese.';
    } else if (hasIberico) {
      recWine = 'Spanish Rioja Red or Dry Sherry';
      recWine += ' — Crisp and nutty notes that highlight the sweet acorn fat of the cured ham.';
    } else if (hasGoat) {
      recWine = 'Crisp Sauvignon Blanc';
      recWine += ' — Crisp citrus notes that cut through the creaminess of fresh goat cheese.';
    }

    wineRecBox.innerHTML = `
      <div style="display:flex; align-items:flex-start; gap:0.75rem;">
        <span style="color:var(--color-burgundy); flex-shrink:0;">
          <svg class="svg-icon" style="width:24px; height:24px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 3h12v3c0 3.31-2.69 6-6 6s-6-2.69-6-6V3zm5 9.93V19H8v2h8v-2h-3v-6.07c3.38-.49 6-3.4 6-6.93V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4c0 3.53 2.62 6.44 6 6.93zM8 5h8v1c0 2.21-1.79 4-4 4s-4-1.79-4-4V5z"/>
          </svg>
        </span>
        <div>
          <div class="builder-rec-wine-title" style="font-weight:600; font-family:var(--font-serif); font-size:1.15rem; color:var(--color-burgundy);">${recWine}</div>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.2rem;">${tastingReason}</p>
        </div>
      </div>
    `;
  }
}

function addEntireBoardToCart() {
  if (currentBoardState.selectedItems.length === 0) {
    showToast('Platter Empty', 'Please select at least 2 items to add your board to the cart.', 'warning');
    return;
  }

  const totalCost = currentBoardState.selectedItems.reduce((sum, item) => sum + item.price, 0);
  const customBoard = {
    id: `custom-board-${Date.now()}`,
    name: `Custom Party Board (${currentBoardState.guests} Guests)`,
    price: totalCost,
    image: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=800&q=80",
    meta: `${currentBoardState.selectedItems.length} Selected Items • ${currentBoardState.occasion === 'cocktail' ? 'Appetizer Platter' : 'Dinner Platter'}`
  };

  addToCart(null, 1, customBoard);
  showToast('Board Added to Cart', `Your custom ${currentBoardState.guests}-guest board has been added to your cart!`, 'cart');
}
window.addEntireBoardToCart = addEntireBoardToCart;

function loadChefsSelection() {
  const all = window.GOURMET_DATABASE?.boardBuilderIngredients || [];
  const picks = [
    all.find(i => i.id === 'b-comte'),
    all.find(i => i.id === 'b-brillat'),
    all.find(i => i.id === 'b-iberico'),
    all.find(i => i.id === 'b-figs'),
    all.find(i => i.id === 'b-truffle-honey'),
    all.find(i => i.id === 'b-crackers')
  ].filter(Boolean);

  currentBoardState.selectedItems = picks;
  renderBoardCanvasItems();
  renderIngredientTabs(currentActiveTab || 'all');
  updateBoardCalculations();
  if (typeof showToast === 'function') {
    showToast("Chef's Selection Loaded", "We loaded our sommelier's pairing: Comté, Truffle Brie, Ibérico, Figs, Truffle Honey & Sourdough Crackers!", "sparkle");
  }
}
window.loadChefsSelection = loadChefsSelection;

function resetBoard() {
  if (currentBoardState.selectedItems.length === 0) {
    if (typeof showToast === 'function') {
      showToast("Board Already Empty", "Select cheeses and cured meats from the catalog to build your platter.", "info");
    }
    return;
  }
  currentBoardState.selectedItems = [];
  renderBoardCanvasItems();
  renderIngredientTabs(currentActiveTab || 'all');
  updateBoardCalculations();
  if (typeof showToast === 'function') {
    showToast("Board Reset", "All selected items have been removed from your platter.", "info");
  }
}
window.resetBoard = resetBoard;

function renderPlatterControls() {
  renderBoardCanvasItems();
}
