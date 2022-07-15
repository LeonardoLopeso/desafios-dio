// #### Resposta do desafio 02
// Como podemos melhorar o esse código usando TS? 

interface IPeople {
    nome: string,
    idade: number,
    profissao?: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}

let pessoa1: IPeople = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.profissao);

let pessoa2: IPeople = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.profissao);

let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 = {} as IPeople;

pessoa4.nome = "carlos";
pessoa4.idade = 19;
pessoa4.profissao = Profissao.Padeiro