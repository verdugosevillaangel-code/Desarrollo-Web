function generarTablas() {
    // 1. Obtener el valor del usuario y el contenedor
    const inputLimite = document.getElementById("limite");
    const contenedor = document.getElementById("contenedor-tablas");
    
    // Convertimos a entero
    let limite = parseInt(inputLimite.value);

    // 2. Validación: Debe ser un número, positivo y mayor a 0
    if (isNaN(limite) || limite <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    // 3. Limpiar contenido previo
    contenedor.innerHTML = "";

    // 4. CICLO EXTERIOR: Va desde 1 hasta el número especificado (limite)
    for (let i = 1; i <= limite; i++) {
        
        let card = document.createElement("div");
        card.className = "tabla-card";
        
        let htmlContenido = `<h3>Tabla del ${i}</h3>`;

        // 5. CICLO INTERIOR: Genera la multiplicación del 1 al 10 para la tabla actual
        for (let j = 1; j <= 10; j++) {
            htmlContenido += `<p class="linea">${i} x ${j} = <strong>${i * j}</strong></p>`;
        }

        card.innerHTML = htmlContenido;
        contenedor.appendChild(card);
    }
}