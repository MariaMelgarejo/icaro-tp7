// escribe tu función acá
const distancia = (string1, string2) => {
    let contador = 0;
    let stringMayor
    if (string1.length > string2.length) {
        stringMayor = string1
    } else {
        stringMayor = string2
    }
    const arrayString1 = string1.split("")
    const arrayString2 = string2.split("")
    for (let i = 0; i < stringMayor.length; i++) {
        if (arrayString1[i] !== arrayString2[i]) {
            contador++
        }
    }
    return contador
}
// código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3