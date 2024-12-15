const listaDeNumeros = [3, 131, 155, 555, 222, -21, -56]
const usuarios = ['José', 'Antônia']

// código imperativo 
//for (let contador = 0; contador < 100; contador += 1) {
//    console.log(contador)
//}

console.log(`Print via White \n`)
let indiceDoNumero = 0
while (indiceDoNumero < listaDeNumeros.length) {
    console.log(listaDeNumeros[indiceDoNumero])
    indiceDoNumero += 1
}

// código declarativo
//for (let numero of listaDeNumeros){
//    console.log(numero)
//}

console.log(`Print vid For \n`)
for (const numero of listaDeNumeros) {
    console.log(numero)
}

for (const usuario of usuarios) {
    console.log(usuario)
}