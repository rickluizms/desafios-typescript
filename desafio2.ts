// Como podemos melhorar o esse código usando TS? 
//Resposta
interface pessoa {
    nome: string, 
    idade: number,
    profissao: string
}
//Pessoa 1
let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"

};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

//Pessoa 2
let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

//Pessoa 3
let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
pessoa3.nome = "laura";
pessoa3.idade = 32;
pessoa3.profissao = "Atriz"

//Pessoa 4
let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}
pessoa4.nome = "carlos";
pessoa4.idade = 19;
pessoa4.profissao = "padeiro"

