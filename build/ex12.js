"use strict";
/* Exc12

INICIO
ED: alturaE, sombraE, alturaP, sombraP INTEIRO
ESCREVER (“introduza a altura da pessoa em metros”)
LER (alturaP)
ESCREVER (“introduza o tamanho da sombra da pessoa em metros”)
LER (sombraP)
ESCREVER (“introduza o tamanho da sombra do edifício em metros”)

alturaE &lt;- sombraE / sombraP * alturaP

ESCREVER */
function calcularAlturaEdificio(sombraEdifico, alturaPessoa, sombraPessoa) {
    let alturaEdi;
    alturaEdi = sombraEdifico / sombraPessoa * alturaPessoa;
    return alturaEdi;
}
let edificio;
edificio = calcularAlturaEdificio(40, 2, 3);
console.log(" o tamanho do edifico é de: " + edificio);
//# sourceMappingURL=ex12.js.map