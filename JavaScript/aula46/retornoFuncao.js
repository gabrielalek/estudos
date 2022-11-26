// return: Retorna um valor, termina a função
// function soma (a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a + b);
// }

// console.log(soma(5, 2));
// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// })

// function criaPessoa(nome, sobrenome) {
//     return { nome: nome, sobrenome: sobrenome };
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// const p2 = {
//     nome: 'Joao',
//     sobrenome: 'Oliveira'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Ola');
// console.log(olaMundo('mundo'));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));