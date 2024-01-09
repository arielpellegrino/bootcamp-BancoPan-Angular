const pessoa = {
    nome: 'Ariel',
    idade: 31,
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

};

pessoa.descrever()