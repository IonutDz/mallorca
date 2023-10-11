
  document.addEventListener("DOMContentLoaded", function () {
    var boton = document.querySelector(".btn-pulsar"); // Selecciona el botón por su clase "btn-pulsar"
    boton.addEventListener("click", function () {
        var actividadKeys = Object.keys(actividades);
        var actividadRandom = Math.floor(Math.random() * actividadKeys.length); // Genera un número aleatorio entre 0 y el número de inputs 
        crearActividad(actividadKeys[actividadRandom]);
    });
  });

