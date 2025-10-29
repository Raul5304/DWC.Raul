// let inventario = [
//     {nombre: "Teclado", precio: 25, stock: 10},
//     {nombre: "Ratón", precio: 10, stock: 8}
// ];

// inventario.forEach(p =>{
//     console.log(`${p.nombre.padEnd(10)} | ${String(p.precio).padStart(5)}€ | Stock: ${p.stock}`);
// });

function crearProducto(nombre, precio, stock){
    return (nombre, precio, stock);
}

let inventario = [
    crearProducto("Teclado", 25, 10),
    crearProducto("Ratón", 15, 8),
    crearProducto("Pantalla", 150, 5),
    crearProducto("USB Drive", 10, 30)
];

function mostrarInventario(){
    if (inventario.length === 0){
        console.log("El inventario está vacio, añade algunos productos");
    }else{
        inventario.forEach(p => console.log(`${p.nombre.padEnd(10)} | ${String(p.precio).padStart(5)} | ${p.stock} unidades`));
    }
};

function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto");
    let precio = parseFloat(prompt("Introduce el precio del producto"));
    let stock = parseInt(prompt("¿Cuánto stock hay?"));
    inventario.push(crearProducto(nombre, precio, stock));
    console.log(`Producto ${nombre} añadido correctamente.`);
}

function buscarProducto(){
    let nombre = prompt("Introduce el nombre del producto que quieres buscar.")
    let producto = inventario.find(p => p.nombre === nombre);
    if (producto){
        console.log(`Encontrado -> ${producto.nombre} | ${producto.precio} | ${producto.stock} unidades`);
    }else{
        console.log("Producto no encontrado, añádelo, reintentalo o busca otro.")
    };
};

function filtrarProductos(){
    let caros = inventario.filter(p => p.precio > 20);
    caros.forEach(p => console.log(`${p.nombre.padEnd(10)} | ${String(p.precio).padStart(5)} | ${p.stock} unidades`));
}

function calcularMedia(){
    let media = inventario.reduce((ac,p) => ac + p.precio, 0) / inventario.length;
    console.log("La media de los precios es" + media.toFixed(2) + "€");
}

let opcion = "";
while (opcion != "6"){
    opcion = prompt(`GESTOR DE INVENTARIO
        1. Mostrar inventario
        2. Agregar producto
        3. Buscar producto
        4. Filtrar por precio < 20€
        5. Calcular la media de precios
        6. Salir`);

    switch(opcion){
        case "1": //Mostrar inventario
            mostrarInventario(inventario);
            break;
        case "2": // Agregar producto
            agregarProducto(inventario);
            break;
        case "3": // Buscar producto
            buscarProducto(inventario);
            break;
        case "4": // Filtar por precio
            filtrarProductos(inventario);
            break;
        case "5": // Calcular media de precios
            calcularMedia(inventario);
            break;
        case "6": // Salir
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Introduce una de las opciones anteriores.");
            break;
    };
};