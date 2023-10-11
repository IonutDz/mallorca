document.addEventListener("DOMContentLoaded", function () {
    // Array de posibles actividades
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

    var boton = document.querySelector(".btn-pulsar"); // Selecciona el botón por su clase "btn-pulsar"

    boton.addEventListener("click", function () {
        // Elige una actividad al azar
        var actividadRandom = actividades[Math.floor(Math.random() * actividades.length)];

        // Contenido HTML de la nueva ventana emergente
        var ventanaEmergente = window.open('', '_blank', 'width=600,height=400,location=no,toolbar=no,menubar=no');

        var contenidoHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Actividad Aleatoria</title>
            </head>
            <body>
                <h1>Actividad Aleatoria</h1>
                <p>Has seleccionado la siguiente actividad:</p>
                <p>${actividadRandom}</p>
            </body>
            </html>
        `;

        // Escribe el contenido en la ventana emergente
        ventanaEmergente.document.write(contenidoHTML);
    });
});
