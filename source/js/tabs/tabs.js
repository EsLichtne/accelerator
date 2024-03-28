import { throttle } from '../utilities';

const renderTabs = (container, tabs) => {
  container.addEventListener('click', throttle((event) => {
    const tabId = event.target.dataset.tabId;

    document.dispatchEvent(new CustomEvent(`${container.id}`, { detail: tabId }));

    if (event.target && event.target.classList.contains(tabs[0].className)) {
      const selectedTab = event.target;

      tabs.forEach((tab) => {
        tab.setAttribute('aria-selected', tab === selectedTab);
      });
    }
  }, 500));
};

export { renderTabs };
