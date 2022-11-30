// Função construtora -> objetos
// Função fábrica -> objetos

function Pessoa(nome, sobrenome) {
    // Privados
    const Id = 123456;
    const metodoInterno = () => {
        // Exemplo de metodo
    }

    // Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Gabriel', 'Alex');
const p2 = new Pessoa('Joao', 'Jose');

p1.metodo();