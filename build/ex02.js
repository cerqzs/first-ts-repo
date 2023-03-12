"use strict";
function calcularPrecoRamo(rosas, tulipas, pRosa, pTulipa) {
    let ramo;
    ramo = rosas * pRosa + tulipas * pTulipa;
    return ramo;
}
let b;
b = calcularPrecoRamo(1, 1, 1, 1);
console.log("O preço do ramo é" + b);
//# sourceMappingURL=ex02.js.map