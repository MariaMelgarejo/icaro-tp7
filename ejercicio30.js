// escribe tu función acá
const numAsteriscos = (array) => {
    let cantidad = 0
    array.map(arrayAsteriscos => {
        cantidad += arrayAsteriscos.filter(item => item === "*").length
    })
    return cantidad
}
// código de prueba
console.log(
    numAsteriscos([
        ["*", "", "*"],
        ["", "*", ""],
        ["*", "", "*"],
    ])
);
// 5