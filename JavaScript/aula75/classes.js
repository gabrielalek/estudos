class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Gabriel', 'Alex');
const p2 = new Pessoa('Maria', 'Silva');
const p3 = new Pessoa('Joana', 'Alex');
const p4 = new Pessoa('Pedro', 'Alex');
