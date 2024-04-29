import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

new Swiper('#tours-slider', {
  modules: [Navigation, A11y],
  speed: 500,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '#tours-slider-button-next',
    prevEl: '#tours-slider-button-prev',
  },

  a11y: {
    enabled: true,
    containerMessage: 'Слайдер с ближайшими турами.',
    itemRoleDescriptionMessage: 'Слайд.',
    firstSlideMessage: 'Первый слайд.',
    lastSlideMessage: 'Последний слайд.',
    prevSlideMessage: 'Предыдущий слайд.',
    nextSlideMessage: 'Следующий слайд.',
  },
});
