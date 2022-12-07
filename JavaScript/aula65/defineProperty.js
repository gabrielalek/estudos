function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque,    // valor
        writable: true,    // pode alterar ou nao o valor
        configurable: true // configuravel ou nao
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,  
            value: nome,    
            writable: true,    
            configurable: true 
        },
        preco: {
            enumerable: true,  
            value: preco,    
            writable: true,   
            configurable: true 
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)