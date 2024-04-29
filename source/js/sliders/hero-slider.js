import Swiper from 'swiper';
import { Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

new Swiper('#hero-slider', {
  modules: [Pagination, A11y, EffectFade],
  loop: true,
  speed: 700,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: '.pagination__wrapper',
    bulletElement: 'button',
    bulletClass: 'pagination__button pagination-bullet',
    bulletActiveClass: 'pagination-bullet--selected',
    clickable: true,
  },

  a11y: {
    enabled: true,
    containerMessage: 'Слайдер с популярными турами.',
    itemRoleDescriptionMessage: 'Слайд.',
    firstSlideMessage: 'Первый слайд.',
    lastSlideMessage: 'Последний слайд.',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});
