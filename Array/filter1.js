const produtos = [
    {nome:'Notebook', preco: 2499 , fragil: true},
    {nome:'Ipad pro', preco: 4199 , fragil: false},
    {nome:'Copo de vidro', preco: 12.49 , fragil: true},
    {nome:'Copo de plastico', preco: 18.99 , fragil: false}
]


console.log(produtos.filter(function(p){    
    //return p.preco > 2400
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))