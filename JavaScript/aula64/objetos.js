// const pessoa = {
//     nome: 'Gabriel',
//     sobrenome: 'Alex'
// };

// const pessoa1 = new Object();
// pessoa1.nome = 'Gabriel';
// pessoa1.sobrenome = 'Alex';
// pessoa1.idade = 32;

// pessoa1.falarNome = function(){
//     return (`${this.nome} esta falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// pessoa1.falarNome();
// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//     console.log(chave);
// }


// FACTORY FUNCTION
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Gabriel', 'Alex');
// console.log(p1.nomeCompleto());

// CONSTRUCTOR FUNCTION
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this
const p1 = new Pessoa('Gabriel', 'Alex');
console.log(p1);

const p2 = {};
p2.nome = 'Gabriel';