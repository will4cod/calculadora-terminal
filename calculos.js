
let calcula = {
    soma: function soma(num1, num2) {
        return num1 + num2;
    },
    subtracao: function subtracao(num1, num2) {
        return num1 - num2;
    },
    divisao: function divisao(num1, num2) {
        return num1 / num2;
    },
    multiplicacao: function multiplicacao (num1, num2) {
        return num1 * num2;
    }    
    
}


module.exports = calcula;

//(num1,num2, operacao) => {if(operacao == 'soma'){return soma(num1,num2)}else if(operacao == 'subtracao'){return subtracao(num1,num2)} };