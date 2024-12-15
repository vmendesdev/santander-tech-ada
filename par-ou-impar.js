const listaDeNumeros = [25, 88, 71, 192, 333, 222, 11, 10, 62]
const listaDePares = []
const listaDeImpares = []
const contador = []
//A lista permite que o programa fique escalável 

let indiceDoNumero = 0 

while (contador < listaDeNumeros.length) {
    if (listaDeImpares [indiceDoNumero] % 2 === 0) {
        listaDePares.push(listaDeNumeros[indiceDoNumero]) 
    } else {
        listaDeImpares.push(listaDeNumeros[indiceDoNumero])
    }
    indiceDoNumero += 1
}

console.log(listaDePares)
console.log(listaDeImpares)