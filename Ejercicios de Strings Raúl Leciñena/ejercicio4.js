/* Ejercicio 4 - Validar contraseña
Crea un programa que pida al usuario una propuesta de contraseña y compruebe si cumple con los siguientes requisitos.
Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba, almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura, de lo contrario mostrará que es una contraseña no segura. Utiliza SweetAlert2 para mostrar el resultado. */

var contrasena = prompt("Introduce una contraseña")

var longitud = contrasena.length >= 8 && contrasena.length <= 16
var mayusculas = /[A-Z]/.test(contrasena)
var minusculas = /[a-z]/.test(contrasena)
var tieneNumero = /[0-9]/.test(contrasena)
var caracterEspecial = /[-_@$%&¿?¡!.:,;]/.test(contrasena)

if (longitud && mayusculas && minusculas && tieneNumero && caracterEspecial){
  Swal.fire({
    icon: "success",
    title: "Contraseña segura",
    text: "Tu contraseña es valida."
  })
} else {
  Swal.fire({
    icon: "error",
    title: "Contraseña no segura",
    html: `Tu contraseña debe cumplir los siguientes requisitos:<br>
           - 8 a 16 caracteres<br>
           - Al menos una letra mayuscula<br>
           - Al menos una letra minuscula<br>
           - Al menos un número<br>
           - Al menos un carácter especial: - _ @ # $ % & ¿ ? ¡ ! . : , ;`
  })
}
