/**
 * Función principal que genera las tablas de multiplicar
 * utilizando ciclos anidados (for).
 */
function generarTablas() {
    // Obtenemos la referencia al contenedor donde mostraremos los resultados
    const contenedor = document.getElementById("contenedor-tablas");
    
    // IMPORTANTE: Limpiamos el contenido previo del contenedor 
    // para evitar que las tablas se dupliquen si se presiona el botón varias veces.
    contenedor.innerHTML = "";

    // --- CICLO EXTERIOR ---
    // Este ciclo define qué tabla estamos calculando actualmente (del 1 al 10).
    // 'i' representa el número de la tabla (Tabla del 1, Tabla del 2, etc.)
    for (let i = 1; i <= 10; i++) {
        
        // 1. Creamos un elemento 'div' que servirá como tarjeta contenedora para la tabla actual.
        let card = document.createElement("div");
        card.className = "tabla-card"; // Le asignamos la clase CSS para los estilos
        
        // 2. Iniciamos el contenido HTML de la tarjeta con el título de la tabla.
        // Usamos template literals (``) para facilitar la inserción de variables.
        let contenidoHTML = `<h3>Tabla del ${i}</h3>`;

        // --- CICLO INTERIOR (ANIDADO) ---
        // Por cada vuelta del ciclo exterior (i), este ciclo interior se ejecuta 10 veces.
        // 'j' representa el multiplicador (del 1 al 10).
        for (let j = 1; j <= 10; j++) {
            // Calculamos el resultado de la multiplicación actual
            let resultado = i * j;
            
            // 3. Vamos construyendo el HTML, agregando cada línea de operación a la cadena.
            contenidoHTML += `
                <div class="linea-operacion">
                    <span>${i} × ${j} =</span>
                    <strong>${resultado}</strong>
                </div>
            `;
        }

        // 4. Una vez que el ciclo interior termina (se generaron las 10 operaciones),
        // asignamos todo el contenido acumulado al elemento 'card'.
        card.innerHTML = contenidoHTML;
        
        // 5. Finalmente, agregamos la tarjeta recién creada al contenedor principal en el DOM.
        contenedor.appendChild(card);
    }
}