/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média
e a sua classificação conforme tabela abaixo

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
 - Media menor que 5, reprovação;
 - Media entre 5 e 7, recuperaçao;
 - Média acima de 7, passou de semestre;
 */

const status = ['Reprovação', "recuperação", "Passou de semestre"]
const nota1 = 7;
const nota2 = 8;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if (media <= 5){
    console.log(status[0]);
} else if (media >= 5 && media <= 7){
    console.log(status[1]);
} else if (media >= 7){
    console.log(status[2]);
}