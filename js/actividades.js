var ruta;
var texto;
var inputs = document.querySelectorAll('input');

const actividades = {
    "cuevas de hams": {
        ruta: '/images/cuevas del hams.jpg',
        texto: 'Cuevas de hans',
        //parrafos: 'Las cuevas dels Hams son un sistema de cuevas localizadas en la costa este de la isla española de Mallorca, en las Baleares. Se encuentran situadas en el término municipal de Manacor, a 1 km al oeste de la localidad de Porto Cristo.'
    },
    "delfines": {
        ruta: '/images/delfines.jpg',
        texto: 'Avistamiento de delfines'
    },
    "crucero en catamarán": {
        ruta: '/images/catamarán.jpg',
        texto: 'Crucero en catamarán'
    },
    "santa maría": {
        ruta: '/images/santa_maria.jpg',
        texto: 'Catedral de Santa María'
    },
    "bellver": {
        ruta: '/images/bellver.jpg',
        texto: 'Castillo de Bellver'
    },
    "Sóller": {
        ruta: '/images/Sóller.jpg',
        texto: 'Ferrocarril de Sóller'
    },
    "valldemosa": {
        ruta: '/images/valldemosa.jpg',
        texto: 'Valldemosa'
    },
    "tramontana": {
        ruta: '/images/Tramontana.jpg',
        texto: 'Sierra de Tramontana'
    }
};




inputs.forEach(function (input) {
    input.addEventListener("click", function () {
        crearActividad(input.value);
    });
});


function crearActividad(valor) {
    const actividad = actividades[valor];
    if (actividades[valor]) {
        console.log(actividad);
        ruta = actividad.ruta;
        texto = actividad.texto;
        parrafos = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat tortor, sollicitudin sit amet eleifend sit amet, bibendum vel eros. Morbi sed nibh sed est finibus mollis a eget purus. Maecenas commodo placerat odio, eget dignissim ipsum faucibus id. Nam tristique condimentum urna, id accumsan lectus pretium ac. Curabitur sed mollis dolor. Aenean elit sapien, varius vehicula nisl a, mollis tempus arcu. Nullam sit amet dolor sem. Etiam ut sem lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in felis eget orci eleifend blandit. Duis varius arcu nec lacus eleifend, et vestibulum tortor gravida.";
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

var inputs = document.querySelectorAll('input');
function contarInputs() {
    var cantidadDeInputs = inputs.length;
    console.log('Número de inputs en la página: ' + cantidadDeInputs);
}

