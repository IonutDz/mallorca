var ruta;
var texto;
var inputs = document.querySelectorAll('input');
const actividades = {
    "cuevas de hams": {
        ruta: '/images/cuevas del hams.jpg',
        texto: 'Cuevas de Hans',
        parrafos: 'Las Cuevas dels Hams son un sistema de cuevas localizadas en la costa este de la isla española de Mallorca, en las Baleares. Se encuentran situadas en el término municipal de Manacor, a 1 km al oeste de la localidad de Porto Cristo. Estas cuevas ofrecen una experiencia única para los visitantes, con impresionantes formaciones geológicas y un viaje a la historia natural de la isla. El recorrido por las cuevas te llevará a través de pasajes subterráneos y te permitirá admirar las estalactitas y estalagmitas que se han formado a lo largo de miles de años.'
    },
    "delfines": {
        ruta: '/images/delfines.jpg',
        texto: 'Avistamiento de Delfines',
        parrafos: 'Disfruta de una emocionante experiencia de avistamiento de delfines en las aguas cristalinas de Mallorca. Podrás observar a estos magníficos mamíferos marinos en su hábitat natural, lo que te brindará una perspectiva única de la vida marina en la costa de la isla. Durante el recorrido, tendrás la oportunidad de aprender sobre el comportamiento de los delfines y su importancia en el ecosistema marino.'
    },
    "crucero en catamarán": {
        ruta: '/images/catamarán.jpg',
        texto: 'Crucero en Catamarán',
        parrafos: 'Embárcate en un emocionante crucero en catamarán alrededor de Mallorca. Este viaje te permitirá explorar la belleza de la costa desde una perspectiva diferente. Relájate en la cubierta del catamarán mientras disfrutas del sol y el mar. Durante el crucero, podrás disfrutar de refrescos y aperitivos a bordo y sumergirte en las aguas cristalinas para nadar y hacer esnórquel.'
    },
    "santa maría": {
        ruta: '/images/santa_maria.jpg',
        texto: 'Catedral de Santa María',
        parrafos: 'La Catedral de Santa María, también conocida como La Seu, es una joya arquitectónica en el corazón de Palma de Mallorca. Esta majestuosa catedral gótica es conocida por su impresionante arquitectura y su hermoso rosetón. Una visita obligada para los amantes de la historia y la arquitectura. La catedral ha sido testigo de eventos históricos a lo largo de los siglos y alberga numerosas obras de arte religioso.'
    },
    "bellver": {
        ruta: '/images/bellver.jpg',
        texto: 'Castillo de Bellver',
        parrafos: 'El Castillo de Bellver es un castillo circular en las afueras de Palma de Mallorca. Ofrece vistas panorámicas de la ciudad y sus alrededores. La arquitectura única del castillo y su historia lo convierten en un lugar fascinante para explorar. El castillo ha desempeñado un papel importante en la historia de Mallorca y ha sido utilizado para diversos fines a lo largo de los años.'
    },
    "Sóller": {
        ruta: '/images/Sóller.jpg',
        texto: 'Ferrocarril de Sóller',
        parrafos: 'El Ferrocarril de Sóller es una atracción histórica que te llevará a un viaje en el tiempo. Disfruta de un pintoresco viaje en tren a través de la Sierra de Tramontana hasta la encantadora ciudad de Sóller. Durante el viaje, podrás disfrutar de hermosos paisajes naturales y experimentar la nostalgia de los trenes antiguos.'
    },
    "valldemosa": {
        ruta: '/images/valldemosa.jpg',
        texto: 'Valldemosa',
        parrafos: 'Valldemosa es un hermoso pueblo enclavado en la Sierra de Tramontana. Con sus calles adoquinadas y arquitectura tradicional, es un lugar perfecto para explorar la cultura mallorquina. También es famoso por el monasterio de Real Cartuja, donde el compositor Frédéric Chopin pasó el invierno con la escritora George Sand. El pueblo ofrece encantadoras vistas de la montaña y una atmósfera relajada.'
    },
    "tramontana": {
        ruta: '/images/Tramontana.jpg',
        texto: 'Sierra de Tramontana',
        parrafos: 'La Sierra de Tramontana es una cadena montañosa en el noroeste de Mallorca que ha sido declarada Patrimonio de la Humanidad por la UNESCO. Ofrece impresionantes paisajes naturales, senderos para practicar senderismo y un ambiente tranquilo que atrae a los amantes de la naturaleza. Explora sus pintorescos pueblos de montaña y disfruta de la tranquilidad de la región.'
    }
};





