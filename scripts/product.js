let currentProduct = null;
let selectedColor  = null;
let qty = 1;

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const found = findProduct(id);
  if (!found) { document.getElementById('product-main').innerHTML = '<p>Proizvod nije pronađen.</p>'; return; }

  const { product, category } = found;
  currentProduct = product;
  document.title = `${product.name} – SEKE Rukotvorine`;

  // Aktivni sidebar link
  document.querySelectorAll('.sidebar-link[data-cat]').forEach(a => {
    if (a.dataset.cat === category.name) a.classList.add('active');
  });

  // Sve slike proizvoda (podrzava i stari "image" i novi "images" format)
  const imgs = product.images && product.images.length > 0
    ? product.images
    : (product.image ? [product.image] : []);
  const firstImg = imgs[0] || '';

  // Minijature — prikazuju se samo ako ima vise od 1 slike
  const thumbsHTML = imgs.map((img, i) => `
    <div class="product-thumb ${i === 0 ? 'active' : ''}"
         onclick="switchImage(this, 'images/${img}')">
      <img src="images/${img}" alt="${product.name} ${i + 1}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <span style="display:none">🧶</span>
    </div>
  `).join('');

  // Varijacije: krug sa slikom (normalni mod) + naziv boje (a11y mod);
  // aria-label osigurava da čitač ekrana uvijek pročita naziv boje
  // const swatchesHTML = (product.colors || []).map(c => `
  //   <button type="button" class="color-option" data-name="${c.name}" lang="hr"
  //           aria-pressed="false" aria-label="${c.name}" title="${c.name}" onclick="selectColor(this)">
  //     <span class="color-option-swatch" aria-hidden="true" style="background-image:url('images/${c.img}')"></span>
  //     <span class="color-option-text">${c.name}</span>
  //   </button>
  // `).join('');
  const swatchesHTML = (product.colors || []).map(c => `
    <button type="button" class="color-option" data-name="${c.name}"
            aria-pressed="false" onclick="selectColor(this)">
      <span class="color-option-swatch" aria-hidden="true" style="background-image:url('images/${c.img}')"></span>
      <span class="color-option-text">${c.name}</span>
    </button>
  `).join('');

  document.getElementById('product-main').innerHTML = `
    <div class="breadcrumb">
      <a href="index.html" aria-label="Gumb za povratak na Početnu">Početna</a><span aria-hidden="true">›</span><span class="sr-only">slijedi</span>
      <a href="${categoryUrl(category.name)}" aria-label="Gumb za povratak na ${category.name}">${category.name}</a><span aria-hidden="true">›</span><span class="sr-only">slijedi</span>
      <span aria-current="page" style="color:var(--text-dark);font-weight:600">${product.name}</span>
    </div>
    <div class="product-detail fade-up">

      <div class="product-images">
        <div class="product-main-img">
          <img src="images/${firstImg}" alt="${product.name}" id="main-img"
               ${!firstImg ? 'style="display:none"' : ''}
               onerror="this.style.display='none';document.getElementById('main-ph').style.display='flex'">
          <div class="img-ph" id="main-ph" style="${firstImg ? 'display:none' : ''}">🧶</div>
        </div>

        <div class="product-thumb-row" style="${imgs.length <= 1 ? 'display:none' : ''}">
          ${thumbsHTML}
        </div>
      </div>

      <div class="product-info-col">
        <h1>${product.name}</h1>


        <span class="product-section-label">Detalji proizvoda</span>
        <div class="product-detail-box"><p>${product.detail}</p></div>

        <div class="product-price-row">
          <span class="product-price">€${product.price}</span>
          <span class="product-price-note">Cijena po komadu</span>
        </div>

        <span class="product-section-label">Izaberite varijaciju <span aria-hidden="true" style="color:var(--rose-dark)">*</span><span class="sr-only">slijede varijacije</span></span>
        <div id="selected-color-name" class="selected-color-name" style="display:none"></div>
        <div class="color-swatches">${swatchesHTML}</div>
        <p class="color-hint">Kliknite na naziv varijacije da biste je izabrali</p>

        <div class="qty-section">
          <span class="product-section-label">Količina</span>
          <div class="qty-control">
            <button class="qty-btn" aria-label="Smanji količinu" onclick="changeQtyLocal(-1)">
              <span class="qty-symbol" aria-hidden="true">−</span>
              <span class="qty-text">Smanji</span>
            </button>
            <span class="qty-num" id="qty-display" aria-live="polite" aria-label="Količina">1</span>
            <button class="qty-btn" aria-label="Povećaj količinu" onclick="changeQtyLocal(1)">
              <span class="qty-symbol" aria-hidden="true">+</span>
              <span class="qty-text">Povećaj</span>
            </button>
          </div>
        </div>

        <button class="add-btn" id="add-btn" onclick="openModal()">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Dodaj u košaricu
        </button>
        <a href="cart.html" class="go-cart-link" id="go-cart-link" style="display:none">
          Idi direktno u košaricu
        </a>
        <p class="need-variant" id="need-variant">* Molimo izaberite varijaciju prije dodavanja u košaricu</p>

        <div class="delivery-box">
          <h4>Informacije o dostavi i plaćanju</h4>
          <ul>
            <li>Besplatna dostava</li>
            <li>Dostava u roku do 14 radnih dana</li>
            <li>Povrat robe nije moguć</li>
            <li>Svi detalji o narudžbi bit će poslani putem e-maila nakon kupovine</li>
          </ul>
        </div>
      </div>
    </div>
  `;
});

