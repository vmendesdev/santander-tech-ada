const { rejects } = require('assert')
const { resolve } = require('path')
const rl = require('readline')
//Criando uma interface para interagir com o usuario
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
    close: () => prompt.close()
} 

//prompt.question('Qual seu número favorito?: ',(resposta) => {
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

   const cor = await promptPromise.question('Qual sua cor favorita?: ')
   console.log(`Sua cor favorita é ${cor}`)
   promptPromise.close
}

askUser()
