const nombreProducto = document.getElementById('producto');
const cantidadProducto = document.getElementById('cantidad');
const precioProducto = document.getElementById('precio');
const listaProducto = document.getElementById('lista');

function añadirProducto(){
    let valorNombreProducto = nombreProducto.value;
    let valorCantidadProducto = cantidadProducto.value;
    let valorPrecioProducto = precioProducto.value;

    let li = document.createElement("li");
    li.textContent = `${valorNombreProducto} -- ${valorCantidadProducto} -- ${valorPrecioProducto}`;
    listaProducto.appendChild(li);
}
document.getElementById('enviar').addEventListener("click", añadirProducto());