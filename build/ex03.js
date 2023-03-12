"use strict";
function calcularLitros(pi, raio, altura, conversao) {
    let totalLitros;
    totalLitros = pi * raio ** 2 * altura;
    totalLitros = totalLitros * conversao;
    return totalLitros;
}
let z;
z = calcularLitros(3.14, 2, 4, 1000);
console.log("O total de litros possível de armazenar é" + z);
//# sourceMappingURL=ex03.js.map