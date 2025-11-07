// ========== Cart Array ==========
export let cart = [];

// Add to Cart
export function addToCart(book) {
  cart.push(book);
}

// Remove from Cart
export function removeFromCart(index) {
  cart.splice(index, 1);
}

// Get Cart Total
export function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

// Clear Cart
export function clearCart() {
  cart = [];
}
