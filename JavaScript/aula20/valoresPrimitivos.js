/*
Primitivos (imutáveis): string, number, boolean, undefined
null (bigint, symbol)

Referência (mutável): array, object, function
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b = a;

a.nome = 'Joao';
console.log(b);