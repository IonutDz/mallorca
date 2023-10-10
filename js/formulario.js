selecionarAsunto = document.getElementById("selectasunto");
seleccionarActividad = document.getElementById("selectactividad");
seleccionarNombre = document.getElementById("selectnombre");
seleccionEmail = document.getElementById("selectcorreo"); // Cambia "selectcorreo" aquí
seleccionApellido = document.getElementById("selectapellido");
seleccionCampoAlto = document.getElementById("selectcampoalto");
seleccionAdjuntar = document.getElementById("adjuntarArchivo");
seleccionCheckbox = document.getElementById("checkbox");


function validarFormulario() {
    let camposValidos = true;

    if (selecionarAsunto.value.trim() === "") {
        alert('El asunto no puede estar vacio');
        camposValidos = false;
    }

    if (seleccionarActividad.value.trim() === "") {
        alert('Debe seleccionar una actividad');
        camposValidos = false;
    }

    if (seleccionarNombre.value.trim() === "") {
        alert('Debe ingresar su nombre');
        camposValidos = false;
    }

    if (seleccionEmail.value.trim() === "") {
        alert('Debe ingresar un correo electronico')
        camposValidos = false;
    }

    if (seleccionApellido.value.trim() === "") {
        alert('Debe ingresar un apellido')
        camposValidos = false;
    }

    if (!validarCorreoElectronico()) {
        alert("El campo de correo electrónicono no es valido");
        camposValidos = false;
    }

    if (seleccionAdjuntar.value.trim() === "") {
        alert('Debe adjuntar algo')
        camposValidos = false;
    }

    if (!seleccionCheckbox.checked) {
        alert('Debe aceptar los términos y la política de privacidad');
        camposValidos = false;
    }



    return camposValidos;
}

function validarCorreoElectronico() {
    // Verificar si el correo tiene un formato válido (puedes usar una expresión regular)
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(seleccionEmail.value);
}
document.getElementById("fincontacto").addEventListener("submit", function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    } else {
        alert("¡Todo correcto!");

        // Reiniciar el formulario para borrar los datos ingresados
        document.getElementById("fincontacto").reset();
    }
});

seleccionarNombre = document.getElementById("selectnombre");
seleccionApellido = document.getElementById("selectapellido");

seleccionarNombre.addEventListener("input", function () {
    if (seleccionarNombre.value.trim() !== '') {
        seleccionApellido.disabled = false; // Habilitar el campo de correo repetido
    } else {
        seleccionApellido.disabled = true; // Deshabilitar el campo de correo repetido
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var mymap = L.map('map').setView([39.6952634, 3.0175718], 10); // Configura la vista con latitud y longitud de Mallorca

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mymap);

    var marker = L.marker([39.6952634, 3.0175718]).addTo(mymap).bindPopup("Mallorca"); // Añade un marcador en la ubicación de Mallorca y un mensaje emergente
});

