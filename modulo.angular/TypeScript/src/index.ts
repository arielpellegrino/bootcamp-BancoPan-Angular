// type heroi = {
//     name: string;
//     vulgo: string;
// };

// function printaObjeto(pessoa: heroi){
//     console.log(pessoa)
// }

// console.log(printaObjeto({
//     name: "bruce wayner",
//     vulgo: "Batman",
// }))

let ligado: boolean = false;
let nome: string = "Ariel";
let idade: number = 30;
let altura: number = 1.90;
let nulo: null = null;
let indefinido: undefined = undefined;

let tantoFaz: any = "1";
let retorno:void

//objeto
let produto:object = { 
    name: "Ariel",
    cidade: "SP",
    idade: 30
 };

 type ProdutoLoja = {
    nome: string;
    preco: number
    unidades:number;
 }

 let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 100,
    unidades:10,
 }