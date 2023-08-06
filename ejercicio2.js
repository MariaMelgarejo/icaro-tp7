// escribe tu respuesta acá
const calcularImpuestos = (edad, ingresos) => {
    if (edad >= 18 && ingresos >= 1000) {
        const impuestos = (ingresos * 40) / 100
        return impuestos
    } else {
        return 0
    }
}
// código de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0