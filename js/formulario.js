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

    if(seleccionarActividad.value.trim() === ""){
        alert('Debe seleccionar una actividad');
        camposValidos = false;
    }

    if(seleccionarNombre.value.trim() === ""){
        alert('Debe ingresar su nombre');
        camposValidos = false;
    }

    if(seleccionEmail.value.trim() === ""){
        alert('Debe ingresar un correo electronico')
        camposValidos = false;
    }

    if(seleccionEmailRepe.value.trim() === ""){
        alert('Debe ingresar el mismo correo electronico')
        camposValidos = false;
    }

    if(seleccionAdjuntar.value.trim() === ""){
        alert('Debe adjuntar algo')
        camposValidos = false;
    }

    if(!seleccionCheckbox.checked){
        alert('Debe aceptar los términos y la política de privacidad');
        camposValidos = false;
    }




    return camposValidos;
}

document.getElementById("fincontacto").addEventListener("submit" , function(event){
    if  (!validarFormulario()) {
        event.preventDefault();
    } else{
        alert("Todo Correcto")
    }
});

