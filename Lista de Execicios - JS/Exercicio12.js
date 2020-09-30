/*12) Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial (num){
    total = 1
    for(i=1;i<num;i++){
        total += total*i
    }
    return total
}

console.log(fatorial(5))
console.log(fatorial(3))
console.log(fatorial(6))
console.log(fatorial(8))
console.log(fatorial(7))
console.log(fatorial(4))

