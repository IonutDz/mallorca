multilineString =
  '<div class=" bg-dark">'+
  '<a href="/index.html" class="d-flex flex-row nowrap text-decoration-none">'+
  '<img style="height: 50px;" class="" src="/images/logo_mallorca.png">'+
  '<h1 class="text-light ">Mallorca</h1>'+
  '</a>'+
  '</div>'+
  '<nav class="d-flex flex-row bg-dark">'+
  '<ul class="nav justify-content-center d-flex flex-column flex-lg-row flex-md-row align-content-center col-12">'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/comida.html">Comida</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/pagina2.html">Actividades</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/menu3.html">Menu3</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/formulario.html">Reserva</a>'+
  '</li>'+
  '</ul>'+
  '</nav>';


document.body.insertAdjacentHTML("beforebegin", multilineString);
//document.write(multilineString);

var actividades = [
  "Visita a las Cuevas del Hams",
  "Avistamiento de delfines",
  "Crucero en Catamarán",
  "Basílica de Santa María",
  "Castillo de Bellver",
  "Puerto de Sóller",
  "La Cartuja de Valldemossa",
  "Sierra de Tramontana"
];

document.addEventListener("DOMContentLoaded", function () {
  var boton = document.querySelector(".btn-pulsar"); // Selecciona el botón por su clase "btn-pulsar"
  boton.addEventListener("click", function () {
      var actividadRandom = actividades[Math.floor(Math.random() * actividades.length)];
      alert("Actividad seleccionada: " + actividadRandom);
  });
});






