const numero1 = 100
const numero2 = 20

const numeroCorreto = 30
const stringDeNumero = '20'

if (numero1 > 1) {
    console.log('Este número é maior que 1')
}

if (numero1 > 200) {
    console.log('Este número é maior que 200')
}
else {
    console.log('Este número é menor que 200')
}

if (numero2 <= numero1) {
    console.log(`${numero2} é menor ou igual a ${numero1}`)
}
//testando igualdade e atribuição - não recomendado e apresentado para identificar bugs
if (numeroCorreto === stringDeNumero) {
    console.log('Os números são iguais em valor e tipo')
}
else {
    console.log('Os números são iguais em valor apenas')
}