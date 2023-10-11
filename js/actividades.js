var ruta;
var texto;
var inputs = document.querySelectorAll('input');

const actividades = {
    "cuevas de hams": {
        ruta: '/images/cuevas del hams.jpg',
        texto: 'Cuevas de hans'
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
        '<!-- navbar-->' +
        '<script src="/js/menu.js"></script>' +
        '<!-- navbar-->' +
        '<img src="' + ruta + '" style="height: 200px;">' +
        '<h1>' + texto + '</h1>' +
        '<!--footer-->' +
        '<script src="/js/footer.js"></script>' +
        '<!--footer-->' +
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

