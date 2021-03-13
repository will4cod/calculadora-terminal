const prompt = require('prompt-sync')();
const menuEscolha = require('./menu');
const entradaUsuario = require('./entradaDados');
let calculadora = require('./calculos');

console.log('Bem vindo ao sistema\n');

let opcaoMenu = menuEscolha();
let entrada = [];

while(opcaoMenu > 0){
    if(opcaoMenu > 5){
        console.log('opção invalida');
        opcaoMenu = menuEscolha();
    }
    
    if(opcaoMenu == 1){
        entrada = entradaUsuario(opcaoMenu);
        console.log('Resultado da soma: ' + calculadora.soma(entrada[0],entrada[1]));
        break;
    }else if(opcaoMenu == 2){
        entrada = entradaUsuario(opcaoMenu);
        console.log('Resultado da subtracao: ' + calculadora.subtracao(entrada[0],entrada[1]));
        break;
    }else if(opcaoMenu == 3){
        entrada = entradaUsuario(opcaoMenu);
        console.log('Resultado da divisao: ' + calculadora.divisao(entrada[0],entrada[1]));
        break;
    }else if(opcaoMenu == 4){
        entrada = entradaUsuario(opcaoMenu);
        console.log('Resultado da multiplicacao: ' + calculadora.multiplicacao(entrada[0],entrada[1]));
        break;
    }else if(opcaoMenu == 5){
        console.log('Resultado da média: ' + calculadora.media(entradaUsuario(opcaoMenu)));
        break;
    }

}

console.log("Tenha um bom dia e volte sempre!!");