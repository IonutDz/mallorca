// menu3.js
// Primero, carga el archivo actividades.js
var script = document.createElement('script');
script.src = '/js/actividades.js';
document.head.appendChild(script);

// Luego, agrega el código para abrir la ventana emergente al hacer clic en el botón
var boton = document.getElementById("mostrarActividad");

boton.addEventListener("click", function () {
    // Asegúrate de que la variable actividades se haya cargado desde actividades.js
    if (typeof actividades !== "undefined" && actividades.length > 0) {
        // Elegir una actividad al azar
        var actividadRandom = actividades[Math.floor(Math.random() * actividades.length)];

        // Crear una nueva ventana emergente
        var ventanaEmergente = window.open('', '_blank');

        // Crear el contenido HTML para la ventana emergente
        var contenidoHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Actividad Aleatoria</title>
                <link rel="shortcut icon" href="/images/logo_mallorca.png" type="image/x-icon">
                <link href="/css/bootstrap.min.css" rel="stylesheet">
                <link href="/css/style.css" rel="stylesheet">
            </head>
            <body>
                <h1>${actividadRandom.nombre}</h1>
                <img src="${actividadRandom.imagen}" style="height: 200px;">
                <p>${actividadRandom.descripcion}</p>
                <!-- Puedes agregar más detalles o contenido relacionado a la actividad aquí -->
            </body>
            </html>
        `;

        // Escribir el contenido en la ventana emergente
        ventanaEmergente.document.write(contenidoHTML);
    } else {
        // Manejar el caso en el que actividades no se haya cargado correctamente
        alert("No se pudieron cargar las actividades. Por favor, intenta nuevamente.");
    }
});
