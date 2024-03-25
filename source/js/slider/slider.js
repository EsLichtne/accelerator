import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

new Swiper('#juri-slider', {
  modules: [Navigation],
  loop: true,
  speed: 500,

  navigation: {
    nextEl: '#juri-slider-button-next',
    prevEl: '#juri-slider-button-prev',
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
