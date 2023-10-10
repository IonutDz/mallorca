var ruta;
var texto;

var inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
    input.addEventListener("click", function() {

        switch(this.value){
            case "cuevas de hams":
               ruta='/images/cuevas del hams.jpg';
               texto='Cuevas de hans';
            break;
                
            case "delfines":
                ruta='/images/delfines.jpg';
                texto='Avistamiento de delfines';
            break;
    
            case "crucero en catamarán":
                ruta='/images/catamarán.jpg';
                texto='Crucero en catamarán';
            break;
    
            case "santa maría":
                ruta='/images/santa_maria.jpg';
                texto='Catedrall de santa María';
            break;
    
            case "bellver":
                ruta='/images/bellver.jpg';
                texto='Castillo de Bellver';
            break;
    
            case "Sóller":
                ruta='/images/Sóller.jpg';
                texto='Ferrocarril de Sóller';
            break;
    
            case "valldemosa":
                ruta='/images/valldemosa.jpg';
                texto='Valldemosa';
            break;
    
            case "tramontana":
                ruta='/images/Tramontana.jpg';
                texto='Sierra de Tramontana';
            break;
    
        }

        multilineString= '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
        '<meta http-equiv=”Content-Type” content=”text/html; charset=UTF-8″ />'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Mallorca</title>'+
        '<link rel="shortcut icon" href="/images/logo_mallorca.png" type="image/x-icon" />'+
        '<link href="/css/bootstrap.min.css" rel="stylesheet">'+
        '<link href="/css/style.css" rel="stylesheet">'+
        '</head>'+
        '<body>'+
        '<!-- navbar-->'+
        '<script src="/js/menu.js"></script>'+
        '<!-- navbar-->'+
        '<img src="'+ruta+'" style="height: 200px;">'+
        '<h1>'+texto+'</h1>'+
        '<!--footer-->'+
        '<script src="/js/footer.js"></script>'+
        '<!--footer-->'+
        '<script src="/js/actividades.js" type="text/javascript"></script>'+
        '<script src="/js/bootstrap.bundle.min.js"></script>'+
        '</body>'+
        '</html>';

    var ventana=window.open();
    ventana.document.write(multilineString);
    });
});
/*
document.querySelectorAll('input').addEventListener ("click", function() {
    
    console.log("Messi calvo");

    switch(this.value){
        case "cuevas de hams":
           ruta='/images/cuevas del hams.jpg';
           texto='Cuevas de hans';
        break;
            
        case "delfines":
            ruta='/images/delfines.jpg';
            texto='Avistamiento de delfines';
        break;

        case "crucero en catamarán":
            ruta='/images/catamarán.jpg';
            texto='Crucero en catamarán';
        break;

        case "santa maría":
            ruta='/images/santa_maria.jpg';
            texto='Catedrall de santa María';
        break;

        case "bellver":
            ruta='/images/bellver.jpg';
            texto='Castillo de Bellver';
        break;

        case "Sóller":
            ruta='/images/Sóller.jpg';
            texto='Ferrocarril de Sóller';
        break;

        case "valldemosa":
            ruta='/images/valldemosa.jpg';
            texto='Valldemosa';
        break;

        case "tramontana":
            ruta='/images/Tramontana.jpg';
            texto='Sierra de Tramontana';
        break;

    }

    multilineString= '<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
        '<meta http-equiv=”Content-Type” content=”text/html; charset=UTF-8″ />'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Mallorca</title>'+
        '<link rel="shortcut icon" href="/images/logo_mallorca.png" type="image/x-icon" />'+
        '<link href="/css/bootstrap.min.css" rel="stylesheet">'+
        '<link href="/css/style.css" rel="stylesheet">'+
    '</head>'+
    '<body>'+
        '<!-- navbar-->'+
        '<script src="/js/menu.js"></script>'+
        '<!-- navbar-->'+
        '<img src="'+ruta+'" style="height: 200px;">'+
        '<h1>'+texto+'</h1>'+
        '<!--footer-->'+
        '<script src="/js/footer.js"></script>'+
        '<!--footer-->'+
        '<script src="/js/actividades.js" type="text/javascript"></script>'+
        '<script src="/js/bootstrap.bundle.min.js"></script>'+
    '</body>'+
'</html>';

    var ventana=window.open();
    ventana.document.write(multilineString);
   
});*/