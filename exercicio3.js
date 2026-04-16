const aluno = {
    nome: 'Marina',
    notas: [4, 7, 8, 10],

    calcularMedia: function () {
        const soma = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = soma / this.notas.length;
        return media.toFixed(2);
    },

    classificarDesempenho: function() {
        const media = this.calcularMedia();
        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho Insulficiente';
        }
    }
}

const mediaCalculada = aluno.calcularMedia();
console.log(`${aluno.nome} tem uma média de notas de ${mediaCalculada}.`);

const categoriaDesempenho = aluno.classificarDesempenho();
console.log(`${aluno.nome} possui: ${categoriaDesempenho}.`);

console.log('==================================')

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: "Cinza"
};

console.log('Propiedades iniciais do carro:')
for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`)
}

carro.cambio = 'Automático';
carro.kmRodados = 5000;
carro.ligado = true;
carro.ligar = function () {
    if (this.ligado === true) {
        console.log('O carro está ligado')
    } else {
        console.log('O carro está desligado')
    }
}

console.log('Propiedades Atualizadas:');

for (let p in carro) {
    console.log(`${p}: ${carro[p]}`);
}