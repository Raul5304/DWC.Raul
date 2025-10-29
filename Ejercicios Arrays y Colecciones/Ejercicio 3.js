const temperaturas = [
    {ciudad: "Ciudad 1", datos: [18, 20, 22, 19, 21]},
    {ciudad: "Ciudad 2", datos: [15, 16, 18, 17, 16]},
    {ciudad: "Ciudad 3", datos: [22, 23, 21, 20, 24]}
];

temperaturas.forEach(ciudad => {
    ciudad.datos.forEach((temp, i) => {
        console.log(`${ciudad.ciudad} - Día ${i+1} - Temperatura: ${temp.toFixed(1)} ºC`);
    })
})

temperaturas.forEach(temp => {
    let media = temp.datos.reduce((a,b) => a + b, 0) / temp.datos.length;
    console.log(`${temp.ciudad} → media: ${media} ºC`);
})

