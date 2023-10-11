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
        crearActividad
    });
  });

