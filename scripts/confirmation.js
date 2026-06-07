document.addEventListener('DOMContentLoaded', async () => {
  await loadData();

  const order = JSON.parse(localStorage.getItem('lastOrder') || 'null');

  if (!order) {
    window.location.href = 'index.html'; return;
  }

  document.getElementById('confirm-subtitle').textContent =
    `Hvala, ${order.ime}! Vaša narudžba je primljena.`;
  document.getElementById('confirm-email').textContent =
    `Potvrda će biti poslata na: ${order.email}`;

  const container = document.getElementById('order-items');
  let subtotal = 0;

  for (const [cartId, qty] of Object.entries(order.cart || {})) {
    let found = null;
    const catalog = getData();
    for (const cat of catalog.categories) {
      for (const p of cat.products) {
        if (cartId.startsWith(productId(p))) { found = p; break; }
      }
      if (found) break;
    }
    if (!found) continue;

    const colorPart = cartId.slice(productId(found).length + 1);
    const col = (found.colors || []).find(c => c.name === colorPart);
    const price = found.price || 0;
    subtotal += price * qty;

    container.innerHTML += `
      <div class="order-item">
        <div class="order-item-img">
          <img src="images/${getFirstImage(found)}" onerror="this.parentNode.classList.add('img-error')">
          <span class="img-emoji">🧶</span>
        </div>
        <div>
          <p class="order-item-name">${found.name}</p>
          <p class="order-item-sub">
            ${col ? `<span style="display:inline-flex;align-items:center;gap:4px">
              
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
            ${col.name} · </span>` : ''}
            Količina: ${qty}
          </p>
        </div>
        <span class="order-item-price">€${(price * qty).toFixed(2)}</span>
      </div>`;
  }

  const shipping = 0;
  document.getElementById('order-total').textContent = `€${(subtotal + shipping).toFixed(2)}`;
});
