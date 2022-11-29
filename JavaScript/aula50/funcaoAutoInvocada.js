// IIFE -> Immediately Invoked Function Expression

(function(idade, peso, altura) {
    
    const sobrenome = 'Alex'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Gabriel'));
    }

    falaNome();
})();
