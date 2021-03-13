const prompt = require('prompt-sync')();

function entradaUsuario(opcao){
    let numeros = [];
    let array = [];
    if(opcao<5){
        numeros.push(Number(prompt('Digite o primeiro número: ')));
        numeros.push(Number(prompt('Digite o segundo número: ')));
        return numeros;
    }else{
        console.log("OBS: Digite os valores separando-os por traço exemplo: 10-10-10-10-10 ");
        array = prompt('Digite os valores: ');
        return array;
    }

}

module.exports = entradaUsuario;