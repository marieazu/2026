(function () {
  var KEY = 'azu-auth';
  var PASSWORD = 'azu2026'; // Change this to your desired password

  if (sessionStorage.getItem(KEY) === '1') return;

  var style = document.createElement('style');
  style.textContent =
    '#azu-gate{position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:99999;display:flex;align-items:center;justify-content:center;font-family:"Roboto",sans-serif;}' +
    '#azu-gate-box{text-align:center;width:100%;max-width:320px;padding:0 24px;}' +
    '#azu-gate h1{font-size:2rem;letter-spacing:0.12em;font-weight:700;color:#000;margin:0 0 40px;}' +
    '#azu-gate input{width:100%;box-sizing:border-box;border:0;border-bottom:1.5px solid #000;font-family:inherit;font-size:1rem;padding:10px 0;outline:none;background:transparent;text-align:center;letter-spacing:0.05em;color:#000;}' +
    '#azu-gate input::placeholder{color:#aaa;}' +
    '#azu-gate-error{font-size:0.75rem;color:#2339FF;margin-top:14px;min-height:1em;opacity:0;transition:opacity 0.2s;}' +
    '#azu-gate-error.visible{opacity:1;}';
  document.head.appendChild(style);

  function init() {
    var overlay = document.createElement('div');
    overlay.id = 'azu-gate';
    overlay.innerHTML =
      '<div id="azu-gate-box">' +
      '<h1>AZÜ</h1>' +
      '<input id="azu-gate-input" type="password" placeholder="Password" autocomplete="current-password" />' +
      '<div id="azu-gate-error">Incorrect password</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = document.getElementById('azu-gate-input');
    var error = document.getElementById('azu-gate-error');

    input.focus();

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') check();
      error.classList.remove('visible');
    });

    function check() {
      if (input.value === PASSWORD) {
        sessionStorage.setItem(KEY, '1');
        overlay.parentNode.removeChild(overlay);
        style.parentNode.removeChild(style);
      } else {
        error.classList.add('visible');
        input.value = '';
        input.focus();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
