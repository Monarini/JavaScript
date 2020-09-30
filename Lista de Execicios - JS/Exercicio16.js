/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

const calculadora = function (num1, num2, operacao){
    switch(operacao){
        case 'soma':
            console.log(num1 + num2)
            break
        case 'sub':
            console.log(num1 - num2)
            break
        case 'mult':
            console.log( num1*num2)
            break
        case 'div':
            console.log( num1/num2)
            break
        default:
            console.log('Opção invalida !!!')
            break

    }
}

calculadora(10,5,'soma')
calculadora(10,5,'div')
calculadora(10,5,'mult')
calculadora(10,5,'div')
calculadora(10,5,'kkk')