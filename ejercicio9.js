// escribe tu respuesta acá
const numeroDeAes = (string) => {
    const arrayString = string.split("")
    let contador = 0;
    arrayString.map(caracter => {
        if (caracter === "a") {
            contador++
        }
    })
    return contador
}
// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0