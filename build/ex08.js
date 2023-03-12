"use strict";
/*Inicio

ED: intervalotempo, distancia INTEIRO
ESCREVER (“Qual o intervalo de tempo em segundos, entre o relâmpago e o trovão?”)
LER (intervalotempo)
distancia &lt;- intervalotempo * 340
ESCREVER (“a trovoada está a”, distancia “metros”)
FIM */
function calcularIntervaloTempo(intervaloT) {
    let distancia;
    distancia = intervaloT * 340;
    return distancia;
}
let trovoada;
trovoada = calcularIntervaloTempo(10);
console.log("a trovoada está a:" + trovoada);
//# sourceMappingURL=ex08.js.map