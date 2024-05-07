import './navigation/navigation';
import {
  initHeroSlider,
  initToursSlider,
  initInstructorsSlider,
  initReviewsSlider,
  initAdvantagesSlider,
  destroyAdvantagesSlider,
  initGallerySlider,
  destroyGallerySlider
} from './sliders/sliders';
import { advantagesCards } from './mocks/advantages-cards';
import './upload/upload';

const DESKTOP_WIDTH = 1024;

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initToursSlider();
  initInstructorsSlider();
  initReviewsSlider();

  if (window.innerWidth >= DESKTOP_WIDTH) {
    initAdvantagesSlider(advantagesCards);
  } else {
    initGallerySlider();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    initAdvantagesSlider(advantagesCards);
    destroyGallerySlider();
  } else {
    initGallerySlider();
    destroyAdvantagesSlider(advantagesCards);
  }
});
