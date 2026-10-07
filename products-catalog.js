/* BABALUX catalogue pagination fix — 2026-10-07 */
const products = window.BABALUX_PRODUCTS || [];
const page = Number(document.body.dataset.page || 1);
const pageSize = 25;
const totalPages = Math.ceil(products.length / pageSize);
const start = (page - 1) * pageSize;
const pageProducts = products.slice(start, start + pageSize);

const grid = document.getElementById("product-grid");
const count = document.getElementById("catalog-count");

function esc(value){
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
}

grid.innerHTML = pageProducts.map(p => `
  <article class="product-card">
    <a class="product-image" href="product.html?id=${encodeURIComponent(p[0])}" aria-label="View ${esc(p[1])}">
      ${p[4]
        ? `<img src="${esc(p[4])}" alt="BABALUX ${esc(p[1])}" loading="lazy">`
        : `<div class="image-placeholder">Image coming soon</div>`}
    </a>
    <div class="product-info">
      <div class="product-category">${esc(p[2])}</div>
      <h2 class="product-title"><a href="product.html?id=${encodeURIComponent(p[0])}">${esc(p[1])}</a></h2>
      <p class="product-description">${esc(p[5] || "")}</p>
      <div class="product-meta">
        ${(p[6] || []).slice(0,5).map(m => `<span class="meta-pill">${esc(m)}</span>`).join("")}
      </div>
      <div class="product-bottom">
        <div class="price">${esc(p[3])}</div>
        <a class="buy-button" href="product.html?id=${encodeURIComponent(p[0])}">View</a>
      </div>
    </div>
  </article>
`).join("");

count.textContent = `Page ${page} of ${totalPages} · Products ${start + 1}–${Math.min(start + pageSize, products.length)}`;

const pagination = document.getElementById("pagination");
const prev = page > 1
  ? `<a class="pagination-button" href="products-${page-1}.html"><span aria-hidden="true">←</span> Previous Page</a>`
  : `<span class="pagination-button disabled" aria-disabled="true"><span aria-hidden="true">←</span> Previous Page</span>`;

const next = page < totalPages
  ? `<a class="pagination-button" href="products-${page+1}.html">Next Page <span aria-hidden="true">→</span></a>`
  : `<span class="pagination-button disabled" aria-disabled="true">Next Page <span aria-hidden="true">→</span></span>`;

const numbers = Array.from({length: totalPages}, (_,i) => {
  const n=i+1;
  return n === page
    ? `<span class="pagination-number active" aria-current="page">${n}</span>`
    : `<a class="pagination-number" href="products-${n}.html" aria-label="Go to page ${n}">${n}</a>`;
}).join("");

pagination.innerHTML = prev + numbers + next;
