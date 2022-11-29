function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');

console.log(funcao(), funcao2());