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
