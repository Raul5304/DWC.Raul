/* Ejercicio 3 - Validar email
Pedir email al usuario
Comprobar que tiene "@"
Comprobar que hay "." después del "@"
Longitud mínima de 6 caracteres
Informar si es válido o no con SweetAlert2
Con indexOf("@") y lastIndexOf(".") comprobamos posiciones. La @ debe estar antes que el punto. Y el email debe tener al menos 6 caracteres. */

var email = prompt("Introduce un correo válido")

var tieneArroba = email.indexOf("@") !== -1
var posicionArroba = email.indexOf("@")
var posicionPunto = email.lastIndexOf(".")
var longitudValida = email.length >= 6
var puntoDespuesArroba = posicionPunto > posicionArroba

if (tieneArroba && puntoDespuesArroba && longitudValida) {
  Swal.fire({
    icon: "success",
    title: "Email valido",
    text: "El correo introducido es correcto."
  })
}
else{
  Swal.fire({
    icon: "error",
    title: "Email no válido",
    text: "Revisa que contenga '@', un punto después y al menos 6 caracteres."
  })
}
