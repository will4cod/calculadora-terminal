const prompt = require('prompt-sync')();

function menu(){
    console.log('Menu\n 0 - sair \n 1 - Soma \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação \n 5 - Média');
    return prompt("Selecione a opção desejada: ");
}

function mostraMenuEnquantoOpcaoInvalida(){
    let opcaoMenu = Number(menu());
    while (!Number.isInteger(opcaoMenu)){
        console.log('!!Opção inválida, Digite um numero');
        opcaoMenu = Number(menu())
    }
    return opcaoMenu 
}



module.exports = mostraMenuEnquantoOpcaoInvalida;