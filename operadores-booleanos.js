if (true) {
    console.log('Sempre aparecerei')
}

if (false) {
    console.log('Nunca aparecerei')
}

//const numero1 = 100
console.log(100 > 20)

// or/ou: ||
// Expressões com ou sempre retornam verdadeiro (true) a menos que todos os termos sejam falsos (false)
console.log(true || true) 
console.log(true || false)
console.log(false|| true)
console.log(false || false)

console.log (1 < -20 || 100 < 5 || 20 > 50 || 40 > 3000) // Exemplo de FALSE
console.log (1 < -20 || 100 < 5 || 20 > 50 || 40 > 3000 || 20 > 50) // Exemplo de TRUE


// and/e: &&
// Apenas com todas as expressões TRUE será verdadeira
console.log(true && true) 
console.log(true && false)
console.log(false && true)
console.log(false && false)