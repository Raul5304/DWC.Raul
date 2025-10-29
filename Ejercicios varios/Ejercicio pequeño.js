do{
    var nombre = prompt("Inserta tu nombre")
    var confirmación = confirm("Estás seguro que ese es tu nombre?");
    if (confirmación){
        alert("Muy bien.")
    }else{
        alert("Mentiroso 🥀")
    }
}while(confirmación != true)

var contador = 10;

let cuentatras = setInterval(() => {
    if (contador === 0){
        clearInterval(cuentatras)
        document.write("Despegue!! 🚀🚀")
    }else{
        document.write(`Cuenta atrás: ${contador} <br>`)
        --contador
    }
}, 1000)

function abrirVentana(){
    let ventana = window.open("","demo","width=400, height=200")
    ventana.document.writeln("<h1>Hola soy Raúl</h1>")
    ventana.document.writeln(`<script>function cerrarVentana(){window.close();}</script>`)
    ventana.document.writeln(`<button onclick="cerrarVentana()">Pulsa aquí para cerrar la ventana</button>`)
}