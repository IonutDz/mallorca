var ruta;
var texto;

function getData(id) {
    
    
    

    switch(id){
        case 1:
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
            '<body class="d-flex flex-column min-vh-100 align-items-center">'+
                '<!-- navbar-->'+
                '<script src="/js/menu.js"></script>'+
                '<!-- navbar-->'+
                '<img src="/images/cuevas del hams.jpg" class="h-25">'+
                '<h1>"Hans"</h1>'+
                '<!--footer-->'+
                '<script src="/js/footer.js"></script>'+
                '<!--footer-->'+
                '<script src="/js/actividades.js" type="text/javascript"></script>'+
                '<script src="/js/bootstrap.bundle.min.js"></script>'+
            '</body>'+
        '</html>';
        break;
            
        case 2:
            multilineString= '<img src="/images/delfines.jpg">'+
                             '<h1>"Avistamiento de delfines"</h1>';
        break;

        case 3:
            multilineString= '<img src="/images/catamarán.jpg">'+
                             '<h1>"Crucero en catamarán"</h1>';
        break;


    }


    var ventana=window.open("", "prueba");
    ventana.document.write(multilineString);

    
}