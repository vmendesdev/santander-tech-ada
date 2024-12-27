const crypto = require('node:crypto')

const chave = crypto.randomBytes(12).toString('base64')
console.log(chave)

//muito utilizado em banco de dados
const uuid = crypto.randomUUID()
console.log(uuid)

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
})

console.log(privateKey)
console.log(publicKey)