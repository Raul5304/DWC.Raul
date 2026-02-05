// clase con nombre, precio, stock, mostrarInfo() (muestra en consola), vender(cantidad) (si hay suficiente)
// reabastecer(cantidad) (aumenta el stock)
// const teclado = new Producto('Teclado Mecánico', 89.99, 15);
// mostrarlo, vender 3 unidades, aumentar 10 unidades;
// Formato: "Vendidas XX unidades. Stock restante: XX"
// "Stock aumentado. Nuevo stock XX"

class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre} || Precio: ${this.precio} || Stock: ${this.stock}`);
    }

    vender(cantidad){
        if (cantidad > this.stock){
            console.log(`No hay suficiente stock en este producto`);
        }
        else{
            this.stock--;
            console.log(`Vendidas ${cantidad} unidade(s). Stock restante: ${this.stock}`);
        }
    }

    reabastecer(cantidad){
        this.stock++;
        console.log(`Stock aumentado. Nuevo stock ${this.stock}`)
    }
}

const teclado = new Producto("Teclado Mecánico", 30, 20);

teclado.vender(3);
teclado.reabastecer(10);