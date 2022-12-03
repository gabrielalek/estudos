// Filter -> sempre retorna um array com a mesma quantidade de elementos, ou menos.

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeGrande, pessoasMaisCinquentaAnos, pessoasNomeTerminaComA);