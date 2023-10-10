var ruta;
var texto;

function getData(id) {
    
    

    switch(id){
        case 1:
            multilineString= '<script src="/js/menu.js"></script>'+
                             '<img src="/images/cuevas del hams.jpg">'+
                             '<h1>"Hans"</h1>'+
                             '<script src="/js/footer.js"></script>';
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
    ventana.document.body.insertAdjacentHTML("beforebegin", multilineString);
}