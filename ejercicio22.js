// escribe tu función acá
const posiciones = (array) => {
    const resultado = array.filter(numero => numero % 2 === 0).map(numero => array.indexOf(numero))
    return resultado
}
// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []