// escribe tu función acá
const password = (string) => {
    if (string.length === 0) return ""
    let nuevoPassword = string.toLowerCase();
    nuevoPassword = nuevoPassword.replaceAll(" ", "")
    nuevoPassword = nuevoPassword.replaceAll("a", "4")
    nuevoPassword = nuevoPassword.replaceAll("e", "3")
    nuevoPassword = nuevoPassword.replaceAll("i", "1")
    nuevoPassword = nuevoPassword.replaceAll("o", "0")
    return nuevoPassword
}
// código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""