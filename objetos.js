//const listaCPFs = ["12345678900", "98765432100", "11122233344"];
//const infosPessoa = ['nome', 'José', 'idade', 30];

const infosPessoa = {
    nome: "José",
    idade: 30,
    cpf: "12345678900",
    email: "jose@gmail.com"
};

console.log(infosPessoa.nome);
console.log(infosPessoa.idade);
console.log(infosPessoa.cpf);
console.log(infosPessoa.email);

function exibeInfoEstudante(objEstudante, Info) {
    return objEstudante[Info];
}

console.log(exibeInfoEstudante(infosPessoa, "nome"));

infosPessoa.pet = "cachorro";
console.log(infosPessoa);