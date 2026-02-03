document.querySelector('.browse-btn').addEventListener('click', () => {
  alert("Welcome to our floral collection 🌸");
});


document.querySelectorAll('.cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Flower added to cart 🌷");
  });
});