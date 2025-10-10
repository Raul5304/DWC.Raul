/* Ejercicio 2 - Validar DNI
Pedir DNI al usuario
Limpiar espacios
Comprobar longitud
Extraer letra y convertir a mayúscula
Comprobar que coincide con letrasDNI
Mostrar resultado con SweetAlert2
Para usar letrasDNI tienes que declararlo como constante de cadena con las letras EN ESTE ORDEN:
const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE"
El resto de dividir el número del DNI entre 23 nos dice qué letra toca para ese número de DNI. */


var DNI = prompt("Introduce to DNI")

const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE"

var DNI2 = DNI.replace(/\s+/g, "")

if (DNI2.length != 9){
  Swal.fire("Introduce un DNI válido");
}
else{
  var numero = DNI2.slice(0, -1)
  var letra = DNI2.slice(-1).toUpperCase()
  var DNI3 = numero + letra
  var letracorrecta = letrasDNI[numero % 23]

  if (letra === letracorrecta){
    Swal.fire(`Tu DNI es correcto: ${DNI3}`)
  }
  else{
    Swal.fire("Tu DNI no es correcto")
  }
}