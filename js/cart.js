/**
 * SPECIALTY CHEESE & CHARCUTERIE SHOP — CART & COMMERCE ENGINE
 * Clear, user-friendly shopping cart, cold-shipping calculator, and checkout modal
 */

const CART_STORAGE_KEY = 'maison_terroir_cart';
const FREE_SHIPPING_THRESHOLD = 95.00;

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId, quantity = 1, customData = null) {
  const cart = getCart();
  const product = (window.GOURMET_DATABASE?.products || []).find(p => p.id === productId) ||
                  (window.GOURMET_DATABASE?.giftBoxes || []).find(b => b.id === productId);

  if (!product && !customData) return;

  const title = customData ? customData.name : product.name;
  const price = customData ? customData.price : product.price;
  const image = customData ? customData.image : product.image;
  const meta = customData ? customData.meta : (product.weight || product.serves || '');

  const existingIndex = cart.findIndex(item => item.id === (customData ? customData.id : productId));

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: customData ? customData.id : productId,
      name: title,
      price: price,
      image: image,
      meta: meta,
      quantity: quantity
    });
  }

  saveCart(cart);
  if (window.showToast) {
    window.showToast('Added to Cart', `${title} (${quantity}) added to your shopping cart.`, 'cheese');
  }
}
window.addToCart = addToCart;

function updateCartQty(id, delta) {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCart(cart);
  }
}
window.updateCartQty = updateCartQty;

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  if (window.showToast) {
    window.showToast('Item Removed', 'The item was removed from your cart.');
  }
}
window.removeFromCart = removeFromCart;

function renderCartDrawer() {
  const container = document.querySelector('.cart-items-list');
  const footerEl = document.querySelector('.cart-drawer-footer-inner');
  if (!container) return;

  const cart = getCart();
  let subtotal = 0;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-notice text-center" style="padding: 3rem 1rem;">
        <div style="margin-bottom: 0.85rem; color: var(--color-gold);">
          <svg class="svg-icon" style="width: 52px; height: 52px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="m5 11 4-7"/>
            <path d="m19 11-4-7"/>
            <path d="M2 11h20"/>
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.6-7.4"/>
            <path d="M4.5 15.5h15"/>
          </svg>
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.5rem;">Your Shopping Cart is Empty</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          Explore our artisan cheeses, cured meats, and curated gift boxes.
        </p>
        <a href="products.html" class="btn btn-outline-gold btn-sm">Explore Products</a>
      </div>
    `;
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (footerEl) footerEl.style.display = 'block';

  let itemsHtml = '';
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    itemsHtml += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <div>
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-meta">${item.meta}</div>
          </div>
          <div class="cart-item-row">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">✕</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHtml;

  // Free shipping progress bar
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const percentShipping = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  if (footerEl) {
    footerEl.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:0.4rem;">
          <span>${remainingForFreeShipping === 0 ? '<svg class="svg-icon" style="width:14px; height:14px; color:var(--color-gold); margin-right:4px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg> Free Insulated Cold Shipping Included!' : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Cold Shipping`}</span>
          <span>${Math.round(percentShipping)}%</span>
        </div>
        <div style="height:6px; background:var(--bg-tertiary); border-radius:var(--radius-full); overflow:hidden;">
          <div style="width:${percentShipping}%; height:100%; background:var(--color-gold); transition:width 0.3s ease;"></div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; font-family:var(--font-serif); font-size:1.35rem; font-weight:600; margin-bottom:1rem;">
        <span>Cart Subtotal:</span>
        <span class="cart-drawer-subtotal" style="color:var(--color-burgundy);">$${subtotal.toFixed(2)}</span>
      </div>

      <button class="btn btn-primary" style="width:100%; margin-bottom:0.75rem;" onclick="triggerCheckoutModal(${subtotal})">
        Proceed to Checkout
      </button>

      <p style="text-align:center; font-size:0.72rem; color:var(--text-muted);">
        Insulated cold packaging • Ice packs included • Delivered fresh to your door
      </p>
    `;
  }
}
window.renderCartDrawer = renderCartDrawer;

function triggerCheckoutModal(subtotal) {
  let checkoutOverlay = document.querySelector('.checkout-modal-overlay');
  if (!checkoutOverlay) {
    checkoutOverlay = document.createElement('div');
    checkoutOverlay.className = 'modal-overlay checkout-modal-overlay';
    document.body.appendChild(checkoutOverlay);
  }

  checkoutOverlay.innerHTML = `
    <div class="modal-container" style="max-width: 520px; padding: 2.25rem;">
      <button class="modal-close-btn" onclick="this.closest('.modal-overlay').classList.remove('active'); document.body.style.overflow='';">✕</button>
      <div class="text-center" style="margin-bottom: 1.5rem;">
        <div class="eyebrow">Artisan — Cheese & Charcuterie</div>
        <h3 style="font-size: 1.8rem;">Checkout & Delivery Details</h3>
        <p style="font-size: 0.85rem; color:var(--text-muted); margin-top:0.4rem;">
          Your order total is <strong>$${subtotal.toFixed(2)}</strong>. Shipped fresh in temperature-controlled packaging.
        </p>
      </div>

      <form onsubmit="handleMockOrder(event)" style="display:flex; flex-direction:column; gap:1rem;">
        <div>
          <label class="form-label">Full Name</label>
          <input type="text" class="form-control" required placeholder="John Doe" />
        </div>
        <div>
          <label class="form-label">Delivery Address</label>
          <input type="text" class="form-control" required placeholder="123 Main Street, City, State, ZIP" />
        </div>
        <div>
          <label class="form-label">Preferred Delivery Date</label>
          <input type="date" class="form-control" required />
        </div>
        <div style="background:var(--bg-secondary); padding:1rem; border-radius:var(--radius-xs); border:1px solid var(--border-light); font-size:0.78rem;">
          <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
            <input type="checkbox" checked /> Include a complimentary handwritten gift note
          </label>
        </div>
        <button type="submit" class="btn btn-gold" style="width:100%; margin-top:0.5rem;">
          Place Order ($${subtotal.toFixed(2)})
        </button>
      </form>
    </div>
  `;

  checkoutOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.triggerCheckoutModal = triggerCheckoutModal;

function handleMockOrder(e) {
  e.preventDefault();
  saveCart([]);
  const overlay = document.querySelector('.checkout-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  if (window.showToast) {
    window.showToast('Order Confirmed!', 'Thank you! Your order has been placed and is being packed fresh in cold insulation.', 'package');
  }
  const cartDrawer = document.querySelector('.cart-drawer');
  if (cartDrawer) cartDrawer.classList.remove('active');
  const backdrop = document.querySelector('.drawer-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}
window.handleMockOrder = handleMockOrder;

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});
