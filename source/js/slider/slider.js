import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';

new Swiper('#juri-slider', {
  modules: [Navigation, A11y],
  loop: true,
  speed: 500,
  containerModifierClass: 'swiper-juri-',
  watchSlidesProgress: true,

  navigation: {
    nextEl: '#juri-slider-button-next',
    prevEl: '#juri-slider-button-prev',
  },

  a11y: {
    enabled: true,
    containerMessage: 'Слайдер с членами жюри.',
    itemRoleDescriptionMessage: 'Слайд.',
    firstSlideMessage: 'Первый слайд.',
    lastSlideMessage: 'Последний слайд.',
    prevSlideMessage: 'Предыдущий слайд.',
    nextSlideMessage: 'Следующий слайд.',
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
  },
});

new Swiper('#reviews-slider', {
  modules: [Navigation, A11y],
  loop: false,
  slidesPerView: 1,
  speed: 800,
  touchReleaseOnEdges: true,

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
