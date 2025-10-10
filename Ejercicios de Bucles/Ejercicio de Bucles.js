/* Ejercicios de bucles
Ejercicio 1 – Del 1 al 10
Escribe un programa que muestre los números del 1 al 10 con un bucle for. */

for (i = 0; i <= 10; i++){
    document.write(`${i}, `);
}

/*
Ejercicio 2 – Cuenta atrás
Haz una cuenta atrás desde 10 hasta 1 con un bucle while. */

var contador = 10;

while (contador != 0){
    document.write(contador + "<br>");
    contador--;
}

/* 
Ejercicio 3 – Mínimo una vez
Con do…while, pide al usuario que escriba su nombre hasta que introduzca un texto no vacío. */

do{
    var nombre = prompt("Introduce nombres, no escribas nada para salir");
}while(nombre != "")

/*
Ejercicio 4 – Tabla de multiplicar
Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10. */

var numero = parseInt(prompt("Inserta un número"))

for (i = 1; i <= 10; i++){
    document.write(`La tabla de multiplicar del ${numero} es: ${numero * i} <br>`)
}

/*
Ejercicio 5 – Salta el 5
Imprime los números del 1 al 10 usando un for, pero salta el número 5. */

for (i = 0; i <= 10; i++){
    if (i == 5){
        continue
    }
    else{
        document.write(i + "<br>")
    }
}

/*
Ejercicio 6 – Detener con salir
Haz un programa que pregunte al usuario por prompt y repita la pregunta hasta que escriba "salir". */

while (escribir != "salir"){
    var escribir = prompt("Introduce texto, escribe salir para salir")
}

/*
Ejercicio 7 – Primer múltiplo
Busca el primer número múltiplo de 7 entre 1 y 100. Cuando lo encuentres, detén el bucle. */

for (i = 1; i <= 100; i++){
    if (i % 7 == 0){
        document.write(`Múltiplo de 7 encontrado: ${i}`)
        break
    }
}

/*
Ejercicio 8 – Suma de números
Pide al usuario números uno a uno con prompt.
 El programa termina cuando introduzca 0.
 Al final muestra la suma de todos los números introducidos. */

do{
    var numero = parseInt(prompt("Introduce números, 0 para salir"))
    if (numero < 0 || numero >= 10 || isNaN(numero)){
        alert("Introduce un único número")
    }
    else if (numero >= 1 && numero <= 9){
        document.write(numero + "<br>")
    }
}while(numero != 0)

/*
Ejercicio 9 – Cuadrado de asteriscos
Dibuja un cuadrado de 5x5 con asteriscos (*) usando bucles anidados.
Ejemplo:
* * * * *  
* * * * *  
* * * * *  
* * * * *  
* * * * *  */

for (i = 1; i <= 5; i++){
    for (j = 1; j <= 5; j++){
        document.write("* ");
    }
    document.write("* <br>")  
}


/*
Ejercicio 10 – Triángulo de asteriscos
Dibuja un triángulo rectángulo de 5 filas:
*  
* *  
* * *  
* * * *  
* * * * *  */

for (i = 1; i <= 5; i++){
    let fila = ''
    for (j = 1; j <= i; j++){
        fila += "* "
    }
    document.write(`${fila} <br>`)
}


/*
Ejercicio 11 – Tabla de multiplicar completa
Genera las tablas de multiplicar del 1 al 10, mostrando toda la información (1x1 =1 1x2=2…. no solo el resultado). */

for (i = 1; i <= 10; i++){
    for (j = 1; j <= 10; j++){
        var resultadomultiplicacion = i * j;
        document.write(`${i} x ${j} = ${resultadomultiplicacion} <br>`)
    }
}


/*
Ejercicio 12 – Números primos
Pide un número al usuario y muestra todos los números primos desde 2 hasta ese número. */

var num = parseInt(prompt("Inserta un número"))

for (let i = 2; i <= num; i++) {
    let esPrimo = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
        esPrimo = false
        break;
            }
    }
    if (esPrimo) {
        document.write(i + "<br>");
    }
}

/*
Ejercicio 13 – Factorial
Pide un número y calcula su factorial (n! = 1 * 2 * 3 * … * n). */

var num = parseInt(prompt("Ingresa un número entero"))
var factorial = 1
        
for ( i = 1; i <= num; i++) {
    factorial *= i
    if (i != num){
        document.write(`${i} * `)
    }
    else{
        document.write(`${i}`)
    }
            
    }
document.write(`: ${factorial}`)

/*
Ejercicio 14 – Suma de pares e impares
 Pide un número n. Calcula y muestra:
La suma de todos los pares hasta n.
La suma de todos los impares hasta n. */

var num = parseInt(prompt("Introduce un número:"));

var Pares = 0
var Impares = 0

for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        Pares += i
    } else {
        Impares += i
    }
}
document.write(`La suma de todos los pares es: ${Pares} <br>`)
document.write(`La suma de todos los impares es: ${Impares} <br>`)


/*
Ejercicio 15 – Máximo común divisor
Pide dos números al usuario y calcula su MCD usando el algoritmo de Euclides con un bucle while. */




/*
Ejercicio 16 – Cuenta vocales
Pide al usuario una palabra y cuenta cuántas vocales tiene usando un bucle. */

var palabra = prompt("Introduce una palabra")
var contador = 0

for (i = 0; i <= palabra.length; i++){
    if (palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u'){
        contador++
    }
        
}
document.write(`La palabra tiene ${contador} bocales`)

/*
Ejercicio 17 – Palabra al revés
Pide al usuario una palabra y muéstrala invertida (ejemplo: hola → aloh).
Ejercicio 18 – Palíndromo
Pide una palabra y comprueba con un bucle si se lee igual al derecho y al revés.



Ejercicio 19 – Triángulo invertido
Dibuja un triángulo de asteriscos invertido con altura n. Debes pedir n al usuario. Ejemplo, con n=5:
* * * * *  
* * * *  
* * *  
* *  
*  */





/*
Ejercicio 20 – Pirámide centrada
Dibuja una pirámide con altura n centrada. Debes pedir n al usuario. Ejemplo, con n=4:
   *   
  * *  
 * * * 
* * * * 
Ejercicio 21 – Tablero de ajedrez
Dibuja un tablero de ajedrez de 8x8 con asteriscos y espacios alternados. */


/*
Ejercicio 22 – Adivina número con intentos limitados
El programa guarda un número secreto.
El usuario tiene 3 intentos máximo para adivinarlo.
Si falla, muestra “Has perdido”; si acierta, “¡Correcto!”. */

var numero_secreto = Math.floor(Math.random() * 10) + 1
var contador = 0

do{
    let numero = parseInt(prompt("Introduce un número desde el 1 hasta el 20"))
    if (numero != numero_secreto){
        contador++
        alert(`Incorrecto! Intento ${contador} de 3`)
    }
    else{
        alert(`Correcto!`)
        break
    }
}while(contador != 3)


/*
Ejercicio 23 – Cajero automático
Simula un cajero:
Saldo inicial = 1000€.
Menú con opciones: 1) Ingresar, 2) Retirar, 3) Consultar saldo, 4) Salir.
Repite hasta que el usuario elija salir. */


/*
Ejercicio 24 – Serie de Fibonacci
Pide un número n y muestra por consola los primeros n términos de la serie de Fibonacci (0, 1, 1, 2, 3, 5, …) usando bucles. */
