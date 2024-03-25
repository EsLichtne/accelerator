import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  speed: 500,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});
