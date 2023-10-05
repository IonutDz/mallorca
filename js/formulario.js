selecionarAsunto = document.getElementById("selectasunto");
seleccionarActividad = document.getElementById("selectactividad");
seleccionarNombre = document.getElementById("selectnombre");
seleccionEmail = document.getElementById("selectcorreo");
seleccionEmailRepe = document.getElementById("selectrepecorreo");
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

    if (seleccionEmailRepe.value.trim() === "") {
        alert('Debe ingresar el mismo correo electronico')
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

seleccionEmail = document.getElementById("selectcorreo");
seleccionEmailRepe = document.getElementById("selectrepecorreo");

seleccionEmail.addEventListener("input", function () {
    if (seleccionEmail.value.trim() !== '') {
        seleccionEmailRepe.disabled = false; // Habilitar el campo de correo repetido
    } else {
        seleccionEmailRepe.disabled = true; // Deshabilitar el campo de correo repetido
    }
});

const correo1 = document.getElementById("selectcorreo");
const correo2 = document.getElementById("selectrepecorreo");
selectrepecorreo.addEventListener("input", correoigual);
function correoigual() {
    if (correo1.value !== correo2.value) {
        correo2.setCustomValidity("Las claves no son iguales");
    } else {
        correo2.setCustomValidity('');
    }
}
