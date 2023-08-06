// escribe tu función acá
const empiezanConA = (array) => {
    const resultado = array.filter(palabra => {
        let inicial = palabra.charAt(0)
        inicial = inicial.toLowerCase()
        if (inicial === "a") {
            return palabra
        }
    })
    return resultado
}
// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []