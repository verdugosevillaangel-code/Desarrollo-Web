function calcularIMC() {
    // 1. Obtener valores de los inputs
    const peso = parseFloat(document.getElementById("peso").value);
    const alturaCm = parseFloat(document.getElementById("altura").value);
    const cajaRef = document.getElementById("resultado-imc");

    // 2. Validaciones
    if (!peso || !alturaCm || peso <= 0 || alturaCm <= 0) {
        alert("Por favor, ingresa valores válidos de peso y estatura.");
        return;
    }

    // 3. Cálculo del IMC
    // Convertimos altura de cm a metros dividiendo entre 100
    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);

    // 4. Determinar el grado o categoría
    let categoria = "";
    let colorFondo = "";
    let colorTexto = "#fff";

    if (imc < 18.5) {
        categoria = "Bajo peso";
        colorFondo = "#3b82f6"; // Azul
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal (Saludable)";
        colorFondo = "#10b981"; // Verde
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso";
        colorFondo = "#f59e0b"; // Naranja
    } else if (imc >= 30 && imc <= 34.9) {
        categoria = "Obesidad Grado I";
        colorFondo = "#ef4444"; // Rojo
    } else if (imc >= 35 && imc <= 39.9) {
        categoria = "Obesidad Grado II";
        colorFondo = "#b91c1c"; // Rojo oscuro
    } else {
        categoria = "Obesidad Grado III (Mórbida)";
        colorFondo = "#7f1d1d"; // Granate
    }

    // 5. Mostrar resultados con estilo dinámico
    cajaRef.style.display = "block";
    cajaRef.style.backgroundColor = colorFondo;
    cajaRef.style.color = colorTexto;
    
    cajaRef.innerHTML = `
        <span class="valor-imc">${imc.toFixed(1)}</span>
        <strong>Estado:</strong> ${categoria}
    `;
}