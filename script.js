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
const dot = document.querySelectorAll(".dot");
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
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" purple", "");
  }
  slides[index - 1].style.display = "block";
  dot[index - 1].className += " purple";
  console.log(dot[index - 1]);
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const sliderPage = document.querySelector(".slider-page");
sliderPage.addEventListener("mouseover", () => {
  prev.style.display = "block";
  next.style.display = "block";
});
sliderPage.addEventListener("mouseleave", () => {
  prev.style.display = "none";
  next.style.display = "none";
});

let slideIndex = 0;

function automaticSlide(slideIndex) {
  const dot = document.querySelectorAll(".dot");
  const slides = document.querySelectorAll(".slider");
  slides.forEach((slide, i) => {
    if (i === slideIndex) {
      slide.style.display = "block";
      dot[i].classList.add("purple");
    } else {
      slide.style.display = "none";
      dot[i].classList.remove("purple");
    }
  });

  setTimeout(() => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
      dot[slideIndex].classList.add("purple");
    }
    automaticSlide(slideIndex);
  }, 3000);
}
automaticSlide(slideIndex);

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
