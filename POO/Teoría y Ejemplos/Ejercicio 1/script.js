class Persona{
    constructor(nombre, edad){
        console.log('Se está creando una persona...');
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }

    cumplirAnyos(){
        this.edad++;
        console.log(`${this.nombre} ha cumplido años, ahora tiene ${this.edad}`);
    }
}

const ana = new Persona("Ana", 25);
const luis = new Persona("Luis", 30);

ana.saludar();
luis.cumplirAnyos()