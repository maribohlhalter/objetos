const pessoa = {
    nome: 'Arthur',
    idade: 30,
    solteiro: true, 
    hobbies: ['futebol', 'música', 'viagens'],
    endereco : {
    rua: 'Rua Exemplo',
    numero: 123,
    cidade: 'Cidade Exemplo'
}
}



function mostrarPessoa(obj) {
    console.log(`Nome: ${obj.nome}, Tipo: ${typeof obj.nome}`);
    console.log(`Idade: ${obj.idade}, Tipo: ${typeof obj.idade}`);
    console.log(`Solteiro: ${obj.solteiro}, Tipo: ${typeof obj.solteiro}`);
    console.log(`Hobbies: ${obj.hobbies}, Tipo: ${typeof obj.hobbies}`);
    console.log(`Endereço:
        Rua: ${obj.endereco.rua}, Tipo: ${typeof obj.endereco.rua}
        Número: ${obj.endereco.numero}, Tipo: ${typeof obj.endereco.numero}
        Cidade: ${obj.endereco.cidade}, Tipo: ${typeof obj.endereco.cidade}`);
}

mostrarPessoa(pessoa);

const moradores = [{
    nome: 'Maria',
    idade: 25,
    cidade: 'SA'
}, {
    nome: 'João',
    idade: 28,
    cidade: 'RJ'
}, {
    nome: 'Ana',
    idade: 22,
    cidade: 'RJ'
}];

function mostrarMoradores(lista) {
    console.log('Lista de Moradores:');
    console.log('-------------------');
    lista.forEach(element => {
        console.log(`Nome: ${element.nome}, Idade: ${element.idade}, Cidade: ${element.cidade}`);
    });
}

moradores.push({
    nome: 'Carlos',
    idade: 35,
    cidade: 'SP'
})

mostrarMoradores(moradores);

//

const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b ===0) {
            return 'erro: divisão por zero';
        } else {
            return a / b;
        }
    },
    media: function(arr) {
        const soma = arr.reduce((acc, val) => acc + val, 0);
        return soma / arr.length;
    }
}

console.log(calculadora.somar(5, 3)); // 8
console.log(calculadora.subtrair(5, 3)); // 2
console.log(calculadora.multiplicar(5, 3)); // 15
console.log(calculadora.dividir(5, 3)); // 1.6666666666666667
console.log(calculadora.media([1, 2, 3, 4, 5])); // 3

//

const contaBancaria = {
    titular: 'Arthur',
    saldo: 1000,
    depositar: function(valor) {
           return this.saldo += valor;
        },
    sacar: function(valor) {
        if (valor > this.saldo) {
            return 'Saldo insuficiente';
        } else {
            return this.saldo -= valor;
        }
    } 
}

console.log(contaBancaria.depositar(500));