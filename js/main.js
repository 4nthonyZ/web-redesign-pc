// main.js: placeholder for future interactivity
console.log("Joe Calvi Furniture site loaded.");
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;
  }

let cartItemCount = parseInt(localStorage.getItem("cartCount")) || 0;
document.getElementById("cart-count").textContent = cartItemCount;

  
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
  document.getElementById("cart-count").textContent = cartItemCount;
}
  
window.addEventListener("DOMContentLoaded", () => {
  const count = localStorage.getItem("cartCount") || 0;
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
});

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

function updateCartTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseFloat(item.querySelector(".item-price").dataset.price);
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    total += price * quantity;
  });
  document.getElementById("total-price").textContent = total;
}

document.querySelectorAll(".increase").forEach(btn => {
  btn.addEventListener("click", () => {
    const qty = btn.previousElementSibling;
    qty.textContent = parseInt(qty.textContent) + 1;
    updateCartTotal();
  });
});

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

const form = document.getElementById("checkout-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  if (form.checkValidity()) {
    window.location.href = "confirmation.html"; 
  } else {
    alert("Please fill in all required fields correctly.");
  }
});

updateCartTotal();