const estudante = {
    nome: "Maria",
    idade: 22,
    curso: "Engenharia de Software",
    universidade: "Universidade XYZ",
    bolsista: true,
    telefone: ["123-456-7890", "987-654-3210"],
    enderecos: [{
        rua: "Rua Exemplo",
        numero: 123,
        cidade: "Cidade Exemplo"
    },
    {
        rua: "Rua das Flores",
        numero: 456,
        cidade: "Santos"
 }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
         const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
    } 
   
}


const chaveObjetos = Object.keys(estudante)
console.log(chaveObjetos)

 if (!chaveObjetos.includes('enderecos')) {
     console.error('É necessário incluir um endereço.')
}

function exibirTelefones (telefone1, telefone2) {
console.log(`o número de telefone é ${telefone1}`)
console.log(`o número de telefone é ${telefone2}`)
}

exibirTelefones(...estudante.telefone)

const envio = {
    destinatario: estudante.nome,
    //endereco: estudante.enderecos[0]
    ...estudante.enderecos[0]
}

console.log(envio);