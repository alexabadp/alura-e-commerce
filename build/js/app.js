function iniciarApp(){scrollNav()}function scrollNav(){const o=document.querySelector(".btn-productos");console.log("reconoce la clase",o),o.addEventListener("click",(function(o){o.preventDefault(),console.log("entro a la funcion"),console.log(o);const e=o.target.attributes.href.value;console.log(e);document.querySelector(e).scrollIntoView({behavior:"smooth"})}))}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map