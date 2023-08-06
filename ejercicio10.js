// escribe tu respuesta acá
const numeroDeCaracteres = (string, caracter) => {
    const arrayString = string.split("")
    let contador = 0;
    arrayString.map(item => {
        if (item === caracter) {
            contador++
        }
    })
    return contador
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4