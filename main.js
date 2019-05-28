// Tenemos un listado de productos

var productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]


// Seleccionamos el listado apenas empezamos, porque
// queremos tener esta variable disponible en todo nuestro codigo
var listado = document.getElementById("lista-de-productos")



// Para mostrarlos, recorremos el listado con un for 
for (let i = 0; i < productos.length; i++) {
  // Creamos un div, le añadimos el nombre y la imagen 
  var div = document.createElement("div")
  div.classList.add("producto")

  var titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre

  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(titulo)
  div.appendChild(imagen)

  // Agregamos el div al listado 
  listado.appendChild(div)
}


var botonDeFiltro = document.querySelector("button")

botonDeFiltro.onclick = function () {

  // primero, recorremos con un while todos los "hijos" del listado
  // y los borramos

  while (listado.firstChild) {
    listado.removeChild(listado.firstChild);
  }

  // despues les toca a uds el resto :)

  //AACA ARRANQUE YO-------------------------------------------------



  var inputDeFiltro = document.querySelector("input");
  var busqueda = inputDeFiltro.value;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].tipo === busqueda || productos[i].color === busqueda) {

      var div = document.createElement("div")
      div.classList.add("producto")


      var titulo = document.createElement("p")
      titulo.classList.add("titulo")
      titulo.textContent = productos[i].nombre

      var imagen = document.createElement("img");
      imagen.setAttribute("src", productos[i].img);

      div.appendChild(titulo)
      div.appendChild(imagen)


      var muestraDiv = document.getElementById("lista-de-productos")
      muestraDiv.appendChild(div)


    } else {

      var nuevoDiv = document.createElement("div")

      var disculpeMensaje = document.getElementById("lista-de-productos")
      disculpeMensaje.appendChild(nuevoDiv)

      var disculpe = document.createElement("p");
      disculpe.textContent = ("Disculpe, producto no disponible.");

      disculpeMensaje.appendChild(disculpe)



      // return ("Disculpe, no hay resultados")}


    }
  }
}

  // Tarea: 
  // Si el usuario escribe "zapato", mostrar los zapatos
  // Si el usuario escribe "bota", mostrar las botas
  // Si el usuario escribe "negro", mostrar el zapato y la bota negros
  // Si el usuario escribe "azul", mostrar el zapato y la bota azules


  // Para puntos extra:
  // Dejar la pagina mas linda con CSS 