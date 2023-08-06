// escribe tu función acá
const min = (array) => {
    let index = array.length;
    let min = Infinity;
    while (index--) {
        if (array[index] < min) {
            min = array[index];
        }
    }
    return min;
}
// código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2