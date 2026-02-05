class Coche{
    constructor(marca, modlelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar(cantidad){
        this.velocidad += cantidad;
        console.log(`Acelerando... velocidad: ${this.velocidad} km/h`);
    }

    frenar(cantidad){
        this.velocidad = Math.max(0, this.velocidad - cantidad); // Otra forma de validar si la velocidad esta por encima de 0
        console.log(`Frenando...  velocidad: ${this.velocidad} km/h`);
    }

    obtenerInfo(){
        return `${this.marca} - ${this.modelo} - ${this.velocidad} km/h`;
    }
}

const miCoche = new Coche("Bravado", "Duke O' Death", 0);

console.log(miCoche.marca);
miCoche.acelerar(70);
console.log(miCoche.obtenerInfo());