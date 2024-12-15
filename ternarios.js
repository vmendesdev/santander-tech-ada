const idade = 19
const temCNH = true 

let numeroDePassageiros = 0

const podeDirigir = idade > 18 && temCNH

if (podeDirigir) {
    console.log('Pessoa está habilitada para conduzir veículo')
    numeroDePassageiros = 4
}
else {
    console.log('Pessoa não está habilitada para conduzir veículo')
}

// console.log({numeroDePassageiros})
// const numeroDePassageiros = podeDirigir ? 4 : 0

// faz exatamente o mesmo que a const numeroDePassageiros
let numeroDePassageiros
if (podeDirigir) {
    numeroDePassageiros = 4 
} else {
    numeroDePassageiros = 0
}