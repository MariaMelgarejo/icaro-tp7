// escribe tu respuesta acá
const sumarArreglo = (array) => {
    const resultado = array.reduce((total, value) => total + value, 0)
    return resultado
}
// código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0