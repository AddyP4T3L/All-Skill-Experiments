import { displayBooks, updateCartUI, showCheckoutModal } from "./ui.js";
import { cart } from "./cart.js";

// Initial Render
displayBooks();
updateCartUI();

// Checkout Button
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty. Please add items before checkout.");
  } else {
    showCheckoutModal();
  }
});
