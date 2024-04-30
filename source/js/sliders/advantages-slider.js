import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

const DESKTOP_WIDTH = 1440;

new Swiper('#advantages-slider', {
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

  on: {
    resize: function renderSlider(swiper) {
      if (window.innerWidth < DESKTOP_WIDTH) {
        swiper.disable();
        swiper.destroy(true, true);
      } else {
        swiper.enable();
        swiper.init();
      }
    }
  }
});
