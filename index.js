const prompt = require('prompt-sync')();
const menuEscolha = require('./menu');
let calculadora = require('./calculos');

console.log('Bem vindo ao sistema\n');

let opcaoMenu = menuEscolha();

while(opcaoMenu > 0){
    if(opcaoMenu > 4){
        console.log('opção invalida');
        opcaoMenu = menuEscolha();
    }
    
    if(opcaoMenu == 1){
        let num1 = Number(prompt('Digite o primeiro número: '));
        let num2 = Number(prompt('Digite o segundo número: '));
        console.log('Resultado da soma: ' + calculadora.soma(num1,num2));
        break;
    }else if(opcaoMenu == 2){
        let num1 = Number(prompt('Digite o primeiro número: '));
        let num2 = Number(prompt('Digite o segundo número: '));
        console.log('Resultado da subtracao: ' + calculadora.subtracao(num1,num2));
        break;
    }else if(opcaoMenu == 3){
        let num1 = Number(prompt('Digite o primeiro número: '));
        let num2 = Number(prompt('Digite o segundo número: '));
        console.log('Resultado da divisao: ' + calculadora.divisao(num1,num2));
        break;
    }else if(opcaoMenu == 4){
        let num1 = Number(prompt('Digite o primeiro número: '));
        let num2 = Number(prompt('Digite o segundo número: '));
        console.log('Resultado da multiplicacao: ' + calculadora.multiplicacao(num1,num2));
        break;
    }

}

console.log("Tenha um bom dia e volte sempre!!");