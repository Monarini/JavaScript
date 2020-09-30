// Função sem retorno em JS
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 5, 6)
imprimirSoma()

//Função com retorno em JS
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())