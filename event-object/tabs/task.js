const tabNavigation = document.querySelector('.tab__navigation');
const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

tabNavigation.addEventListener('click', ({target}) => {
  if (!target.classList.contains('tab')) return;
  const idx = [...tabs].indexOf(target);
  tabs.forEach(tab => tab.classList.remove('tab_active'));
  tabsContent.forEach(content => content.classList.remove('tab__content_active'));
  target.classList.add('tab_active');
  tabsContent[idx].classList.add('tab__content_active');
})