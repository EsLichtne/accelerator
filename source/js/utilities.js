const setContentWidth = () => {
  const page = document.querySelector('.page');
  const contentWidth = page.offsetWidth;
  page.style.setProperty('--width', `${contentWidth}px`);
};

setContentWidth();

export { setContentWidth };
