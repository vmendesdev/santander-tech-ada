//Criando uma interface para interagir com o usuario
const { rejects } = require('assert')
const { resolve } = require('path')
const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin, 
    output: process.stdout
})

const promptPromise = {
    question: new Promise((resolve, reject) => {
try {
    prompt.question((pergunta), (resposta) => resolve(resposta))
} catch (error) {
    reject(error)
    }
}),
    close: prompt.close
}

// //prompt.question('Qual seu número favorito?: ',(resposta) => {
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)

//     prompt.question('Qual é sua cor favorita?: ',(resposta) => {
//         console.log(`O dobro do seu número favorito é: ${resposta}`)
//     prompt.close()

//         prompt.question('Qual sua cor favorita?: ', (resposta) => {
//             console.log(`Sua cor favorita é ${resposta}`)
//         prompt.close()

//         })
//     })
// })

async function askUser () {
   const numero = promptPromise.question('Qual seu número favorito?: ')
   console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)
}
