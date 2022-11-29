// Factory Function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        
        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Alex', 1.8, 80);
const p2 = criaPessoa('Joao', 'Alex', 1.9, 57);
const p3 = criaPessoa('Junior', 'Alex', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
