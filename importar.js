
// import estudante from './estudante.json'
const estudante = require('./estudante.json');

//console.log(estudante);

const chaves = Object.keys(estudante);
console.log(chaves);

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);