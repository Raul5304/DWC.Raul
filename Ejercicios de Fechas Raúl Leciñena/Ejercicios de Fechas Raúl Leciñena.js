/* Crea un programa que pida muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio). */

const findecurso = new Date(2026,5,24);
var fechahoy = new Date();

var milisegundosRestantes = findecurso - fechahoy;

var diasrestantes = Math.ceil(milisegundosRestantes / (1000 * 60 * 60 * 24));

/*

Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100. */


const dia = parseInt(prompt("Introduce el día de tu cumpleaños"));
const mes = parseInt(prompt("Introduce el mes de tu cumpleaños en numero"));

const anioActual = new Date().getFullYear();

console.log(`Tu cumpleaños caerá en domingo en los siguientes años:`);

for (let i = anioActual; i <= 2100; i++) {
    let cumple = new Date(i, mes - 1, dia);
    if (cumple.getDay() === 0) {
        console.log(i);
    }
}



/*

Crea un programa que muestre la hora actual en diferentes formatos, según el valor que meta el usuario por parámetro:
14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día). */

var tipofecha = parseInt(prompt("Inserta el tipo de fecha que quieres. 1 para 24h, 2 para 12h"))
const ahoractual = new Date();


if (tipofecha == 1){
    let horas = ahoractual.getHours();
    let minutos = ahoractual.getMinutes();
    let segundos = ahoractual.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos; // Esto es para añadir un 0 delante del numero si es solo un dígito, queda más atractivo a la vista

    let horaActual = `La hora actual en foramto 24h es: ${horas}:${minutos}:${segundos}`;

    console.log(horaActual);
}else if (tipofecha == 2){
    let horas = ahoractual.getHours();
    let minutos = ahoractual.getMinutes();
    let segundos = ahoractual.getSeconds();

    const ampm = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    horas = horas === 0 ? 12 : horas;

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    let horaActual = `La hora actual en foramto 12h es: ${horas}:${minutos}:${segundos} ${ampm}`;

    console.log(horaActual);
}else{
    console.log("Introduce un 1 o un 2.")
}
