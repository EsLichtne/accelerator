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

const DESKTOP_WIDTH = 1440;

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initToursSlider();
  initInstructorsSlider();
  initReviewsSlider();

  if (window.innerWidth >= DESKTOP_WIDTH) {
    initAdvantagesSlider();
  } else {
    initGallerySlider();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    initAdvantagesSlider();
    destroyGallerySlider();
  } else {
    initGallerySlider();
    destroyAdvantagesSlider();
  }
});
