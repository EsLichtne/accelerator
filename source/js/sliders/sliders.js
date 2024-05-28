import Swiper from 'swiper';
import {
  Pagination,
  A11y,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const initHeroSlider = () => {
  const setTopIndent = (slider, wrapper) => {
    const pagination = slider.querySelector('.pagination');

    slider.style.setProperty('--top', `${slider.offsetHeight - wrapper.offsetHeight - pagination.offsetHeight}px`);
  };

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
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet--selected',
      clickable: true,
    },

    on: {
      afterInit: (slider) => {
        const wrapper = slider.visibleSlides[0].querySelector('.hero-card__wrapper');
        setTopIndent(slider.el.parentElement, wrapper);
      },
      transitionStart: (slider) => {
        const wrapper = slider.visibleSlides[0].querySelector('.hero-card__wrapper');
        setTopIndent(slider.el.parentElement, wrapper);
      },
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
};

export { initHeroSlider };
