multilineString =
  '<div class=" bg-dark">'+
  '<a href="/index.html" class="d-flex flex-row nowrap text-decoration-none">'+
  '<img style="height: 50px;" class="" src="/images/logo_mallorca.png">'+
  '<h1 class="text-light ">Mallorca</h1>'+
  '</a>'+
  '</div>'+
  '<nav class="d-flex flex-row bg-dark">'+
  '<ul class="nav justify-content-center d-flex flex-column flex-lg-row flex-md-row align-content-center col-12">'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/comida.html">COMIDA</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/pagina2.html">ACTIVIDATES</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/menu3.html">DESCUBRE</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/formulario.html">RESERVA</a>'+
  '</li>'+
  '</ul>'+
  '</nav>';


document.body.insertAdjacentHTML("beforebegin", multilineString);
//document.write(multilineString);

