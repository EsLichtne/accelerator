import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

new Swiper('#instructors-slider', {
  modules: [Navigation, A11y],
  speed: 500,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '#instructors-slider-button-next',
    prevEl: '#instructors-slider-button-prev',
  },

  a11y: {
    enabled: true,
    containerMessage: 'Слайдер с инструкторами.',
    itemRoleDescriptionMessage: 'Слайд.',
    firstSlideMessage: 'Первый слайд.',
    lastSlideMessage: 'Последний слайд.',
    prevSlideMessage: 'Предыдущий слайд.',
    nextSlideMessage: 'Следующий слайд.',
  },
});
