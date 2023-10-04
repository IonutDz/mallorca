selecionarAsunto = document.getElementById("selectasunto");
actividadSeleccionar = document.getElementById("exampleInputPassword1")

function validarFormulario() {
    let camposValidos = true;

    if (selecionarAsunto.value.trim() === "") {
        alert("El asunto no puede estar vacio");
        camposValidos = false;
    }

    if(actividadSeleccionar.value.trim() === ""){
        alert("Debe seleccionar una actividad");
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

