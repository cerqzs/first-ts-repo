"use strict";
/* Inicio
    ED: H, M, MT INTEIROS
    LER (H, M)
    MT <- H * 60 + M
    ESCREVER ( “ Passaram “, MT “ minutos”)
*/
function calcularMinutos(horas, minutos) {
    let totalMinutos;
    totalMinutos = horas * 60 + minutos;
    return totalMinutos;
}
let min;
min = calcularMinutos(5, 20);
console.log(" Passaram," + min);
//# sourceMappingURL=ex07.js.map