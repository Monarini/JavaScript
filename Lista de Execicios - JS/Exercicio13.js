/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const verificarDiaDaSemana = function (dia){
    switch(dia){
        case 1:
        case 7:
            console.log('Fim de Semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia Util')
            break
        default:
            console.log('Dia da semana invalido !')
            break
    }
}

verificarDiaDaSemana(1)
verificarDiaDaSemana(2)
verificarDiaDaSemana(7)
verificarDiaDaSemana(5)
verificarDiaDaSemana(33)