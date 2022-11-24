
// arguments: sustenta todos os argumentos enviados
// function funcao([ valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Luiz Otavio', 'Miranda',  30]);

const conta = (...args) => {
    console.log(args);
};
conta('+', 0, 20, 30, 40, 50);
