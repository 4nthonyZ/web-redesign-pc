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
  }, 2000); // 自动消失
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

