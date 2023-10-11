multilineString =
  '<div class=" bg-dark d-flex flex-column flex-lg-row align-items-center">'+
  '<a href="/index.html" class="d-flex flex-row nowrap text-decoration-none col-lg-2 col-12 justify-content-center">'+
  '<img style="height: 50px;" class="" src="/images/logo_mallorca.png">'+
  '<p class="text-light" id="titulo">Mallorca</p>'+
  '</a>'+
  '<ul class="nav justify-content-center d-flex flex-column flex-lg-row align-content-center col-lg-9 col-12">'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/comida.html">COMIDA</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link text-light" href="/html/pagina2.html">ACTIVIDADES</a>'+
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

