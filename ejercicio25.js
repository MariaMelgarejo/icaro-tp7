// escribe tu función acá
const terminanConS = (array) => {
    const resultado = array.filter(palabra => {
        let ultimaLetra = palabra.charAt(palabra.length - 1)
        ultimaLetra = ultimaLetra.toLowerCase()
        if (ultimaLetra === "s") {
            return palabra
        }
    })
    return resultado
}
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []