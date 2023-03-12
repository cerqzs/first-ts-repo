"use strict";
/* Inicio
ED: distanciaze, deslocamentoM, intervaloTempoM, intervaloTempoZe distanciaM Inteiro
velocidadeM REAL
ESCREVER (“Insira a distancia em metros que o Manuel percorreu”)
LER (distanciaM)
ESCREVER (“Indique em segundos quanto tempo o Manuel demorou a completar a
prova”
LER (intervaloTempoM)
ESCREVER (“ Indique em segundos quanto tempo o Zé correu até desistir”
LER (intervaloTempoZe)
velocidadeM &lt;- distanciaM / intervaloTempoM
velocidadeM &lt;- ROUND(velocidadeM;-2)
distanciaze &lt;- velocidadeM * intervaloTempoZe / 1000
ESCREVER (“ O zé Percorreu, “ distanciaze “ Km até desistir”)
FIM */
function calcularDistanciaZe(distanciaM, intervaloTempoM, intervaloTempoZ) {
    let velocidadeM;
    let distanciaZe;
    velocidadeM = distanciaM / intervaloTempoM, Math.floor(2);
    distanciaZe = velocidadeM * intervaloTempoZ / 1000;
    return distanciaZe;
}
let kmPercorridoZe;
kmPercorridoZe = calcularDistanciaZe(42300, 500, 92);
console.log(" o zé percorreu:" + kmPercorridoZe);
//# sourceMappingURL=ex09.js.map