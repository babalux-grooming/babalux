/* BABALUX category navigation active state */
(function () {
  const navs = document.querySelectorAll(".category-quick-links");
  if (!navs.length) return;

  const currentUrl = new URL(window.location.href);
  const categories = new Set(["scissors", "razors", "combs", "wax", "shaving", "accessories"]);
  const isCollectionPage = /(?:^|\/)collection\.html$/i.test(currentUrl.pathname);
  const isAllProductsPage = document.body.hasAttribute("data-page") || /(?:^|\\/)products-\\d+\\.html$/i.test(currentUrl.pathname);
  const requestedType = (currentUrl.searchParams.get("type") || "").trim().toLowerCase();
  const selectedType = categories.has(requestedType) ? requestedType : "scissors";

  navs.forEach((nav) => {
    nav.querySelectorAll("a").forEach((link) => {
      let targetUrl;
      try {
        targetUrl = new URL(link.getAttribute("href"), window.location.href);
      } catch {
        return;
      }

      const targetType = (targetUrl.searchParams.get("type") || "").trim().toLowerCase();
      const isAllProductsLink = link.hasAttribute("data-all-products") || /(?:^|\\/)products-1\\.html$/i.test(targetUrl.pathname);
      const selected = (isCollectionPage && targetType === selectedType) ||
        (isAllProductsPage && isAllProductsLink);

      link.classList.toggle("active", selected);
      if (selected) {
        link.setAttribute("aria-current", "page");
        link.style.setProperty("background-color", "#d6b774", "important");
        link.style.setProperty("border-color", "#e8ce92", "important");
        link.style.setProperty("color", "#111111", "important");
        link.style.setProperty("box-shadow", "inset 0 0 0 1px rgba(17,24,39,.12)", "important");
      } else {
        link.removeAttribute("aria-current");
        link.style.removeProperty("background-color");
        link.style.removeProperty("border-color");
        link.style.removeProperty("color");
        link.style.removeProperty("box-shadow");
      }
    });
  });
})();
