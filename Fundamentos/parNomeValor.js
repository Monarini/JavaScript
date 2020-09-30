// Par nome/valor 
const saudacao = 'Olá' //contexto léxico 1

function exerc(){
    const saudacao = 'Fala' // contexto léxico 2 
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 30,
    peso: 90,
    ederenco: {
        lougradouro: 'Rua França',
        numero: 628
        
    }
}

console.log(saudacao)
console.log(exerc())
console.log(cliente)