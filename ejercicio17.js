// escribe tu función acá
const capitalizar = (string) => {
    if (string.length > 0) {
        const palabras = string.split(" ");
        const resultado = palabras.map((palabra) => {
            return palabra[0].toUpperCase() + palabra.substring(1);
        }).join(" ");
        return resultado
    }
    return string
}
// código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""