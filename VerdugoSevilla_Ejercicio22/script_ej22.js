function resolverEcuacion() {
    // 1. Capturar valores
    let a = parseFloat(document.getElementById("valA").value);
    let b = parseFloat(document.getElementById("valB").value);
    let c = parseFloat(document.getElementById("valC").value);
    let cajaResultado = document.getElementById("resultado");

    // 2. Validaciones básicas
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        cajaResultado.innerHTML = "Por favor, llena todos los campos.";
        return;
    }

    if (a === 0) {
        cajaResultado.innerHTML = "'a' no puede ser 0 (no sería una ecuación cuadrática).";
        return;
    }

    // 3. Calcular el discriminante (b^2 - 4ac)
    let discriminante = Math.pow(b, 2) - (4 * a * c);

    if (discriminante < 0) {
        // Las raíces son imaginarias
        cajaResultado.innerHTML = "El discriminante es negativo (" + discriminante + "). <br>Las raíces son números complejos (imaginarios).";
    } else {
        // 4. Calcular x1 y x2
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        // 5. Imprimir resultados redondeados a 2 decimales
        cajaResultado.innerHTML = 
            "<strong>Resultados:</strong><br>" +
            "Valor de x1: <span>" + x1.toFixed(2) + "</span><br>" +
            "Valor de x2: <span>" + x2.toFixed(2) + "</span>";
    }
}