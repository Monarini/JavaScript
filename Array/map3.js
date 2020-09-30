Array.prototype.map2 = function(callback){
    const novoArray = []
    for(let i = 0; i<this.length;i++){
        novoArray.push(callback(this[i],i,this))
    }
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços
const elementosCarrinho = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


const resultado = carrinho.map2(elementosCarrinho).map2(apenasPreco)

console.log(resultado)