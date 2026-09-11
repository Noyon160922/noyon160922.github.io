// Theme toggle: light / dark, remembered per browser.
(function () {
  var KEY = 'nks-theme';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* private mode — ignore */ }
  }

  var saved = stored();
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  function current() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function paint(btn) {
    btn.textContent = current() === 'dark' ? '☼' : '☾';
    btn.setAttribute('aria-label', 'Switch to ' + (current() === 'dark' ? 'light' : 'dark') + ' theme');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    paint(btn);
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save(next);
      paint(btn);
    });
  });
})();
