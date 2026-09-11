(function () {
  var KEY = "site-theme";
  var CLASS = "aero-theme";

  function apply(theme) {
    document.body.classList.toggle(CLASS, theme === "aero");
  }

  var saved = localStorage.getItem(KEY);
  if (saved) apply(saved);

  document.addEventListener("DOMContentLoaded", function () {
    if (saved) apply(saved);
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isAero = document.body.classList.toggle(CLASS);
      localStorage.setItem(KEY, isAero ? "aero" : "default");
    });
  });
})();