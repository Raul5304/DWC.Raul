/* Crea un programa que pida al usuario que elija una opción del siguiente menú:
Potencia.
Raíz.
Redondeo.
Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente. */

var elegirCalculo = parseInt(prompt(`Elige un número para hacer operación: \n 1. Potencia \n 2. Raíz \n 3. Redondeo \n 4. Trigonometría.`))

switch(elegirCalculo){
    case 1:
        var base = parseInt(prompt("Introduce un número para hacer al base"));
        var exponente = parseInt(prompt("Introduce un número para hacer exponente"));

        document.write(`La potencia de ${base} elevado a ${exponente} es: ${Math.pow(base, exponente)}`);
        break;
    case 2:
        var num1 = parseInt(prompt("Introduce un número (no negativo)"))
        
        if (num1 < 0){
            alert("Introduce un número que no sea negativo")
        }else{
            document.write(`La raíz de ${num1} es: ${Math.sqrt(num1)}`)
        }
        break;
    case 3:
        var numdecimal = parseInt(prompt("Introduce un número con un decimal"))
        document.write(`El número decimal redondeado al más proximo es: ${Math.round(numdecimal)}`)
        document.write(`El número decimal más proximo (por arriba )es: ${Math.ceil(numdecimal)}`)
        document.write(`El número decimal más proximo (por abajo) es: ${Math.floor(numdecimal)}`)
        break;
    case 4:
        var angulo = parseInt(prompt("Introduce un angulo entre 0 y 360"))
        if (angulo >= 0 && angulo <= 360){
            document.write(`El seno del número es: ${Math.sin(angulo)}`)
            document.write(`El coseno del número es: ${Math.cos(angulo)}`)
            document.write(`La tangente del número es: ${Math.tan(angulo)}`)
        }else{
            alert("Introduce un angulo válido")
        }
        break;
}


/*
Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.

Debes escribir al lado si son cm, o cm2, o cm3.

Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 / 523,59. */

var radio = parseInt(prompt("Introduce el radio de una circunferencia"));
const diametro = radio * 2

document.write(`El radio de la circunferencia es: ${radio}`);
document.write(`El diámetro es: ${diametro}`)
document.write(`El perímetro de la circunferencia es: ${diametro * Math.PI}`)
document.write(`El área de un círculo es: ${(Math.PI / 4) * (math.pow(diametro, 2))} cm2`)
document.write(`El área de una esfera es: ${4 * math.PI * math.pow(radio, 2)} cm3`);
document.write(`El volumen de una esfera es: ${(4/3) * Math.PI * math.pow(radio * 3)} cm3`);
