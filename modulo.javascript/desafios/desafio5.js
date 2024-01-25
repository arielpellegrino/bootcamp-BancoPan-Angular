/*
Calcule o que deve ser pago por um produto considerando preço normal de etiqueta e a escolha da condição de
(pagamento).

    Condigo e condição de pagamento

- A vista débito, recebe 10% de desconto
- A vista no dinheiro ou pix, recebe 15% de desconto
- Em duas vezes, preço normal de etiqueta sem juros
- Acima de duas vezes, preço normal  de etiqueta mais juros de 10%
*/

const valorProduto = 75;
const condicaoPagamento = ['debito', 'dinheiroOuPix', '2x', 'mais2x']
const condicaoCompra = condicaoPagamento[3]
let baseCalculo = '';
let novoValorProduto = '';

if (condicaoCompra == 'debito') {
    baseCalculo = (valorProduto * 10) / 100;
    novoValorProduto = valorProduto - baseCalculo;
    console.log('A vista débito, recebe 10% de desconto: ' + novoValorProduto);

} else if (condicaoCompra == 'dinheiroOuPix') {
    baseCalculo = (valorProduto * 15) / 100;
    console.log(baseCalculo)

    novoValorProduto = valorProduto - baseCalculo
    console.log('A vista no dinheiro ou pix, recebe 15% de desconto: ' + novoValorProduto);

} else if (condicaoCompra == '2x') {
    console.log('Em duas vezes, preço normal de etiqueta sem juros: ' + valorProduto)

} else if (condicaoCompra == 'mais2x') {
    baseCalculo = (valorProduto * 15) / 100;
    novoValorProduto = valorProduto + baseCalculo;
    console.log('Acima de duas vezes, preço normal  de etiqueta mais juros de 10%: ' + novoValorProduto)
}