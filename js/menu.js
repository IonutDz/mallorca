multilineString =
  '<div class="d-flex flex-row nowrap bg-dark">'+
  '<img style="height: 50px;" class="" src="/images/logo_mallorca.png">'+
  '<h1 class="text-light">Mallorca</h1>'+
  '</div>'+
  '<nav class="d-flex flex-row bg-dark">'+
  '<ul class="nav justify-content-center d-flex flex-column flex-lg-row flex-md-row align-content-center col-11">'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="html/pagina1.html">pagina 1</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="#">Menu 2</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="#">Menu 3</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="html/formulario.html">formulario</a>'+
  '</li>'+
  '</ul>'+
  '<div class="col-1 d-flex justify-content-center">'+
  '<button type="button" class="btn btn-light">botoia</button>'+
  '</div>'+
  '</nav>';


document.body.insertAdjacentHTML("beforebegin", multilineString);
//document.write(multilineString);






