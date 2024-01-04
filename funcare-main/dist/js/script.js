// KAY PPEN n bestfrnd
const links = document.querySelectorAll(".faq__links h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const isActive = link.classList.contains("active");

    // Deactivate all other elements
    links.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.nextElementSibling.classList.remove("down");
        otherLink.querySelector("i").classList.remove("down", "rotate");
        otherLink.classList.remove("active");
      }
    });

    // Toggle the state for the clicked element only if it's not already active
    if (!isActive) {
      link.nextElementSibling.classList.toggle("down");
      link.querySelector("i").classList.toggle("down");
      link.querySelector("i").classList.toggle("rotate");
      link.classList.toggle("active");
    }
  });
});

const burgerBtn = document.querySelector(".burger__btn")
const headerNav = document.querySelector(".header__nav")
const headerNavBg = document.querySelector(".header__nav__bg")
const burgerBtnClose =document.querySelector(".burger__btn__close")

burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtnClose.classList.toggle("open")
    headerNavBg.classList.toggle("open")
});

burgerBtnClose.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtnClose.classList.toggle("open")
    headerNavBg.classList.toggle("open")
});

$(document).ready(function() {
    $('.slider-nav').slick({
       slidesToShow: 1, // Number of slides to show at a time
       slidesToScroll: 1, // Number of slides to scroll
       autoplay: false, // Autoplay the slider
       dots: false,
       autoplaySpeed: 4000, // Autoplay speed in milliseconds
       responsive: [{
             breakpoint: 0,
             settings: {
                slidesToShow: 2 // Adjust the number of slides to show on smaller screens if needed
             }
          },
          {
             breakpoint: 480,
             settings: {
                slidesToShow: 1 // Adjust the number of slides to show on even smaller screens if needed
             }
          }
       ]
    });
 });
