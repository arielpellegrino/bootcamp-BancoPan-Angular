
class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso =peso;
        this.altura = altura;
    }

    IMC(peso, altura) {
        return peso / (altura * altura)
    }

}

const ariel = new Pessoas
console.log(ariel.IMC(70, 1.75))