// escribe tu función acá
const max = (array) => {
    let index = array.length;
    let max = -Infinity;
    while (index--) {
        if (array[index] > max) {
            max = array[index];
        }
    }
    return max;
}
// código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9