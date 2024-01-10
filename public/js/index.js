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
  let listCartHTML = document.querySelector(".list-cart");
  let iconCart = document.querySelector(".icon-cart");
  let iconCartSpan = document.querySelector(".icon-cart span");
  let body = document.querySelector("body");
  let closeCart = document.querySelector(".close-cart");
  let products = [];
  let cart = [];

  iconCart.addEventListener("click", () => {
    body.classList.toggle("show-cart");
  });

  closeCart.addEventListener("click", () => {
    body.classList.remove("show-cart");
  });

  document.addEventListener("click", (event) => {
    let positionClick = event.target;

    if (positionClick.classList.contains("cartButton")) {
      let showcaseContent = positionClick.closest(".showcase-content");
      let productName =
        showcaseContent.querySelector(".showcase-title").textContent;
      let productPrice = showcaseContent
        .querySelector(".price")
        .textContent.replace("$", "");

      let existingProduct = cart.find((item) => item.name === productName);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          name: productName,
          price: parseFloat(productPrice),
          quantity: 1,
        });
      }

      addCartToMemory();
      addCartToHTML();
    }
  });

  const addCartToHTML = () => {
    let listCartHTML = document.querySelector(".list-cart");
    listCartHTML.innerHTML = "";

    if (cart.length > 0) {
      cart.forEach((item) => {
        let newItem = document.createElement("div");
        newItem.classList.add("item-cart");
        newItem.innerHTML = `
          <div class="img-cart">
            <img src="/tmdt/public/images/default-image.jpg" alt="${item.name}">
          </div>
          <div class="name-cart">${item.name}</div>
          <div class="total-price">
            $${item.price * item.quantity}
          </div>
          <div class="quantity-cart">
            <span class="minus">-</span>
            <span>${item.quantity}</span>
            <span class="plus">+</span>
          </div>
        `;
        listCartHTML.appendChild(newItem);
      });
    }

    iconCartSpan.innerText = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const addCartToMemory = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCartFromMemory = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const initApp = () => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        products = data;
        cart = getCartFromMemory();
        addCartToHTML();
      });
  };

  initApp();
});

function checkout() {
  window.location.href = "/tmdt/views/card.html";
}
document.addEventListener("DOMContentLoaded", function () {
  let likeCount = 1;
  let cartCount = 4;

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

  document
    .getElementById("likeButton1")
    .addEventListener("click", function (event) {
      event.preventDefault();

      likeCount++;

      document.getElementById("likeCount").textContent = likeCount;
    });

  document
    .getElementById("cartButton1")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cartCount++;

      document.getElementById("cartCount").textContent = cartCount;
    });

  document
    .getElementById("likeButton2")
    .addEventListener("click", function (event) {
      event.preventDefault();

      likeCount++;

      document.getElementById("likeCount").textContent = likeCount;
    });

  document
    .getElementById("cartButton2")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cartCount++;

      document.getElementById("cartCount").textContent = cartCount;
    });

  document
    .getElementById("likeButton3")
    .addEventListener("click", function (event) {
      event.preventDefault();

      likeCount++;

      document.getElementById("likeCount").textContent = likeCount;
    });

  document
    .getElementById("cartButton3")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cartCount++;

      document.getElementById("cartCount").textContent = cartCount;
    });

  document
    .getElementById("likeButton4")
    .addEventListener("click", function (event) {
      event.preventDefault();

      likeCount++;

      document.getElementById("likeCount").textContent = likeCount;
    });

  document
    .getElementById("cartButton4")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cartCount++;

      document.getElementById("cartCount").textContent = cartCount;
    });

  document
    .getElementById("likeButton5")
    .addEventListener("click", function (event) {
      event.preventDefault();

      likeCount++;

      document.getElementById("likeCount").textContent = likeCount;
    });

  document
    .getElementById("cartButton5")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cartCount++;

      document.getElementById("cartCount").textContent = cartCount;
    });
});
