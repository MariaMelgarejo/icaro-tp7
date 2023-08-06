// escribe tu función acá
const capitalizar = (string) => {
    if (string.length > 0) {
        return string[0].toUpperCase() + string.substring(1)
    }
    return string
}
// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""