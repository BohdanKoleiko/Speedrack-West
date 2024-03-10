"use strict";

const swiperPagination = new Swiper(".pagination-slider__inner", {
   slidesPerView: 5,
   spaceBetween: 8,
   watchOverflow: false,
   grabCursor: true,

   navigation: {
      prevEl: ".pagination-slider__btn-prev",
      nextEl: ".pagination-slider__btn-next",
   },
});

const swiper = new Swiper(".main-slider", {
   slidesPerView: 1,

   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
         return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
      },
   },

   navigation: {
      prevEl: ".main-slider__button-prev",
      nextEl: ".main-slider__button-next",
   },

   thumbs: {
      swiper: swiperPagination,
      slideThumbActiveClass: "pagination-slider__slide_active",
   },
});

//# sourceMappingURL=swiper.js.map

//# sourceMappingURL=swiper.js.map
