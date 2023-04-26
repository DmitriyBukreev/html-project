const buttons = document.querySelectorAll('[data-theme-changer]');
const prefersDarkScheme = window.matchMedia(
  '(prefers-color-scheme: dark)',
).math;
let currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
  currentTheme = prefersDarkScheme ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

if (currentTheme == 'dark') {
  document.documentElement.toggleAttribute('data-theme-dark');
}

function changeHandler() {
  document.documentElement.toggleAttribute('data-theme-dark');
  for (button of buttons) {
    button.checked = this.checked;
  }
  const switchTo = localStorage.getItem('theme') == 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', switchTo);
}

for (let button of buttons) {
  button.onchange = changeHandler;
  if (currentTheme == 'dark') {
    button.checked = true;
  }
}
