'use strict';
document.addEventListener('DOMContentLoaded', function () {

  // front page - intro slide
  var swiper = new Swiper(".introSlide", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });

  // Page About us - testimonials
  var swiper = new Swiper(".testimoSlides", {
    direction: "vertical",
    navigation: {
      nextEl: ".downBtn",
      prevEl: ".upBtn",
    },
    loop: true,
    allowTouchMove: false
  });

});