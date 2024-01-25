/*
Calculo IMC

formula:
 - IMC = peso / (altura * altura)

IMC condiçoes adultos
- Abaixo de 18.5 abaixo do peso
- Entre 18.5 e 25 peso normal
- Entre 25 e 30 acima do peso
- Entre 30 e 40  Obeso
- Acima de 40 obesidade grave
*/

const altura = 1.70;
const peso = 70;
const IMC = peso / (altura * altura);
console.log(IMC);

if (IMC < 18.5) {
    console.log('abaixo do peso')
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('peso normal')
} else if (IMC >= 25 && IMC <= 30) {
    console.log('acima do peso')
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Obeso')
} else if (IMC > 40){
    console.log('obesidade grave')
}
