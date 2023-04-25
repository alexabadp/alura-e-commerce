document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
}

function scrollNav() {
  const consola = document.querySelector(".btn-productos");

  consola.addEventListener("click", function (e) {
    e.preventDefault();
    const scroll = e.target.attibutes.href.value;
    const seccion = document.querySelector(scroll);
    seccion.scrollIntoView({ behavior: "smoth" });
  });
}
