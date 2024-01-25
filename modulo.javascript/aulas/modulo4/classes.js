class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const joao = new Pessoa('Ariel', 31);
const pedro = new Pessoa();



console.log(joao.descrever())
console.log(pedro.descrever())