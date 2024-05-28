import Swiper from 'swiper';
import {
  Pagination,
  A11y,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { heroImages } from '../mocks/hero-images';

const initHeroSlider = () => {
  const changeImage = (index) => {
    const image = document.querySelector('.hero-slider__image');
    const { src, srcset, source, alt } = heroImages[index];
    image.src = src;
    image.srcset = srcset;
    image.parentElement.querySelector('source').srcset = source;
    image.alt = alt;
  };

  new Swiper('#hero-slider', {
    modules: [Pagination, A11y, EffectFade],
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoHeight: true,

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: '.pagination__wrapper',
      bulletElement: 'button',
      bulletClass: 'pagination__bullet',
      bulletActiveClass: 'pagination__bullet--selected',
      clickable: true,
    },

    on: {
      activeIndexChange: (slider) => {
        changeImage(slider.realIndex);
      },
    },

    a11y: {
      enabled: true,
      containerMessage: 'Слайдер с направлениями программ.',
      itemRoleDescriptionMessage: 'Слайд.',
      firstSlideMessage: 'Первый слайд.',
      lastSlideMessage: 'Последний слайд.',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  });
};

export { initHeroSlider };
