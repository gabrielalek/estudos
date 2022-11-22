// try {
//     console.log(naoExisto);
// } catch (error) {
//     console.log('naoExisto nao existe');
// }

// function soma(x, y) {
//     if(
//         typeof x != 'number' || 
//         typeof y != 'number'
//     ) {
//         throw new Error('x e y precisam ser numeros');
//     }

//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2)); 
// } catch (error) {
//     console.log(error);
// }

// try {
//     //console.log(vaiDarErro);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e deu erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(vaiDarErro);
//     } catch (error) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Tambem sou finally')
//     }
// } catch (error) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de data');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (erro) {
    console.log(erro);
} finally {
    console.log('Tenha um bom dia!');
}
 