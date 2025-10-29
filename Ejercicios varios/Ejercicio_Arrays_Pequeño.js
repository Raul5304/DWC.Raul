/* var frutas = ["Manzana", "Plátano", "Naranja"];

console.log(frutas[1]);

frutas[3] = "Sandía";

frutas[0] = "Melocotón";

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
} */

// var comidasFav = ["Pizza Margarita", "Whopper del Burger King", "Huevo frito", "Triangulos de queso rebozados"];

// for (let i = 0; i < comidasFav.length; i++){
//     console.log(`Comida favorita ${i + 1}: ${comidasFav[i]}`);
// }

// for (let nombre of comidasFav){
//     console.log(nombre.toUpperCase());
// }

// comidasFav.forEach(function(nombre, contar){
//     console.log(`Comida favorita ${contar + 1}: ${nombre}`)
// }
// );

// comidasFav.forEach((nombre, contar) => console.log(`Comida favorita ${contar + 1}: ${nombre}`));

// var series = ["The Walking Dead", "Breaking Bad", "Better Call Saul"];
// console.log(series);

// series.pop();
// console.log(series);

// series.push("Dexter");
// console.log(series);

// var impresora = ["Documento", "Ticket", "Dibujo"];

// function añadirCola(nombre){
//     impresora.push(nombre);
//     console.log(`Cola de impresión actual -> `, impresora)
// }

// function eliminarCola(){
//     let siguiente = impresora.shift()
//     console.log(`Se ha imprimido ${siguiente}, la cola actual es `, impresora);
// }

// function prioritario(nombre){
//     impresora.unshift(nombre);
//     console.log(`Se ha añadido un elemento prioritario: ${nombre}`);
// }

// añadirCola("Hola");
// añadirCola("Adios");
// eliminarCola();
// eliminarCola();
// prioritario("Factura urgente")
// eliminarCola();


// var cerrarDocumento = ["Abrir documento", "Editar documento", "Guardar documento", "Cerrar documento"];

// function añadirAccion(nombre){
//     cerrarDocumento.push(nombre);
//     console.log(`Pasos a seguir: `, cerrarDocumento);
// }

// function eliminarAccion(){
//     cerrarDocumento.pop();
//     console.log(`Pasos a seguir: `, cerrarDocumento);
// }

// añadirAccion("Abrir youtube");
// añadirAccion("Cerrar youtube");
// eliminarAccion();
// eliminarAccion();

// Enunciado: un array con diez numeros, ordenados de mayor a menor, con slice copiar 3 primeros, reemplazar el tercero por el numero 100, ahora unir a otro array con otros 3 numeros 
// diferentes y enseñar por pantalla como numeros no array con asteriscos

// var numeros = [6, 10, 4, 3, 9, 7, 2, 1, 5, 8];

// var numerosordenados = [... numeros].sort((a,b)=>a-b);
// console.log(numerosordenados);

// var numerossliced = [... numerosordenados].slice(0,3);
// console.log(numerossliced);

// numerosordenados.splice(2,1, 100);
// console.log(numerosordenados);

// var numeros_2 = [20, 30, 40];

// var numerosconjuntos = numerosordenados.concat(numeros_2);
// console.log(numerosconjuntos);

// console.log("Arrays juntos: ", numerosconjuntos.join(" * "));

// var edades = [17,22,35,40];
// var jubilacion = [];
// edades.forEach(e => jubilacion.push(65 - e));
// console.log("Les quedan ", jubilacion, " años, respectivamente, para jubilarse");

// var notas = [4,7,9,3,8];

// var aprobados = notas.filter(a => a >= 5);
// console.log("Aprobados: ", aprobados);

// var precios = [120,340,300,80];

// var media = precios.reduce((a,b) => a + b) / precios.length;
// console.log(media);

// var productos = [
//     {nombre: "Manzana", precio: 2, categoria: "Alimento"},
//     {nombre: "Croissant", precio: 7.99, categoria: "Alimento"},
//     {nombre: "Vino blanco", precio: 20.99, categoria: "Alcohol"},
//     {nombre: "Papel higiénico", precio: 4.99, categoria: "Aseo"},
//     {nombre: "Pan", precio: 1.99, categoria: "Alimento"},
//     {nombre: "Camiseta", precio: 39.99, categoria: "Ropa"},
//     {nombre: "Jabón de mano", precio: 7.99, categoria: "Aseo"}
// ]
// productos.forEach(productos => {
//     console.log(productos.nombre)
// });

// var filtrado = productos.filter(a => a.precio > 20);
// console.log(filtrado.map(a => a.nombre));

// var productosIva = productos.map(a => a.precio * 1.21)
// console.log(productosIva);

// var media = productos.reduce((a,b) => a + b) / productos.length;
// console.log(media)

var media = [
    ["Mr.Robot", "Fight Club"],
    ["Snowpiercer", "Fury"],
    ["The Punisher", "Squid Games"]
];

for (let i = 0; i < media.length; i++){
    for(let j = 0; j < media[i].length; j++){
        console.log(`Fila ${i+1}, columna ${j+1}: ${media[i][j]}`)
    }
}