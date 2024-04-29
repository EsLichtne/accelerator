import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

new Swiper('#reviews-slider', {
  modules: [Navigation, A11y],
  speed: 500,
  slidesPerView: 'auto',

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 30,
      slidesOffsetAfter: 60,
    },
    1440: {
      spaceBetween: 120,
      slidesOffsetAfter: 120,
    }
  },

  navigation: {
    nextEl: '#reviews-slider-button-next',
    prevEl: '#reviews-slider-button-prev',
  },

  a11y: {
    enabled: true,
    containerMessage: 'Слайдер с отзывами.',
    itemRoleDescriptionMessage: 'Слайд.',
    firstSlideMessage: 'Первый слайд.',
    lastSlideMessage: 'Последний слайд.',
    prevSlideMessage: 'Предыдущий слайд.',
    nextSlideMessage: 'Следующий слайд.',
  },
});
