/*multilineString =
  '<div class="container">'+
  '<footer class="py-3 my-4 d-lg-block d-md-block d-none">'+
  '<ul class="nav justify-content-center border-bottom pb-3 mb-3">'+
  '<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>'+
  '<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>'+
  '<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>'+
  '<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>'+
  '</ul>'+
  '<p class="text-center text-muted">© 2023 Mallorca</p>'+
  '</footer>'+
  '</div>'+
  '<div class="accordion d-block d-lg-none d-md-none">'+
  '<div class="accordion-item">'+
  '<h2 class="accordion-header" id="headingOne">'+
  '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
  'Menu #1'+
  '</button>'+
  '</h2>'+
  '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
  '<div class="accordion-body">'+
  '<strong>messi calvo</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.'+
  '</div>'+
  '</div>'+
  '</div>'+
  '<div class="accordion-item">'+
  '<h2 class="accordion-header" id="headingTwo">'+
  '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">'+
  'Menu #2'+
  '</button>'+
  '</h2>'+
  '<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
  '<div class="accordion-body">'+
  '<strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.'+
  '</div>'+
  '</div>'+
  '</div>'+
  '<div class="accordion-item">'+
  '<h2 class="accordion-header" id="headingThree">'+
  '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">'+
  'Menu #3'+
  '</button>'+
  '</h2>'+
  '<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">'+
  '<div class="accordion-body">'+
  '<strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>';



document.body.insertAdjacentHTML("afterend", multilineString);
//document.write(multilineString);
*/


// Crear el elemento del pie de página
const footer = document.createElement('footer');
footer.style.backgroundColor = '#C9C9C9';
footer.className = "footer-bs mt-auto w-100";
// Crear el contenedor interior
const containerInner = document.createElement('div');
containerInner.className = 'container p-4';

// Crear la fila
const row = document.createElement('div');
row.className = 'row';
// Columan para imagen
const colimg= document.createElement('div');
colimg.className = " col-lg-2 col-md-3";
const img = document.createElement('img');
img.src = '/images/logo_mallorca.png';
img.style.height = '150px';
colimg.appendChild(img);
// Columna 1
const col1 = document.createElement('div');
col1.className = 'col-lg-4 col-md-9 mb-4';

const h5Col1 = document.createElement('h5');
h5Col1.className = 'mb-3 text-dark';
h5Col1.textContent = 'Mallorca';

const p1 = document.createElement('p');
p1.textContent = 'Deliciosamente amable y dotada de un punto de salvaje majestuosidad, Mallorca es una isla con un color especial.';

col1.appendChild(h5Col1);
col1.appendChild(p1);

// Columna 2
const col2 = document.createElement('div');
col2.className = 'col-lg-3 col-md-6 mb-4';

const h5Col2 = document.createElement('h5');
h5Col2.className = 'mb-3 text-dark';
h5Col2.textContent = 'Contactanos en:';

const ul = document.createElement('ul');
ul.className = 'list-unstyled mb-0';

const links = ['Facebook', 'Instagram', 'Twitter', 'MySpace'];

links.forEach(linkText => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#!';
  a.textContent = linkText;
  a.style.color = '#2C2B2B';
  li.appendChild(a);
  ul.appendChild(li);
});

col2.appendChild(h5Col2);
col2.appendChild(ul);

// Columna 3
const col3 = document.createElement('div');
col3.className = 'col-lg-3 col-md-6 mb-4';

const h5Col3 = document.createElement('h5');
h5Col3.className = 'mb-1 text-dark';
h5Col3.textContent = 'Horario de contacto';

const table = document.createElement('table');
table.className = 'table';
table.style.borderColor = '#666';

const tbody = document.createElement('tbody');

const hours = [
  { day: 'Mon - Fri:', time: '08:00 - 22:00' },
  { day: 'Sat - Sun:', time: '08:00 - 23:30' }
];

hours.forEach(item => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.textContent = item.day;
  const td2 = document.createElement('td');
  td2.textContent = item.time;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
});

const tel = document.createElement('a');
const telnum = document.createElement('a');
tel.className = 'mb-1 text-dark text-decoration-none text-center';
tel.textContent = 'Teléfono: ';
telnum.className = 'text-dark text-reset text-decoration-underline text-center';
telnum.textContent = "666666666"
telnum.href = 'tel: +34666666666';
tel.appendChild(telnum);

table.appendChild(tbody);
col3.appendChild(h5Col3);
col3.appendChild(table);
col3.appendChild(tel);

// Agregar columnas a la fila
row.appendChild(colimg);
row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);

// Agregar fila al contenedor interior
containerInner.appendChild(row);

// Agregar contenedor interior al pie de página
footer.appendChild(containerInner);


// Agregar contenedor principal al documento
document.body.appendChild(footer);





