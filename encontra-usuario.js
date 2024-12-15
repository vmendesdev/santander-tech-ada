const listaDeContatos = ["Paulo", "Selina", "Roger", "Rubens", "Zeca", "Josué", "Nathália", "Bianca"]

let encontrouUsuario = false 
let contador = 0
//solução 1, erro no startsWith
while (!encontrouUsuario) {
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if (usuarioAtual.startsWith('Z')){
        encontrouUsuario = true 
    }
    indiceDoUsuario = indiceDoUsuario + 1 

    if (indiceDoUsuario === listaDeContatos.length){
    encontrouUsuario = true 
    console.log("Usuario não foi encontrado")
    }
}