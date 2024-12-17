const path = require('node:path')
//usando o node, evitamos o conflito com arquivos maliciosos.
const fs = require('node:fs')
const filePath = path.join(process.cwd(), 'introducao-node-js', 'texto.txt')

fs.readFile(filePath, {}, (erro,dados) => {
    if(erro) {
        console.log(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    // const texto = dados.toString()
    //const linhas = texto.split('\n)
    //linhas.forEach((linha,index, arrayDeLinhas) => 
        //console.log(`${index + 1} - ${linha}`))

    console.log(dados.toString())
    //conversão de hexadecimal para string/texto
})
console.log(filePath)