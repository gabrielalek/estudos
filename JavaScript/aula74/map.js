const pessoas = [
    { id: 3, nome: 'Gabriel'},
    { id: 2, nome: 'Andre'},
    { id: 1, nome: 'Pedro'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }) ;
}

for (const pessoa of novasPessoas) {
    console.log(pessoa);
}

console.log(novasPessoas);