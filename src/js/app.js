document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
}

function scrollNav() {
  const enlaces = document.querySelector(".btn-productos");
  console.log("reconoce la clase", enlaces);
  enlaces.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("entro a la funcion");
    console.log(e);
    const seccionScroll = e.target.attributes.href.value;
    console.log(seccionScroll);
    const seccion = document.querySelector(seccionScroll);
    seccion.scrollIntoView({ behavior: "smooth" });
  });
}
