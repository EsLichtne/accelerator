import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

let slider = null;
const DESKTOP_WIDTH = 1440;

const initSlider = () => {
  if (!slider) {
    slider = new Swiper('#gallery-slider', {
      modules: [Navigation, A11y],
      loop: true,
      speed: 500,
      spaceBetween: 5,

      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },

      navigation: {
        nextEl: '#gallery-slider-button-next',
        prevEl: '#gallery-slider-button-prev',
      },

      a11y: {
        enabled: true,
        containerMessage: 'Слайдер с фотографиями.',
        itemRoleDescriptionMessage: 'Слайд.',
        firstSlideMessage: 'Первый слайд.',
        lastSlideMessage: 'Последний слайд.',
        prevSlideMessage: 'Предыдущий слайд.',
        nextSlideMessage: 'Следующий слайд.',
      },
    });
  }
};

const destroySlider = () => {
  if (slider) {
    slider.destroy();
    slider = null;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < DESKTOP_WIDTH) {
    initSlider();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < DESKTOP_WIDTH) {
    initSlider();
  } else {
    destroySlider();
  }
});
