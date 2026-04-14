const estudante = {
    nome: "Maria",
    idade: 22,
    curso: "Engenharia de Software",
    universidade: "Universidade XYZ",
    bolsista: true,
    telefone: ["123-456-7890", "987-654-3210"],
    endereco: {
        rua: "Rua Exemplo",
        numero: 123,
        cidade: "Cidade Exemplo"
    }
}

console.log(estudante.endereco.rua); // Acessando o valor da rua
console.log(estudante.telefone[0]); // Acessando o primeiro número de telefone

const estudante2 = {
    nome: "João",
    idade: 25,
    curso: "Medicina",
    universidade: "Universidade ABC",
    bolsista: false,
    telefone: ["555-123-4567"],
    endereco: [{
        rua: "Avenida Exemplo",
        numero: 456,
        cidade: "Santo André",
        complemento: "Apartamento 101"
    }]
}

estudante2.endereco.push({
    rua: "Rua Nova",
    numero: 789,
    cidade: "São Paulo",
    complemento: ""
})

console.log(estudante2.endereco); // Acessando o array de endereços
console.log(estudante2.endereco[0].cidade); // Acessando a cidade do primeiro endereço

const listaEnderecosComComplemento = estudante2.endereco.filter((endereco) => endereco.complemento !== "");

console.log(listaEnderecosComComplemento); // Exibindo os endereços com complemento

const estudante3 = {
    nome: "Ana",
    idade: 20,
    curso: "Arquitetura",
    universidade: "Universidade DEF",
    bolsista: true,
    telefone: ["321-654-0987"],
    media: 8.5,
    estaAprovada: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}