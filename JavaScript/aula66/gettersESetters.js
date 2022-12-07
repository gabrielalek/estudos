function Produto(nome, preco, estoque) {
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor != 'number') {
                throw new TypeError('O valor digitado não é um número')
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome)

// const p1 = new Produto('Camiseta', 20);
// p1.estoque = 500;
// console.log(p1.estoque)