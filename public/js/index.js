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
  // Selecting necessary elements
  let listCartHTML = document.querySelector(".list-cart");
  let iconCart = document.querySelector(".icon-cart");
  let iconCartSpan = document.querySelector(".icon-cart span");
  let body = document.querySelector("body");
  let closeCart = document.querySelector(".close-cart");
  let products = [];
  let cart = [];

  // Toggle the shopping cart visibility when clicking the cart icon
  iconCart.addEventListener("click", () => {
    body.classList.toggle("show-cart");
  });

  // Close the shopping cart when clicking the close button
  closeCart.addEventListener("click", () => {
    body.classList.remove("show-cart");
  });

  // Function to add product data to HTML
  const addDataToHTML = () => {
    if (products.length > 0) {
      products.forEach((product) => {
        let newProduct = document.createElement("div");
        newProduct.dataset.id = product.id;
        newProduct.classList.add("item-cart");
        newProduct.innerHTML = `
          <div class="showcase">
            <!-- Your product HTML structure here -->
            <div class="showcase-actions">
               <button class="btn-action">
                  <i class="bi bi-heart"></i>
               </button>
               <button class="btn-action" data-id="${product.id}">
                  <i class="bi bi-cart-plus"></i>
               </button>
            </div>
          </div>
        `;
        listCartHTML.appendChild(newProduct);
      });
    }
  };

  // Event listener for the "Add to Cart" button in each product
  listCartHTML.addEventListener("click", (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains("btn-action")) {
      let productId = positionClick.dataset.id;
      addToCart(productId);
    }
  });

  // Function to add a product to the cart
  const addToCart = (productId) => {
    let productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      let positionThisProductInCart = cart.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (positionThisProductInCart === -1) {
        cart.push({
          id: productToAdd.id,
          name: productToAdd.name,
          price: productToAdd.price,
          quantity: 1,
        });
      } else {
        cart[positionThisProductInCart].quantity += 1;
      }

      addCartToMemory();
      addCartToHTML();
    }
  };

  // Function to save the cart data to local storage
  const addCartToMemory = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Function to update the cart in the HTML
  const addCartToHTML = () => {
    // Update your cart HTML structure based on the cart array
    // For simplicity, let's assume there's a container with the class "cart-container"
    let listCartHTML = document.querySelector(".list-cart");
    listCartHTML.innerHTML = ""; // Clear existing cart content

    if (cart.length > 0) {
      cart.forEach((item) => {
        let newItem = document.createElement("div");
        newItem.classList.add("item-cart");
        newItem.innerHTML = `
          <!-- Your cart item HTML structure here -->
        <div class="img-cart">
          <img src="${item.image}" alt="${item.name}">
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

    // Update the cart icon span with the total quantity
    iconCartSpan.innerText = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };
  listCartHTML.addEventListener("click", (event) => {
    let target = event.target;
    let productId = target.dataset.id;

    if (target.classList.contains("minus")) {
      changeQuantityCart(productId, "minus");
    } else if (target.classList.contains("plus")) {
      changeQuantityCart(productId, "plus");
    }
  });

  // ... (Phần code khác đã được cung cấp trước đó)

  // Function to fetch product information based on ID
  const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };
  // Function to handle changes in the cart (e.g., quantity adjustments)
  const changeQuantityCart = (productId, type) => {
    let positionItemInCart = cart.findIndex((item) => item.id === productId);

    if (positionItemInCart >= 0) {
      let info = cart[positionItemInCart];

      switch (type) {
        case "plus":
          cart[positionItemInCart].quantity += 1;
          break;

        default:
          let changeQuantity = cart[positionItemInCart].quantity - 1;

          if (changeQuantity > 0) {
            cart[positionItemInCart].quantity = changeQuantity;
          } else {
            cart.splice(positionItemInCart, 1);
          }
          break;
      }
    }

    addCartToHTML();
    addCartToMemory();
  };

  // Function to initialize the application
  const initApp = () => {
    // Assuming you have a way to fetch your products data (e.g., from a JSON file)
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        products = data;
        addDataToHTML();

        // Get data cart from memory
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
          addCartToHTML();
        }
      });
  };

  // Initialize the application
  initApp();
});
function checkout() {
  window.location.href = "/tmdt/views/card.html";
}
hienthidanhsachitemgiohang();
function truyxuatsanphamtheoid(id) {
  var jsondanhsachsanpham = localStorage.getItem("list-cart");
  var danhsachsanpham = JSON.parse(jsondanhsachsanpham);
  for (var i = 0; i < danhsachsanpham.length; i++) {
    var sanphamhientai = danhsachsanpham[i];
    if ((sanphamhientai.id = id)) {
      return sanphamhientai;
    }
  }
}
function laygiohangtulocalstorgare() {
  var giohang = new Array();
  var jsongiohang = localStorage.getItem("giohang");
  if (jsongiohang != null) giohang = JSON.parse(jsongiohang);
  return giohang;
}
function laysanphamtheoid(idsp) {
  var sanpham = new Object();
  var danhsachsanpham = laygiohangtulocalstorgare();

  for (var i = 0; i < danhsachsanpham.length; i++) {
    var sanphamhientai = danhsachsanpham[i];
    if (sanphamhientai.id == idsp) {
      sanpham = sanphamhientai;
    }
    sanpham = taodoituongsanpham(
      sanpham.hinhanh,
      sanpham.ten,
      sanpham.giaca,
      sanpham.id,
      sanpham.soluong
    );
    return sanpham;
  }
}
function hienthidanhsachitemgiohang() {
  var danhsachitemgiohang = laygiohangtulocalstorgare();
  var HTML = chuyendanhsachitemgiohangsanghtml(danhsachitemgiohang);
  var nodegiohang = document.getElementsByClassName("shopping-cart");
  nodegiohang.innerHTML = HTML;
}
function chuyendanhsachitemgiohangsanghtml(listcart) {
  var htmlTong = "";
  for (var i = 0; i < listcart.length; i++) {
    htmlTong = htmlTong + chuyendoidoituongitemgiohangsanghtml(listcart[i]);
  }
  return htmlTong;
}
function chuyendoidoituongitemgiohangsanghtml(itemcart) {
  var item = laysanphamtheoid(itemcart.idsp);
  var html =
    '<div class="item-cart">\n' +
    '            <div class="img-cart">\n' +
    '               <img src="' +
    sanpham.hinhanh +
    '" alt="">\n' +
    "            </div>\n" +
    '            <div class="name-cart">' +
    sanpham.ten +
    "</div>\n" +
    '            <div class="total-price">\n' +
    "               $4500'\n" +
    "            </div>\n" +
    '            <div class="quantity-cart">\n' +
    '               <span class="minus">-</span>\n' +
    "               <span>1</span>\n" +
    '               <span class="plus">+</span>\n' +
    "            </div>\n" +
    "         </div>";

  return html;
}
