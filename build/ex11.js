"use strict";
/*
ED: altura REAL
tempo INTEIRO
ESCREVER (“Indique em segundos o tempo cronometrado que a pedro demorou a
atingir o chão”
LER (tempo)
altura &lt;- 0*tempo + (9,8*2^2)/2
ESCREVER (“A altura do prédio é de “altura “metros”)
FIM */
function calcularAlturaPredio(tempo) {
    let alturaEdificio;
    alturaEdificio = 0 * tempo + (9.8 * 2 ** 2) / 2;
    return alturaEdificio;
}
let predio;
predio = calcularAlturaPredio(25);
console.log(" a altura do prédio é de" + predio);
//# sourceMappingURL=ex11.js.map