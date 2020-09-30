Array.prototype.filter2 = function (callback){
    const newFilter = []
    for(let i=0; i<this.length; i++){
        if (callback(this[i],i,this)) {
            newFilter.push(this[i])
        }
    }
    return newFilter
}

const produtos = [
    {nome:'Notebook', preco: 2499 , fragil: true},
    {nome:'Ipad pro', preco: 4199 , fragil: false},
    {nome:'Copo de vidro', preco: 12.49 , fragil: true},
    {nome:'Copo de plastico', preco: 18.99 , fragil: false}
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))