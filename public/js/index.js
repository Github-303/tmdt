document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".container-fluid");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-navbar");
    } else {
      navbar.classList.remove("fixed-navbar");
    }
  });

  let description = document.getElementById("description");
  let viewMoreButton = document.getElementById("view-button");

  viewMoreButton.addEventListener("click", function () {
    description.classList.toggle("full-description");
    viewMoreButton.textContent = description.classList.contains(
      "full-description"
    )
      ? "View less"
      : "View more";
  });

  const myCarouselElement = document.querySelector("#myCarousel");

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let iconCart = document.querySelector(".icon-cart");
  let body = document.querySelector("body");
  let closeCart = document.querySelector(".close-cart");
  let cart = [];

  iconCart.addEventListener("click", () => {
    body.classList.toggle("show-cart");
  });

  closeCart.addEventListener("click", () => {
    body.classList.remove("show-cart");
  });

  let btn = document.querySelectorAll("button");
  btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      var btnItem = event.target;
      var product = btnItem.closest(".showcase");

      if (product) {
        var productImg = product.querySelector(".product-img.default");
        var productName = product.querySelector(
          ".showcase-content .showcase-category"
        );
        var productPrice = product.querySelector(".showcase-content .price");

        if (productImg && productName && productPrice) {
          var productImgSrc = productImg.getAttribute("src");
          var productNameText = productName.innerText;
          var productPriceText = productPrice.innerText;
          addProductToCart({
            name: productNameText,
            price: parseFloat(productPriceText.replace("$", "")),
            image: productImgSrc,
            quantity: 1,
          });
        }
      }
    });
  });
  
  function addProductToCart(product) {
    var existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }
    showCart();

    calculateTotal();
  }
  function showCart() {
    var cartList = document.querySelector(".list-cart");
    cartList.innerHTML = "";

    cart.forEach(function (item) {
      var cartItem = document.createElement("div");
      cartItem.classList.add("item-cart");
      cartItem.innerHTML = `
        <div class="img-cart">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="name-cart">${item.name}</div>
        <div class="total-price">$${item.price * item.quantity}</div>
        <div class="quantity-cart">
          <span class="minus">${item.quantity}</span>
        </div>
      `;

      cartList.appendChild(cartItem);
    });
  }

  function calculateTotal() {
    var totalElement = document.querySelector(".total");
    var total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalElement.innerText = "$" + total.toFixed(2);
  }

  function checkout() {
    window.location.href = "/tmdt/views/card.html";
  }

  let likeCount = 0;
  let cartCount = 0;

  document.getElementById("likeCount").textContent = likeCount;
  document.getElementById("cartCount").textContent = cartCount;

  document
    .getElementById("likeButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      likeCount++;
      document.getElementById("likeCount").textContent = likeCount;
    });

  document
    .getElementById("cartButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cartCount++;
      document.getElementById("cartCount").textContent = cartCount;
    });

  for (let i = 1; i <= 5; i++) {
    document
      .getElementById(`likeButton${i}`)
      .addEventListener("click", function (event) {
        event.preventDefault();
        likeCount++;
        document.getElementById("likeCount").textContent = likeCount;
      });

    document
      .getElementById(`cartButton${i}`)
      .addEventListener("click", function (event) {
        event.preventDefault();
        cartCount++;
        document.getElementById("cartCount").textContent = cartCount;
      });
  }
});
