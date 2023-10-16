var multilineString = `
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a href="/index.html" class="navbar-brand d-flex align-items-center text-light">
            <img style="height: 50px; width: 50px;" src="/images/logo_mallorca.png" alt="logo" loading="eager">
            <span class="my-0" id="titulo">Mallorca</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link text-light" href="/index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="/html/comida.html">Comida</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-light" href="/html/hoteles.html">Dormir</a>
            </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="/html/pagina2.html">Actividades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="/html/reserva.html">Descubre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="/html/formulario.html">Reserva</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
`;

document.body.insertAdjacentHTML("beforebegin", multilineString);
