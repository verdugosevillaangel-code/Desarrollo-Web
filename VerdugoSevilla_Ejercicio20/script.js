// 1. Declaración de variables
let num1 = 15;
let num2 = 4;

// 2. Operaciones
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let expo = num1 ** num2;

// 3. Selección del elemento HTML y salida de datos
const contenedor = document.getElementById("resultados");

contenedor.innerHTML = `
    <p>Variable A: <span>${num1}</span></p>
    <p>Variable B: <span>${num2}</span></p>
    <hr>
    <p>Suma: <span>${suma}</span></p>
    <p>Resta: <span>${resta}</span></p>
    <p>División: <span>${division.toFixed(2)}</span></p>
    <p>Exponenciación: <span>${expo}</span></p>
`;