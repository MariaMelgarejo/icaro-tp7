// escribe tu función acá
const palabrasANumeros = (array) => {
    const resultado = array.map(palabra => {
        switch (palabra) {
            case "cero":
                return 0
            case "uno":
                return 1
            case "dos":
                return 2
            case "tres":
                return 3
            case "cuatro":
                return 4
            case "cinco":
                return 5
            case "seis":
                return 6
            case "siete":
                return 7
            case "ocho":
                return 8
            case "nueve":
                return 9
            default:
                return -1
        }
    })
    return resultado
}
// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]