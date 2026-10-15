(function () {
  const STORAGE_KEY = "babaluxCart";

  function readCart() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function writeCart(cart) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.isArray(cart) ? cart : []));
      updateCartCount();
      window.dispatchEvent(new Event("babalux-cart-updated"));
      return true;
    } catch (error) {
      return false;
    }
  }

  function updateCartCount() {
    const count = readCart().reduce((sum, item) => sum + Math.max(0, Number(item.quantity) || 0), 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = String(count);
      node.setAttribute("aria-label", count + " items in cart");
    });
  }

  window.getBabaluxCart = readCart;
  window.saveBabaluxCart = writeCart;
  window.updateBabaluxCartCount = updateCartCount;
  window.BABALUX_CART_STORAGE_KEY = STORAGE_KEY;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateCartCount);
  } else {
    updateCartCount();
  }
  window.addEventListener("storage", updateCartCount);
})();