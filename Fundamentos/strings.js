const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat('!'))//1-concatenar Strings
console.log('Escola ' + escola + '!') //2-concatenar Strings
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))//Criar um array a partir de uma String usando o .split(',')