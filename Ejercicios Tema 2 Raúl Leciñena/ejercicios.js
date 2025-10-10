/* Ejercicio 1 – Semáforo simple
Haz un script que muestre en consola tres mensajes en orden:
“Rojo: espera”


“Amarillo: precaución”


“Verde: avanza” */
 
console.log("Rojo: espera")
console.log("Amarillo: precaución")
console.log("Verde: avanza")

/*
Ejercicio 2 – Saludo personalizado con template literal
Declara una variable nombre y otra curso. Muestra en consola:
“Hola, [Nombre]. Bienvenida al curso de DWEC.” */

var nombre = prompt("Inserta tu nombre");
var curso = "DWEC"
console.log("Hola " + nombre + ", bienvenido al curso de " + curso + ".")

/*
Ejercicios de variables y operadores
Ejercicio 3 – Conversor de temperatura
Pide al usuario con prompt una temperatura en grados Celsius y muestra en alert la conversión a Fahrenheit. */

var temperatura = prompt("Inserta una temperatura.")
var farenheit = 0;

farenheit = (((temperatura * 9) / 5) + 32)

console.log("La temperatura en farenheit es " + farenheit)

/*
Ejercicio 4 – Calculadora de edad
Declara una variable anioNacimiento. Calcula la edad actual restando al año actual (2025) y muéstrala en consola. */

var anioNacimiento = prompt("Inserta tu año de nacimiento")
var edad = 0;

edad = 2025 - anioNacimiento

console.log("Tu edad es: " + edad)

/* 
Ejercicios de condicionales
Ejercicio 5 – Número par o impar
Pide al usuario un número. Muestra en alert si es par o impar. */

var pedirNumero = prompt("Inserta un número")

if (pedirNumero % 2 == 0){
    console.log("El número es par")
}
else{
    console.log("El número es impar")
}

/*
Ejercicio 6 – Nota final
 Declara una variable nota. Si es menor que 5 muestra “Suspenso”, entre 5 y 6.9 “Aprobado”, entre 7 y 8.9 “Notable”, y 9 o más “Sobresaliente”. */

var nota = prompt("Inserta una nota")

if (nota < 5){
    console.log("Suspenso");
}
else if (nota = 5 && nota <= 6.9){
    console.log("Aprobado");
}
else if (nota = 7 && nota <= 8.9){
    console.log("Notable");
}
else if (nota = 9 && nota <= 10){
    console.log("Sobresaliente");
}
else{
    console.log("Introduce una nota válida")
}

/*
Ejercicios de bucles
Ejercicio 7 – Tabla de multiplicar
Pide un número al usuario y escribe en consola su tabla de multiplicar del 1 al 10. */

var numeroMultiplicar = parseInt(prompt("Introduce un número"))
var contador = 0

while (contador != 11){
    let resultado = 0
    resultado = numeroMultiplicar * contador
    console.log(resultado)
    contador++
}
/* 
Ejercicio 8 – Cuenta atrás
Haz un bucle que muestre en consola una cuenta atrás desde 10 hasta 1 y al final escriba “¡Despegue!”. */

for (let i = 10; i > -1; i--){
    if (i != 0){
        console.log(i);
    }
    else{
        console.log("¡Despegue!");
    }
}

/*
Ejercicios avanzados
Ejercicio 9 – Juego del número secreto
Guarda un número secreto en una variable. Haz que el usuario intente adivinarlo con prompt. Dale pistas: si es mayor o menor. El juego acaba cuando acierta. */

var numeroSecreto = 254
let pedirNumeroSecreto

do{
    pedirNumeroSecreto = parseInt(prompt("Inserta un número"))
    if (pedirNumeroSecreto > numeroSecreto){
        alert("El número introducido es mayor que el número secreto")
    }
    else if (pedirNumeroSecreto < numeroSecreto){
        alert("El número introducido es menor que el número secreto")
    }
}while (numeroSecreto != pedirNumeroSecreto)

/*
Ejercicio 10 – Calculadora mejorada
Haz una calculadora que pida dos números con prompt y luego pregunte qué operación hacer (+, -, *, /). Muestra el resultado en consola. */

var pedirNumero1 = parseInt(prompt("Inserta el primer número de la calculadora"))
var pedirNumero2 = parseInt(prompt("Inserta el segundo número de la calculadora"))

do{
    var elegirOperacion = parseInt(prompt("Elige la operación que deseas hacer: 1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5. Salir"))
    if (elegirOperacion == 1){
        console.log(pedirNumero1 + pedirNumero2)
    }
    else if (elegirOperacion == 2){
        console.log(pedirNumero1 - pedirNumero2)
    }
    else if (elegirOperacion == 3){
        console.log(pedirNumero1 * pedirNumero2)
    }
    else if (elegirOperacion == 4){
        if (pedirNumero2 == 0){
            console.log("No se puede dividir entre 0")
        }
        else{
            console.log(pedirNumero1 / pedirNumero2)
        }
    }
}while (elegirOperacion != 5)
