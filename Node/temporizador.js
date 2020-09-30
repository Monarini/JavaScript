const schedule = require('node-schedule')

const regra1 = new schedule.RecurrenceRule()
regra1.dayOfWeek = [new schedule.Range(1.5)]
regra1.hour = 16
regra1.second = 5

const tarefa1 = schedule.scheduleJob(regra1,function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando essa tarefa')
},200000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})