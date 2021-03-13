const prompt = require('prompt-sync')();

function entradaUsuario(opcao){
    let num1 = 0;
    let num2 = 0;
    let array = [];
    if(opcao<5){
        num1 = Number(prompt('Digite o primeiro número: '));
        num2 = Number(prompt('Digite o segundo número: '));
        return num1;
    }else{
        console.log("OBS: Digite os valores separando-os por traço exemplo: 10-10-10-10-10 ");
        array = prompt('Digite os valores: ');
        return array;
    }

}

module.exports = entradaUsuario;