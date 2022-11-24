// Declaração de função (function hoisting)

function falaOi () {
    console.log('oi');
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

function executaFuncao (funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
