import Swiper from 'swiper';
import { Pagination, Navigation, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

let advantagesSlider = null;
let gallerySlider = null;

const initHeroSlider = () => {
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
};

const initToursSlider = () => {
  new Swiper('#tours-slider', {
    modules: [Navigation, A11y],
    speed: 500,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
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
};

const initInstructorsSlider = () => {
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
};

const initReviewsSlider = () => {
  new Swiper('#reviews-slider', {
    modules: [Navigation, A11y],
    speed: 500,
    slidesPerView: 'auto',

    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesOffsetAfter: 0,
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
};

const initAdvantagesSlider = () => {
  if (!advantagesSlider) {
    advantagesSlider = new Swiper('#advantages-slider', {
      modules: [Navigation, A11y],
      loop: true,
      speed: 500,
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 3,
      centeredSlides: true,
      slidesPerGroup: 2,

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

const destroyAdvantagesSlider = () => {
  if (advantagesSlider) {
    advantagesSlider.destroy();
    advantagesSlider = null;
  }
};

const initGallerySlider = () => {
  if (!gallerySlider) {
    gallerySlider = new Swiper('#gallery-slider', {
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

const destroyGallerySlider = () => {
  if (gallerySlider) {
    gallerySlider.destroy();
    gallerySlider = null;
  }
};

export {
  initHeroSlider,
  initToursSlider,
  initInstructorsSlider,
  initReviewsSlider,
  initAdvantagesSlider,
  destroyAdvantagesSlider,
  initGallerySlider,
  destroyGallerySlider
};
