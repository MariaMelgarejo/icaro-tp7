// escribe tu función acá
const numAsteriscos = (array) => {
    const asteriscos = array.filter(item => item === "*")
    return asteriscos.length
}
// código de prueba
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
console.log(numAsteriscos([])); // 0