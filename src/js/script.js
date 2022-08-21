const navList = document.querySelector(".nav__list");
const menuBtn = document.querySelector(".menu-icon");
const productImg = document.querySelector(".product-img");
const smallImg = document.querySelectorAll(".small-img");

///Toggle Menu
menuBtn.addEventListener("click", function (e) {
  navList.classList.toggle("hidden");
});

///Choosing image
smallImg.forEach((img) =>
  img.addEventListener("click", function (e) {
    productImg.src = img.src;
  })
);

///Cart
const cartIcon = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
const cartClose = document.querySelector(".cart-close");
const cartContent = document.querySelector(".cart-content");

///Open Cart
cartIcon.addEventListener("click", function (e) {
  cartContainer.classList.add("active");
});

///Close Cart
cartClose.addEventListener("click", function (e) {
  cartContainer.classList.remove("active");
});

///Functions

const ready = function () {
  /// Remove Items From Cart
  removeCartItem();

  /// Quantity Changes
  quantityChanges();

  /// Add Cart
  addCart();

  /// Buy Btn
  buyBtn();
};

/// Remove Cart Functions
const removeCartItem = function () {
  const removeCartButtons = document.querySelectorAll(".cart-remove");
  removeCartButtons.forEach((button) =>
    button.addEventListener("click", removeCartItemFunction)
  );
};

const removeCartItemFunction = function (event) {
  const clicked = event.target;
  clicked.parentElement.remove();
  updateTotal();
};

/// Quantity Canges Functions
const quantityChanges = function () {
  const quantityInputs = document.querySelectorAll(".cart-quantity");
  quantityInputs.forEach((quanInput) =>
    quanInput.addEventListener("change", quantityChangesFunction)
  );
};

const quantityChangesFunction = function (event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
};

/// Add Cart Functions
const addCart = function () {
  const addCarts = document.querySelectorAll(".add-cart");
  addCarts.forEach((addCart) =>
    addCart.addEventListener("click", addCartFunction)
  );
};

const addCartFunction = function (event) {
  const shopProduct = event.target.parentElement;
  const title = shopProduct.querySelector(".product-title").innerText;
  const price = shopProduct.querySelector(".product-price").textContent;
  const img = shopProduct.querySelector(".product-img").src;

  const cartTitles = [];
  document
    .querySelectorAll(".cart-product-title")
    .forEach((title) => cartTitles.push(title.innerText));

  if (cartTitles.includes(title.toUpperCase())) {
    alert("You have already add this item to Cart");
  } else {
    renderProductInCart(title, price, img);
    updateTotal();
  }

  // console.log(title);
};

const renderProductInCart = function (title, price, img) {
  const html = `
  <div class="cart-box">
    <img src="${img}" alt="" class="cart-img" />
    <div class="detail-box">
      <div class="cart-product-title">
        ${title}
      </div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity" />
    </div>
    <i class="uil uil-trash cart-remove"></i>
  </div>`;

  cartContent.insertAdjacentHTML("beforeend", html);
  removeCartItem();
  quantityChanges();
};

/// Update Total Function
const updateTotal = function () {
  const cartBoxes = cartContent.querySelectorAll(".cart-box");

  let total = 0;
  cartBoxes.forEach((cartBox) => {
    const priceElement = cartBox.querySelector(".cart-price");
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    // console.log(price);
    const quantity = cartBox.querySelector(".cart-quantity").value;
    // console.log(quantity);
    total = Math.round((total + price * quantity) * 100) / 100;
  });
  document.querySelector(".total-price").textContent = `$${total}`;
};

/// Buy Button Functions
const buyBtn = function () {
  document.querySelector(".btn-buy").addEventListener("click", buyBtnFunction);
};

const buyBtnFunction = function () {
  alert("Your Order is placed");
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
};

/////////////////////////////////////////////////////////////////////
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

///////////////////////Smooth Scrolling///////////////////////
document.querySelector(".btn-explore").addEventListener("cklick", function () {
  document
    .querySelector("#Featured-Products")
    .scrollIntoView({ behavior: "smooth" });
});

let swiperPremium = new Swiper(".premium-content", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
