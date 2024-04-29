import Swiper from 'swiper';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';

new Swiper('#hero-slider', {
  modules: [Pagination, A11y],
  loop: true,
  speed: 500,
  slidesPerView: 1,

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
