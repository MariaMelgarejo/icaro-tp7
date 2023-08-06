// escribe tu función acá
const duplicar = (array) => {
    const resultado = array.map(numero => numero * 2)
    return resultado
}
// código de prueba
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []