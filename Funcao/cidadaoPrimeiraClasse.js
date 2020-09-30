// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de formar literal

function fun1(){ }

//Armazenar uma funçao em uma variavel
const fun2 = function(){}

//Armazenar função dentro de um array

const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function (){return'Opa'}
console.log(obj.falar())

// Passar uma função como paramento para outra.
function run (fun){
    fun()
}
run(function(){ console.log('Executando...')})

//Um função pode retorna/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)