function calcularAumento(salario, plano){
    switch(plano){
        case 'A':
            return salario *1.1
        
        case 'B':
            return salario * 1.15
        
        case 'C':
            return salario * 1.2
        
        default:
            return 'Opção Invalida'
    }
}

console.log(calcularAumento(1000,'A'))
console.log(calcularAumento(1000,'B'))
console.log(calcularAumento(1000,'C'))
console.log(calcularAumento(1000,'F'))
