// Light / Auto / Dark switch. "Auto" clears the saved choice so the CSS
// prefers-color-scheme rules take over and track the visitor's system setting.
(function () {
  var root = document.documentElement;
  var switcher = document.querySelector('.theme-switch');
  if (!switcher) return;

  var saved = 'auto';
  try {
    saved = localStorage.getItem('theme') || 'auto';
  } catch (e) {}
  if (saved !== 'light' && saved !== 'dark') saved = 'auto';

  var current = switcher.querySelector('input[value="' + saved + '"]');
  if (current) current.checked = true;
  switcher.hidden = false;

  switcher.addEventListener('change', function (event) {
    var theme = event.target.value;
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      if (theme === 'auto') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', theme);
      }
    } catch (e) {}
  });
})();
