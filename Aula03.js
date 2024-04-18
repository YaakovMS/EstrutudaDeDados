// Yaakov Meir Sabbah 2214290075
//01
let soma = 0;
let contador = 0;

while (contador < 20) {
    let valor = parseFloat(prompt("Digite um valor real:"));
    soma += valor;
    contador++;
}

console.log("O somatório dos 20 valores reais é: " + soma);

//02
let soma = 0;
let contador = 0;

do {
    let valor = parseFloat(prompt("Digite um valor real:"));
    soma += valor;
    contador++;
} while (contador < 20);

console.log("O somatório dos 20 valores reais é: " + soma);

//03
let totalPagar = 0;

while (true) {
    let codigo = parseInt(prompt("Digite o código do item (ou 0 para finalizar):"));
    if (codigo === 0) break;

    let quantidade = parseInt(prompt("Digite a quantidade desejada:"));

    switch (codigo) {
        case 100:
            totalPagar += quantidade * 1.70;
            break;
        case 101:
            totalPagar += quantidade * 2.30;
            break;
        case 102:
            totalPagar += quantidade * 2.60;
            break;
        case 103:
            totalPagar += quantidade * 2.40;
            break;
        case 104:
            totalPagar += quantidade * 2.50;
            break;
        case 105:
            totalPagar += quantidade * 1.00;
            break;
        default:
            console.log("Código inválido!");
    }
}

console.log("Total a pagar: R$" + totalPagar.toFixed(2));

//04
let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;

for (let i = 0; i < 15; i++) {
    let valor = parseFloat(prompt("Digite o valor da experiência:"));
    let codigo = parseInt(prompt("Digite o código da cobaia (1 para coelho, 2 para rato):"));

    totalCobaias += valor;

    if (codigo === 1) {
        totalCoelhos += valor;
    } else if (codigo === 2) {
        totalRatos += valor;
    }
}

let percentualCoelhos = (totalCoelhos / totalCobaias) * 100;
let percentualRatos = (totalRatos / totalCobaias) * 100;

console.log("Total de cobaias: " + totalCobaias);
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Percentual de coelhos: " + percentualCoelhos.toFixed(2) + "%");
console.log("Percentual de ratos: " + percentualRatos.toFixed(2) + "%");

//05
for (let i = 2; i <= 100; i += 2) {
    console.log("Quadrado de " + i + " é " + (i * i));
}