inputs.forEach(function (input) {
    input.addEventListener("click", function () {
        crearActividad(input.value);
    });
});

/*
function crearActividad(valor) {
    const actividad = actividades[valor];
    if (actividades[valor]) {
        console.log(actividad);
        ruta = actividad.ruta;
        texto = actividad.texto;
        parrafos = actividad.parrafos;
    }
    multilineString = '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta http-equiv=”Content-Type” content=”text/html; charset=UTF-8″ />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<title>Mallorca</title>' +
        '<link rel="shortcut icon" href="/images/logo_mallorca.png" type="image/x-icon" />' +
        '<link href="/css/bootstrap.min.css" rel="stylesheet">' +
        '<link href="/css/style.css" rel="stylesheet">' +
        '</head>' +
        '<body>' +
        '<script src="/js/menu.js"></script>' +
        '<div class="container d-flex flex-column py-5 align-items-center">' +
        '<img src="' + ruta + '" style="height: 200px;">' +
        '<h1 class="mt-3" ">' + texto + '</h1>' +
        '<p>' + parrafos + '</p>' +
        '</div>' +
        '<script src="/js/footer.js"></script>' +
        '<script src="/js/actividades.js" type="text/javascript"></script>' +
        '<script src="/js/bootstrap.bundle.min.js"></script>' +
        '</body>' +
        '</html>';

    var ventana = window.open();
    ventana.document.write(multilineString);
}
*/

function crearActividad(valor) {
    const actividad = actividades[valor];
    if (actividad) {
        ruta = actividad.ruta;
        texto = actividad.texto;
        parrafos = actividad.parrafos;

        // Crear un div para el modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content p-2">
            <h1 style="font-size: 1.5rem; margin: 10px 0;">${texto}</h1>
                <span class="close-modal" id="closeModal">&times;</span>
                <img src="${ruta}" alt="Imagen" style="max-width: 100%;">
               
                <p class="mt-2" style="font-size: 1rem;">${parrafos}</p>
            </div>
        `;

        // Aplicar estilos al modal
        modal.style.display = "flex";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";

        // Aplicar estilos al contenido del modal
        const modalContent = modal.querySelector(".modal-content");
        modalContent.style.backgroundColor = "#fff";
        modalContent.style.maxWidth = "600px";
        modalContent.style.padding = "20px";
        modalContent.style.textAlign = "center";
        modalContent.style.borderRadius = "5px";
        modalContent.style.position = "relative"; // Para que el contenido sea relativo

        // Aplicar estilos al botón de cierre
        const closeModalButton = modal.querySelector(".close-modal");
        closeModalButton.style.position = "absolute";
        closeModalButton.style.top = "0"; // Está en la esquina superior
        closeModalButton.style.right = "0"; // Está en la esquina derecha
        closeModalButton.style.fontSize = "32px"; // Aumentamos el tamaño del botón
        closeModalButton.style.color = "#ff0000"; // Cambiamos el color del botón a rojo
        closeModalButton.style.cursor = "pointer";

        // Agregar el modal al cuerpo del documento
        document.body.appendChild(modal);

        // Cerrar el modal cuando se hace clic en el botón de cierre
        closeModalButton.addEventListener("click", function () {
            modal.style.display = "none";
            modal.remove();
        });

        // Evitar que el clic en el modal cierre el modal
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                modal.remove();
            }
        });
    }
}



