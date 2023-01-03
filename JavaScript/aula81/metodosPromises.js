function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg != 'string') reject('BAD VALUE');
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');  
    } else {
        return esperaAi('Baixei a pagina',  3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO'));