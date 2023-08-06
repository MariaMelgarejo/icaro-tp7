// escribe tu respuesta acá
const multiplicarArreglo = (array) => {
    const resultado = array.reduce((total, value) => total * value, 1)
    return resultado
}
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1