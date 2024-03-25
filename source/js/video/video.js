const video = document.querySelector('.video');
const link = video.querySelector('.video__link');
const button = video.querySelector('.video__button');

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.classList.add('video__media');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', link.href);

  return iframe;
};

const setupVideo = () => {
  video.addEventListener('click', () => {
    const iframe = createIframe();

    link.removeAttribute('href');
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
};

setupVideo(video);
