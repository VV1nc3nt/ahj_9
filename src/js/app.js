const collapseBtn = document.querySelector('.collapse-btn');
const collapsedArea = document.querySelector('.collapsed-area');

collapseBtn.addEventListener('click', () => {
  if (collapsedArea.classList.contains('uncollapsed')) {
    collapsedArea.classList.remove('uncollapsed');
    collapsedArea.classList.add('collapsed');

    return;
  }

  collapsedArea.classList.remove('collapsed');
  collapsedArea.classList.add('uncollapsed');
});
