const tabsContainer = document.querySelector('.block-tabs');
const tabs = tabsContainer.querySelectorAll('.block-tabs__button');

const renderTabs = (contentList, className) => {
  tabsContainer.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('block-tabs__button')) {
      const selectedTab = event.target;
      const tabId = selectedTab.dataset.tabId;

      tabs.forEach((tab) => {
        tab.setAttribute('aria-selected', tab === selectedTab);
      });

      contentList.forEach((content) => {
        content.classList.toggle(className, content.id === tabId);
      });
    }
  });
};

export { renderTabs };
