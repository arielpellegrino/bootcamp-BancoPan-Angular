type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi){
    console.log(pessoa)
}

console.log(printaObjeto({
    name: "bruce wayner",
    vulgo: "Batman",
}))