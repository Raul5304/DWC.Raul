function crearAlumno(nombre, nota1, nota2, nota3){
    return {
        nombre,
        notas: [nota1, nota2, nota3]
    };
}

alumnos = [
    crearAlumno("Raúl", 4, 6, 5),
    crearAlumno("Pepe", 1, 2, 8),
    crearAlumno("Popo", 10, 2, 6),
    crearAlumno("Rigoberto Eugenio de la Virgen del Pilar", 9, 2, 4)
];

function añadirCalcularMedia(){
    alumnos.forEach(alumno => {
        let media = alumno.notas.reduce((a, n) => a + n, 0) / alumno.notas.length;
        console.log(`-${alumno.nombre} | Media: ${media.toFixed(2)}`)
    })
}

function calcularMediaTotal(){
    var totalnotas = alumnos.reduce((acumular, alumno) => {
        var sumaAlumno = alumno.notas.reduce((a,n) => a + n, 0);
        return acumular + sumaAlumno;
    }, 0)

    var cantidadNotas = alumnos.length * alumnos[0].notas.length;
    var media = totalnotas/cantidadNotas;

    console.log(`La media de todos los alumnos es: ${media.toFixed(2)}`)
}


añadirCalcularMedia(alumnos)
calcularMediaTotal(alumnos)