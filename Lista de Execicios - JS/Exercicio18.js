function escreveNumero(numero){
    switch(numero){
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Tres'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7: 
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        case 0:
            return 'Zero'
        default:
            return'Numero fora do intervalo!'
    }
}

console.log(escreveNumero(0))
console.log(escreveNumero(1))
console.log(escreveNumero(2))
console.log(escreveNumero(3))
console.log(escreveNumero(4))
console.log(escreveNumero(5))
console.log(escreveNumero(6))
console.log(escreveNumero(7))
console.log(escreveNumero(8))
console.log(escreveNumero(9))
console.log(escreveNumero(10))
console.log(escreveNumero(11))