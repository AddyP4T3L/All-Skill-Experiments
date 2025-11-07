import { books } from "./books.js";
import { cart, addToCart, removeFromCart, getCartTotal, clearCart } from "./cart.js";

// Display Books
export function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  books.forEach((book, index) => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price.toFixed(2)}</p>
      <p>Availability: ${book.availability}</p>
      <button ${book.availability !== "in stock" ? "disabled" : ""} data-index="${index}">Add to Cart</button>
    `;
    bookList.appendChild(div);
  });

  // Event listeners for "Add to Cart"
  document.querySelectorAll(".book button").forEach(btn => {
    btn.addEventListener("click", e => {
      const idx = e.target.dataset.index;
      addToCart(books[idx]);
      updateCartUI();
    });
  });
}

// Update Cart UI
export function updateCartUI() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "(Cart is empty)";
    cartTotal.textContent = "";
    return;
  }

  cartItemsDiv.innerHTML = "";
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.title} - ₹${item.price.toFixed(2)} `;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeFromCart(index);
      updateCartUI();
    });
    div.appendChild(removeBtn);
    cartItemsDiv.appendChild(div);
  });

  const total = getCartTotal();
  cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Show Checkout Modal
export function showCheckoutModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Mock Checkout</h2>
      <button id="place-order">Place Order (mock)</button>
      <button id="close-modal">Close</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Close Modal
  document.getElementById("close-modal").addEventListener("click", () => {
    modal.remove();
  });

  // Place Order
  document.getElementById("place-order").addEventListener("click", () => {
    alert("Order placed successfully (mock)!");
    clearCart();
    updateCartUI();
    modal.remove();
  });
}
