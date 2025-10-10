/* Ejercicio 1 - Nombre de usuario
Crea un programa que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido 1: / Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Maria Paradela Garcia sería mparadelag
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. marpargar */


var nombre = prompt("Inserta tu nombre y tus apellidos")

var sinEspacios = nombre.replace(/\s+/g, "")

var tamaño = sinEspacios.length

alert(tamaño);

var nombreMayusculas = nombre.toUpperCase()
var nombreMinusculas = nombre.toLowerCase()

alert(nombreMayusculas)
alert(nombreMinusculas)


var partes = nombre.trim().split(/\s+/)

var nombre1 = partes[0] || ""
var apellido1 = partes[1] || ""
var apellido2 = partes[2] || ""

alert(
  "Nombre: " + nombre1 + "\n" +
  "Apellido 1: " + apellido1 + "\n" +
  "Apellido 2: " + apellido2
);

var usuario1 = (
    nombre1.charAt(0) +
    apellido1 +
    apellido2.charAt(0)
  ).toLowerCase()

alert(usuario1);

var usuario2 = (
    nombre1.substring(0, 3) +
    apellido1.substring(0, 3) +
    apellido2.substring(0, 3)
  ).toLowerCase()

alert(usuario2)
