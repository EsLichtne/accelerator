import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

let slider = null;
const DESKTOP_WIDTH = 1440;

const initSlider = () => {
  if (!slider) {
    slider = new Swiper('#advantages-slider', {
      modules: [Navigation, A11y],
      loop: true,
      speed: 500,
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 3,
      centeredSlides: true,
      slidesPerGroup: 2,
      observer: true,
      observeParents: true,

      navigation: {
        nextEl: '#advantages-slider-button-next',
        prevEl: '#advantages-slider-button-prev',
      },

      a11y: {
        enabled: true,
        containerMessage: 'Слайдер с преимуществами.',
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
  if (window.innerWidth >= DESKTOP_WIDTH) {
    initSlider();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    initSlider();
  } else {
    destroySlider();
  }
});
