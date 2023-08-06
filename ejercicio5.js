// escribe tu respuesta acá
const likes = (cantidad) => {
    if (cantidad >= 1000000) {
        return `${parseInt(cantidad / 1000000)}M`
    } else if (cantidad >= 1000) {
        return `${parseInt(cantidad / 1000)}K`
    } else {
        return `${cantidad}`
    }
}
// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"