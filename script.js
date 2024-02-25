const cartShop = document.querySelector(".cart-shop-nav");
const popUpCart = document.querySelector(".pop-up-cart");
popUpCart.style.display = "none";
cartShop.addEventListener("mouseover", () => {
  popUpCart.style.display = "block";
});
cartShop.addEventListener("mouseleave", () => {
  popUpCart.style.display = "none";
});

let index = 1;
showSlide(index);

function plusSlides(n) {
  showSlide((index += n));
}

function showSlide(n) {
  let i;
  const slides = document.querySelectorAll(".slider");

  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

const sliderPage = document.querySelector(".slider-page");
sliderPage.addEventListener("mouseover", () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  prev.style.display = "block";
  next.style.display = "block";
});
sliderPage.addEventListener("mouseleave", () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  prev.style.display = "none";
  next.style.display = "none";
});
let slideIndex = 0;
automaticSlide();
function automaticSlide() {
  let i;
  let slides = document.querySelectorAll(".slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(automaticSlide, 4000); // Change image every 2 seconds
}
// CART-SHOP-NAV
const cart = document.querySelector(".cart-shop-nav");
cart.addEventListener("click", (e) => e.preventDefault());

// BURGER MENU
const burgerMenu = document.querySelector(".burger");
const burgerList = document.querySelector(".burger-list-container");
burgerMenu.addEventListener("click", () => {
  window.getComputedStyle(burgerList).display === "none"
    ? (burgerList.style.display = "block")
    : (burgerList.style = "none");
});
// THREE DOT MENU
const threeDot = document.querySelectorAll(".three-dot");
const threeDotList = document.querySelectorAll(".three-dot-list");

for (let i = 0; i < threeDot.length; i++) {
  threeDot[i].addEventListener("click", function () {
    window.getComputedStyle(threeDotList[i]).display == "none"
      ? (threeDotList[i].style.display = "block")
      : (threeDotList[i].style.display = "none");
  });
}
