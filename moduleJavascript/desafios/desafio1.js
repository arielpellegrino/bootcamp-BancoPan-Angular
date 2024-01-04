/*
* Faça um programa para calcular o valor da viagem
* 1 - Preçõ do combustivel
* 2 - Gasto Medio do combustivel
* 3 - Distância em KM da viagem
*
* imprimir no console o valor gasto de combustivel da viagem
* */

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto)