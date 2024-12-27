const {DateTime, Interval} = require('luxon')

const agora = DataTransferItem.now()
console.log(agora)
console.log(new Date().toLocaleDateString())
console.log(new Date().toLocaleDateString('en-Us'))
//console.log(new Date().getMonth())

//calcular idade 
const dataDoAniversario = DateTime.fromFormat('01/10/1998', 'dd/mm/yyyy')
console.log(dataDoAniversario.day)
console.log(dataDoAniversario.month)

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year')
console.log(Math.floor(idade))

const isoDate = '2020-11-19T2:22:00-0300'
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300'

console.log(DateTime.fromIso(isoDate).toLocaleDateString())
console.log(DateTime.fromRFC2822(RFC).toLocaleDateString())