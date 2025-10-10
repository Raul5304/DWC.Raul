/* Ejercicio 5 - Retos finales
Redondear notas
Versión básica:
Pide una nota decimal al usuario y muéstrala redondeada a 1 decimal con toFixed(1). */

var notaDecimal = parseFloat(prompt("Introduce una nota con decimal"))

notaDecimalRedondeada = notaDecimal.toFixed(1);

Swal.fire(notaDecimalRedondeada);

/*
Versión pro:
Pide varias notas en un bucle (hasta que el usuario escriba “fin”), muéstralas todas redondeadas y calcula la media también redondeada a 1 decimal. */

var notas = []
var input

while ((input = prompt("Introduce una nota, escribe fin para finalizar:")) !== null && input.toLowerCase() !== "fin"){
  let nota = parseFloat(input)
  if (!isNaN(nota)){
    notas.push(nota)
  }
  else{
    alert("Entrada no válida. Introduce un número o 'fin'.")
  }
}

if (notas.length > 0){
  let notasRedondeadas = notas.map(Math.round)
  let media = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(1) // Suma todos los numeros del array y divide por la longitud
  alert(`Notas redondeadas: ${notasRedondeadas.join(", ")}\nMedia: ${media}`)
}
else{
  alert("No se introdujeron notas. No se puede calcular la media.")
}

/*
Validar emails
Versión básica:
Pide un email y comprueba si contiene “@” usando includes(). */

var email2 = prompt("Introduce un email")

if (email2.includes('@')){
  alert("Email válido")
}
else{
  alert("Email inválido")
}


/*
Versión pro:
Comprueba además que:
Contiene un . después de la @
No empieza ni termina con @ o .
Tiene al menos 6 caracteres */

var email3 = prompt("Introduce un correo válido")

var posicionArroba2 = email3.indexOf("@")
var posicionPunto2 = email3.lastIndexOf(".")
var longitudValida2 = email3.length >= 6
var puntoDespuesArroba2 = posicionPunto2 > posicionArroba2

if (email3.includes('@') && puntoDespuesArroba2 == true && (email3[0] != '@' || email3[0] != '.') && (email3[-2] != '@' || email3[-2] != '.') && longitudValida2 == true){
  alert("Correo válido")
}else{
  alert("Correo inválido")
}



/* Generar acrónimos
Versión básica:
Pide una frase y genera un acrónimo tomando la primera letra de cada palabra en mayúscula.
Ejemplo: “Instituto de Educación Secundaria” → “IDES”. */

var frase = prompt("Introduce una frase:");

var palabras = frase.trim().split(/\s+/);

var acronimo = palabras.map(p => p.charAt(0).toUpperCase()).join("");

alert("El acrónimo es: " + acronimo);

/*
Versión pro:
Ignora palabras cortas como de, la, el, en… y muestra el acrónimo con puntos intermedios.
Ejemplo: “Instituto de Educación Secundaria” → “I.E.S.”. */

const ignorar = ["de", "la", "el", "en", "del", "y", "a", "los", "las", "un", "una", "o"]

var frase2 = prompt("Introduce una frase:")

var palabras2 = frase2.trim().split(/\s+/)

var letras = palabras2.filter(p => !ignorar.includes(p.toLowerCase())).map(p => p.charAt(0).toUpperCase())

var acronimo = letras.join(".") + "."

alert("El acrónimo es: " + acronimo)