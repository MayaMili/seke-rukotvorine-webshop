function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items');
  updateCartCount();

  if (Object.keys(cart).length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-ico">🧶</div>
        <h3>Vaša košarica je prazna</h3>
        <p>Dodajte neke predivne ručno rađene proizvode!</p>
        <a href="index.html" class="btn-back">Pregledaj proizvode</a>
      </div>`;
    document.getElementById('order-summary').style.display = 'none';
    return;
  }

  container.innerHTML = '';
  document.getElementById('order-summary').style.display = 'block';
  let subtotal = 0;
  let summaryProductsHTML = '';
  let idx = 0;

  for (const [cartId, qty] of Object.entries(cart)) {
    let found = null;
    const catalog = getData();
    for (const cat of catalog.categories) {
      for (const p of cat.products) {
        const pid = productId(p);
        if (cartId.startsWith(pid)) { found = p; break; }
      }
      if (found) break;
    }
    if (!found) continue;

    const colorPart = cartId.slice(productId(found).length + 1);
    const col = (found.colors || []).find(c => c.name === colorPart);
    const price = found.price || 0;
    subtotal += price * qty;

    summaryProductsHTML += `
      <div class="summary-product" style="animation-delay:${idx * 0.05}s">
        <div class="summary-product-img">
          <img src="images/${getFirstImage(found)}" alt="${found.name}" onerror="this.parentNode.classList.add('img-error')">
          <span class="img-emoji">🧶</span>
        </div>
        <div class="summary-product-info">
          <p class="summary-product-name">${found.name}</p>
          ${col ? `<p class="summary-product-color">
            <span style="
              width:12px;
              height:12px;
              border-radius:50%;
              background-image:url('images/${col?.img}');
              background-size:cover;
              background-position:center;
              background-repeat:no-repeat;
              display:inline-block;
              border:1px solid rgba(0,0,0,0.1);">
            </span>
            ${col.name}</p>` : ''}
          <p class="summary-product-unit">€${price} / kom</p>
          <div class="qty-row">
            <button class="qty-btn" onclick="changeItem('${cartId}',-1)" aria-label="Smanji količinu">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="changeItem('${cartId}',1)" aria-label="Povećaj količinu">+</button>
          </div>
        </div>
        <div class="summary-product-right">
          <span class="summary-product-price">€${(price * qty).toFixed(2)}</span>
          <button class="remove-btn" onclick="removeItem('${cartId}')" aria-label="Ukloni proizvod">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
          </button>
        </div>
      </div>`;
    idx++;
  }

  document.getElementById('summary-products').innerHTML = summaryProductsHTML;

  const shipping = 0;
  const total = subtotal + shipping;

  document.getElementById('subtotal-val').textContent = `€${subtotal.toFixed(2)}`;
  document.getElementById('shipping-val').textContent = 'Besplatna';
  document.getElementById('shipping-val').className = 'free';
  document.getElementById('total-val').textContent = `€${total.toFixed(2)}`;

  const shippingNote = document.getElementById('shipping-note');
  if (shippingNote) {
    shippingNote.textContent = '🎉 Dostava je besplatna za sve narudžbe.';
  }
}

function changeItem(cartId, delta) {
  const cart = getCart();
  const newQty = (cart[cartId] || 0) + delta;
  if (newQty <= 0) delete cart[cartId];
  else cart[cartId] = newQty;
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function removeItem(cartId) {
  const cart = getCart();
  delete cart[cartId];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  renderCart();
});
