// const nome = 'Gabriel';
// const sobrenome = 'Alex';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome; 
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// module.exports.nome = 'Luiz';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser';

const nome = 'Gabriel'
const sobrenome = 'Alex'

exports.nome = nome; 
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';
