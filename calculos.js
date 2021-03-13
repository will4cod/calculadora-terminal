
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
    },
    media: function media(array){
        let entradaUsuario = array;
        let numeroCortados = entradaUsuario.split('-');
        let somaNumeros = 0;
        let pontoMedia = 0;
        let resultado;

        for(var i = 0;i<numeroCortados.length;i++){
            pontoMedia++;
            somaNumeros = somaNumeros + parseInt(numeroCortados[i].trim());
        }
        
        resultado = somaNumeros/pontoMedia;

        return resultado;
    }    
    
}


module.exports = calcula;