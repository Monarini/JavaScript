/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function verificaNumero(num){
    if(num % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(9))
console.log(verificaNumero(10))
console.log(verificaNumero(11))
console.log(verificaNumero(12))
console.log(verificaNumero(333))