/*
Gabriel Alex tem 20 anos, pesa 72kg
tem 1.68 de altura e seu IMC e de 23213123
Gabriel Alex nasceu em 1980
*/

const nome = "Gabriel";
const sobrenome = "Alex";
const idade = 20;
const peso = 72;
const alturaEmMetros = 1.68;

let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso/(alturaEmMetros * alturaEmMetros);
anoNascimento = 2022 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); 
console.log(`tem ${alturaEmMetros} m de altura e seu IMC e de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);