function crearProducto(nombre, precio, stock){
    return {nombre, precio, stock};
}

let inventario = [
    crearProducto("Ratón", 15, 8),
    crearProducto("Teclado", 25, 10),
    crearProducto("Monitor", 150, 5),
    crearProducto("USB", 10, 25)
];

function mostrarInventario(){
    if (inventario.length === 0){
        console.log("El inventario está vacio, añade algunos productos");
    }else{
        inventario.forEach(p => console.log(`${p.nombre.padEnd(10)} | ${String(p.precio).padStart(5)} | ${p.stock} unidades`));
    }
};

function buscarProducto(){ // Acudir a index.html para probar
    let nombre = prompt("Introduce el nombre del producto que quieres buscar.")
    let producto = inventario.find(p => p.nombre === nombre);
    if (producto){
        console.log(`Encontrado -> ${producto.nombre} | ${producto.precio} | ${producto.stock} unidades`);
    }else{
        console.log("Producto no encontrado, añádelo, reintentalo o busca otro.")
    };
};

function filtrarProductos(){
    let bajoStock = inventario.filter(p => p.stock < 10);
    bajoStock.forEach(p => console.log(`Bajo sock en: ${p.nombre.padEnd(10)} |  ${p.stock} unidades`));
}

function valorTotal(){
    let valor = inventario.reduce((ac,p) => ac + p.precio, 0);
    console.log("La media de los precios es " + valor.toFixed(2) + "€");
}

function productosOrdenados(){
    let ordenado = inventario.sort((a,b) => a.precio - b.precio);
    console.log("Productos ordenados por precio:")
    ordenado.forEach(p => console.log(`${p.nombre.padEnd(10)} | ${String(p.precio).padStart(5)} | ${p.stock} unidades`));
}
function actualizarStock(nombre2, cantidad){
    let buscar = inventario.filter(p => p.nombre === nombre2);
    buscar.forEach(p => console.log(`Has sumado ${cantidad} al producto ${p.nombre}; stock actual: ${cantidad + p.stock}`))
}


mostrarInventario(inventario);
filtrarProductos(inventario);
valorTotal(inventario);
productosOrdenados(inventario);
actualizarStock("Teclado", 5);