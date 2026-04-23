const estudantes = require('./estudantes.json');

function buscaInfo(lista, chave, valor) {
    return lista.find((aluno) => aluno[chave].includes(valor));

}

const alunoEncontrado = buscaInfo(estudantes, 'nome', 'Juliet');
console.log(alunoEncontrado);

const alunoTelefones = buscaInfo(estudantes, 'telefone', '99916828153');
console.log(alunoTelefones);

function filtrarPorPropiedade(lista, propiedade) {
    return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propiedade);
    })
}

const listaComEnderecoCompleto = filtrarPorPropiedade(estudantes, 'cep');
console.log(listaComEnderecoCompleto);

function ordenaLista(lista, propiedade) {
    return lista.sort((a, b) => {
        if (a[propiedade] < b[propiedade]) return -1;
        if (a[propiedade] > b[propiedade]) return 1;
        return 0;
    })
}

const listaOrdenada = ordenaLista(estudantes, 'nome');
console.log(listaOrdenada);