/* ── Prebacivanje glavne slike klikom na minijaturu ── */
function switchImage(thumbEl, src) {
  const mainImg = document.getElementById('main-img');
  const mainPh  = document.getElementById('main-ph');

  mainImg.src = src;
  mainImg.style.display = '';
  mainPh.style.display  = 'none';
  mainImg.onerror = function() {
    this.style.display = 'none';
    mainPh.style.display = 'flex';
  };

  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectColor(el) {
  document.querySelectorAll('.color-option').forEach(option => {
    option.classList.remove('selected');
    option.setAttribute('aria-pressed', 'false');
  });
  el.classList.add('selected');
  el.setAttribute('aria-pressed', 'true');
  const name = el.dataset.name;
  selectedColor = name;
  const label = document.getElementById('selected-color-name');
  label.textContent = `Odabrano: ${name}`;
  label.style.display = 'block';
  document.getElementById('need-variant').style.display = 'none';
}

function changeQtyLocal(delta) {
  qty = Math.max(1, qty + delta);
  document.getElementById('qty-display').textContent = qty;
}

function openModal() {
  if (!selectedColor) {
    document.getElementById('need-variant').style.display = 'block';
    if (isA11yOn()) {
      announceWarning('Upozorenje: niste odabrali varijaciju proizvoda. Molimo odaberite varijaciju prije dodavanja u košaricu.');
    }
    return;
  }
  if (isA11yOn()) {
    announceA11y('Proizvod se dodaje u košaricu. Potvrda slijedi nakon uputa za plaćanje.');
  }
  const p = currentProduct;
  document.getElementById('modal-name').textContent  = p.name;
  // document.getElementById('modal-sub').textContent   = p.desc;
  document.getElementById('modal-price').textContent = `€${p.price}`;
  document.getElementById('modal-qty').textContent   = qty;
  document.getElementById('modal-total').textContent = `€${(p.price * qty).toFixed(2)}`;

  //nadodano
  const modalImgs = p.images && p.images.length > 0
  ? p.images
  : (p.image ? [p.image] : []);

  const modalFirstImg = modalImgs[0] || '';

  document.querySelector('.modal-img').innerHTML = `
    <img src="images/${modalFirstImg}" alt="${p.name}"
       ${!modalFirstImg ? 'style="display:none"' : ''}
       onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span style="${modalFirstImg ? 'display:none' : 'display:flex'}">🧶</span>`;

  document.getElementById('modal-color-row').innerHTML =
    `<span>${selectedColor}</span>`;

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function confirmAdd() {
  const id = productId(currentProduct) + '-' + selectedColor;
  addToCart(id, qty);
  closeModal();
  if (isA11yOn()) {
    announceA11y('Proizvod dodan u košaricu.');
  }
  const cartLink = document.getElementById('go-cart-link');
  if (cartLink) {
    // announceA11y('Idi direktno u košaricu.');
    cartLink.style.display = 'flex';
    cartLink.focus();
  }
  const btn = document.getElementById('add-btn');
  btn.style.background = '#16A34A';
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:18px;height:18px;stroke:white;fill:none;stroke-width:2.5"><polyline points="20 6 9 17 4 12"/></svg> Dodano!';
  setTimeout(() => {
    btn.style.background = '';
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:18px;height:18px;stroke:white;fill:none;stroke-width:2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Dodaj u košaricu';
  }, 2000);
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

//vrati po potrebi na 65. liniju
// <p class="product-subtitle">${product.desc}</p>