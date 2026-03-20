function operar(tipo) {
    // 1. Obtener los valores de las cajas de texto
    // Usamos parseFloat para convertir el texto a número decimal
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let display = document.getElementById("resultado-caja");

    // Validar si los campos están vacíos o no son números
    if (isNaN(a) || isNaN(b)) {
        display.innerHTML = "Por favor, ingresa ambos números.";
        display.style.color = "red";
        return;
    }

    display.style.color = "#333";
    let resultado;
    let simbolo;

    // 2. Lógica de las operaciones
    switch (tipo) {
        case 'suma':
            resultado = a + b;
            simbolo = "+";
            break;
        case 'resta':
            resultado = a - b;
            simbolo = "-";
            break;
        case 'div':
            if (b === 0) {
                display.innerHTML = "No se puede dividir por cero";
                return;
            }
            resultado = (a / b).toFixed(2);
            simbolo = "/";
            break;
        case 'exp':
            resultado = a ** b;
            simbolo = "^";
            break;
    }

    // 3. Mostrar el resultado
    display.innerHTML = `Resultado: <strong>${a} ${simbolo} ${b} = ${resultado}</strong>`;
}