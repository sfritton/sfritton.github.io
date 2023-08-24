const themeToggleContainer = document.querySelector('.theme-toggle-container');
const themeToggleButton = document.querySelector('.themeToggle');
const themeToggleLabel = document.querySelector('.themeToggle .label');

let isDarkMode = true;

themeToggleButton?.addEventListener('click', () => {
  if (isDarkMode) {
    themeToggleContainer?.setAttribute('data-theme', 'light');
    if (themeToggleLabel) themeToggleLabel.textContent = 'Switch to dark mode';
  } else {
    themeToggleContainer?.setAttribute('data-theme', 'dark');
    if (themeToggleLabel) themeToggleLabel.textContent = 'Switch to light mode';
  }

  isDarkMode = !isDarkMode;
});
