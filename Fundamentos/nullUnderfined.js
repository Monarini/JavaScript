let valor // não inicializar
console.log(valor)

valor = null
console.log(valor)// ausência de valor

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir underfined
// delete produto.preco - Para excluir um atributo.
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)
