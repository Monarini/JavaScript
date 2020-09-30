const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}

]

// Desafio 1: Todos os alunos são bolsista ?

// const todosBolsistas = (resultado,bolsista) => resultado && bolsista
//console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

const resultado = alunos.map(a=>a.bolsista).reduce(function(acumulador,valor){
    if (acumulador == false) {
        return false
    }else{
        return acumulador = valor
    }
})

console.log(resultado)

// Desafio 2: Algum dos alunos sé bolsista ?

//const algumBolsista = (resultado,bolsista) => resultado || bolsista
//console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))

const resultado2 = alunos.map(a=>a.bolsista).reduce(function(acumulador,valor){
    if (acumulador == true) {
        return true
    }else{
        return acumulador = valor
    }
})

console.log(resultado2)