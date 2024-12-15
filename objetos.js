const animal = {
    especie: 'Canis Lupus',
    habitatComum: 'Florestas dos EUA',
    expectativaDeVida: 20,
    ehTerrestre: true
}

console.log(animal.ehTerrestre)
console.log(animal.especie)
console.log(animal.populacao)

animal.populacao = 1_000 
animal.populacao = 6 * 10 ** 9 // 600_000_000

console.log(animal.populacao)
