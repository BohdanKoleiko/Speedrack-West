"use strict";

const swiperPagination = new Swiper(".pagination-slider__inner", {
   spaceBetween: 8,
   watchOverflow: false,
   grabCursor: true,

   breakpoints: {
      320: {
         navigation: false,
         slidesPerView: "auto",
      },

      992: {
         slidesPerView: 5,
         navigation: {
            prevEl: ".pagination-slider__btn-prev",
            nextEl: ".pagination-slider__btn-next",
         },
      },
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

   thumbs: {
      swiper: swiperPagination,
      slideThumbActiveClass: "pagination-slider__slide_active",
   },

   breakpoints: {
      320: {
         navigation: false,
      },

      992: {
         navigation: {
            prevEl: ".main-slider__button-prev",
            nextEl: ".main-slider__button-next",
         },
      },
   },
});
