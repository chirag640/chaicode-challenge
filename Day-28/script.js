document.addEventListener("DOMContentLoaded", () => {
    let products = [];
    let cart = [];
    let filteredProducts = [];

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        products = data;
        filteredProducts = products;
        displayCategories();
        displayProducts();
      })
      .catch((error) => console.error("Error fetching products:", error));

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.searchProducts = searchProducts;
    window.updatePriceRange = updatePriceRange;
    window.sortProducts = sortProducts;

    function displayCategories() {
      const categories = [...new Set(products.map((product) => product.category))];
      const categoryList = document.getElementById("category-list");
      categoryList.innerHTML = "";

      categories.forEach((category) => {
        const li = document.createElement("li");
        li.textContent = category;
        li.onclick = () => displayProducts(category, document.getElementById("search-input").value);
        categoryList.appendChild(li);
      });
    }

    function displayProducts(category = null, searchQuery = "") {
      const productListing = document.getElementById("products");
      productListing.innerHTML = "";

      filteredProducts
        .filter((product) =>
          (category ? product.category === category : true) &&
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .forEach((product) => {
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
          productCard.innerHTML = `
            <div>
              <img src="${product.image}" alt="${product.title}">
            </div>
            <div>
              <h3>${product.title}</h3>
              <p>$${product.price.toFixed(2)}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          `;
          productListing.appendChild(productCard);
        });
    }

    function addToCart(productId) {
      const product = products.find((p) => p.id === productId);
      const cartItem = cart.find((item) => item.id === productId);

      if (product) {
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        updateCart();
      } else {
        console.error("Product not found");
      }
    }

    function updateCart() {
      const cartItems = document.getElementById("cart-items");
      const cartTotal = document.getElementById("cart-total");
      cartItems.innerHTML = "";
      let total = 0;

      cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${item.title} (x${item.quantity})</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
          <button id="checkout-remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
      });

      cartTotal.textContent = total.toFixed(2);
    }

    function removeFromCart(productId) {
      const cartItem = cart.find((item) => item.id === productId);

      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
        } else {
          cart = cart.filter((item) => item.id !== productId);
        }
        updateCart();
      } else {
        console.error("Cart item not found");
      }
    }

    document.getElementById("checkout-btn")?.addEventListener("click", () => {
      if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
      } else {
        alert("Your cart is empty!");
      }
    });

    function searchProducts() {
      displayProducts(null, document.getElementById("search-input").value);
    }

    function updatePriceRange() {
      const maxPrice = parseFloat(document.getElementById("price-range").value);
      document.getElementById("price-range-value").textContent = maxPrice;
      filteredProducts = products.filter(product => product.price <= maxPrice);
      displayProducts(null, document.getElementById("search-input").value);
    }

    function sortProducts() {
      const sortOption = document.getElementById("sort-options").value;
      if (sortOption === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
      displayProducts(null, document.getElementById("search-input").value);
    }
});
