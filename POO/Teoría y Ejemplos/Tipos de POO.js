// version 1

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const ana = new Persona('Ana', 25);
const luis = new Persona('Luis', 30);

console.log(ana.saludar == luis.saludar);

// version 2

class Persona2{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const maria = new Persona2('Maria', 45);