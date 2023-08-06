// escribe tu función acá
const pares = (array) => {
    const resultado = array.filter(numero => numero % 2 === 0)
    return resultado
}
// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []