let dobro = function(a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

dobro = a => 2 * a // return implicido
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um paramentro, porem poder ser ingnorado na execução

console.log(ola())