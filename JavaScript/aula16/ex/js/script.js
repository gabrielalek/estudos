const numero = Number(prompt("Digite um numero: "));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu numero -2 eh <strong>${numero -2}</strong>.</p>`;
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong> </p>`;
texto.innerHTML += `<p>${numero} eh inteiro: <strong>${Number.isInteger(numero)}</strong> </p>`;
texto.innerHTML += `<p>Eh Nan: <strong>${Number.isNaN(numero)}</strong> </p>`;
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong> </p>`;
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;