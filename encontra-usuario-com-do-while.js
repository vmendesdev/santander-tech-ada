//const listaDeContatos = ["Paulo", "Selina", "Roger", "Rubens", "Josué", "Nathália", "Bianca"]
const listaDeContatos = ["Paulo", "Selina", "Roger", "Rubens", "Zeca", "Josué", "Nathália", "Bianca"]


let encontrouUsuarioOuPercorreuLista = false
let indiceDoUsuario = 0 

do {
    console.log('Rodei?')
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreuLista = true
        console.log(`Usuário Encontrado: ${usuarioAtual}`
        )
    }
    indiceDoUsuario = indiceDoUsuario + 1

    if (indiceDoUsuario === listaDeContatos.length) {
        encontrouUsuarioOuPercorreuLista = true
        console.log('Usuário não foi encontrado')
    }
} while (!encontrouUsuarioOuPercorreuLista)