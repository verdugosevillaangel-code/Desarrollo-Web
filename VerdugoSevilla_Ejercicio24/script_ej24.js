// 1. Obtener la fecha actual del sistema
const ahora = new Date();

const diaSemanaNum = ahora.getDay();   // 0 (Dom) a 6 (Sáb)
const diaMes = ahora.getDate();        // 1 a 31
const mesNum = ahora.getMonth();       // 0 (Ene) a 11 (Dic)
const año = ahora.getFullYear();       // 2026

let nombreDia;
let nombreMes;

// 2. Switch para determinar el nombre del día
switch (diaSemanaNum) {
    case 0: nombreDia = "domingo"; break;
    case 1: nombreDia = "lunes"; break;
    case 2: nombreDia = "martes"; break;
    case 3: nombreDia = "miércoles"; break;
    case 4: nombreDia = "jueves"; break;
    case 5: nombreDia = "viernes"; break;
    case 6: nombreDia = "sábado"; break;
}

// 3. Switch para determinar el nombre del mes
switch (mesNum) {
    case 0: nombreMes = "Enero"; break;
    case 1: nombreMes = "Febrero"; break;
    case 2: nombreMes = "Marzo"; break;
    case 3: nombreMes = "Abril"; break;
    case 4: nombreMes = "Mayo"; break;
    case 5: nombreMes = "Junio"; break;
    case 6: nombreMes = "Julio"; break;
    case 7: nombreMes = "Agosto"; break;
    case 8: nombreMes = "Septiembre"; break;
    case 9: nombreMes = "Octubre"; break;
    case 10: nombreMes = "Noviembre"; break;
    case 11: nombreMes = "Diciembre"; break;
}

// 4. Construir la cadena de texto final
const mensajeFinal = `Hoy es ${nombreDia} ${diaMes} de ${nombreMes} del año ${año}`;

// 5. Imprimir en el HTML
document.getElementById("fecha-formateada").innerText = mensajeFinal;