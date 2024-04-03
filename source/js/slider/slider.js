import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('#juri-slider', {
  modules: [Navigation],
  loop: true,
  speed: 500,
  containerModifierClass: 'swiper-juri-',
  watchSlidesProgress: true,

  navigation: {
    nextEl: '#juri-slider-button-next',
    prevEl: '#juri-slider-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 2,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

new Swiper('#reviews-slider', {
  modules: [Navigation],
  loop: false,
  slidesPerView: 1,
  speed: 800,
  cssMode: true,

  navigation: {
    nextEl: '#reviews-slider-button-next',
    prevEl: '#reviews-slider-button-prev',
  },
});
