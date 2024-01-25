const funcoes = require('./gets');

console.log(funcoes)

const numerosSorteados = [5, 50, 10, 98, 23];

const maiorNumero = numerosSorteados.reduce((atual, proximo) => {
    return atual > proximo ? atual : proximo;
});

console.log("O maior número sorteado é:", maiorNumero);