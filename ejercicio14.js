// escribe tu respuesta acá
const sumarArreglo = (array, posicionInicial, posicionFinal) => {
    if (posicionFinal !== 0) posicionFinal++
    const numeros = array.slice(posicionInicial, posicionFinal)
    const resultado = numeros.reduce((total, value) => total + value, 0)
    return resultado
}
// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0