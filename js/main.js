// main.js: Entry script for interactivity
console.log("Joe Calvi Furniture site loaded.");

// Change main product image on thumbnail click
function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = thumbnail.src;
  }
}

// Global cart counter from localStorage
let cartItemCount = parseInt(localStorage.getItem("cartCount")) || 0;
const cartCountElement = document.getElementById("cart-count");
if (cartCountElement) cartCountElement.textContent = cartItemCount;

// Show popup when item is added to cart
function showCartPopup() {
  const popup = document.createElement("div");
  popup.textContent = "✅ Item added to cart!";
  popup.className = "cart-popup";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2000);

  cartItemCount += 1;
  localStorage.setItem("cartCount", cartItemCount);

  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cartItemCount;
}

// Update cart number on initial load
window.addEventListener("DOMContentLoaded", () => {
  const count = localStorage.getItem("cartCount") || 0;
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = count;
});

// Show delete confirmation popup
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", () => {
      const confirmDelete = confirm("Are you sure you want to remove this item?");
      if (confirmDelete) {
        const popup = document.createElement("div");
        popup.textContent = "🗑️ Item removal confirmed!";
        popup.className = "cart-popup";
        document.body.appendChild(popup);

        setTimeout(() => popup.remove(), 2000);
      }
    });
  });
});

// Update total price in cart
function updateCartTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseFloat(item.querySelector(".item-price").dataset.price);
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += price * quantity;
  });

  const totalEl = document.getElementById("total-price");
  if (totalEl) totalEl.textContent = total.toFixed(2);
}

// Increase quantity
document.querySelectorAll(".increase").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.previousElementSibling;
    qty.textContent = parseInt(qty.textContent) + 1;
    updateCartTotal();
  });
});

// Decrease quantity (but not below 1)
document.querySelectorAll(".decrease").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.nextElementSibling;
    let val = parseInt(qty.textContent);
    if (val > 1) {
      qty.textContent = val - 1;
      updateCartTotal();
    }
  });
});

// Handle checkout form submission
const form = document.getElementById("checkout-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      window.location.href = "confirmation.html";
    } else {
      alert("Please fill in all required fields correctly.");
    }
  });
}

// Initial total price update
updateCartTotal();
