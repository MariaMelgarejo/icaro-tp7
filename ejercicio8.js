// escribe tu respuesta acá
const sumarRango = (numeroInicial, numeroFinal) => {
    let resultado = 0
    if (numeroInicial < numeroFinal) {
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            resultado += i
        }
    }
    return resultado
}
// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0