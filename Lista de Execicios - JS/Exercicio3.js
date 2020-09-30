/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente*/

function potencia (base,exp){
    //metodo antigo
    let resultado = Math.pow(base,exp)
    //metodo novo
    resultado = base ** exp

    return resultado
}

console.log(potencia(2,3))