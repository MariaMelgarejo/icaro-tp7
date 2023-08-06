// escribe tu función acá
const imprimirMatriz = (array) => {
    return array.map(item => item.map(numero => console.log(numero)))
}
// código de prueba
imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9