// escribe la función bmi acá
const bmi = (peso, altura) => {
    const imc = peso / (altura * altura)
    if (imc >= 30) {
        return 'Obeso'
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Normal'
    } else {
        return 'Bajo de peso'
    }
}
// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"