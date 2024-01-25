/*
* Faça um programa para calcular o valor de uma viagem
* Você terá 5 variaveis. Sendo elas:
*   1 - Preço do etanol;
*   2 - Preço da gasolina;
*   3 - O tipo de combustivel que está no seu carro;
*   4 - Gasto médio de combustivel do carro por KM
*   5 - Distância em KM da viagem
*
* Imprima no console o valor que será o gasto para realizar esta viagem
* */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";
const litroConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === "Etanol") {
    valorGasto = litroConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    valorGasto = litroConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


