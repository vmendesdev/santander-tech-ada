const nomesDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca']

//console.log('Olá', nomesDeUsuarios[0])
//console.log('Olá', nomesDeUsuarios[1])
//console.log('Olá', nomesDeUsuarios[2])
//console.log('Olá', nomesDeUsuarios[3])

//let indiceDoUsuario = 0 //atalho F2 para renomear 
//const vezesQueDeveRodar = 4

//while (indiceDoUsuario < vezesQueDeveRodar) {
//    console.log('Olá', nomesDeUsuarios[indiceDoUsuario])
//   indiceDoUsuario = indiceDoUsuario + 1
//}

let indiceDoUsuario = 0 
const indiceAtual = nomesDeUsuarios.length
console.log({ indiceAtual})

while (indiceDoUsuario < indiceAtual) {
    console.log('Olá', nomesDeUsuarios[indiceDoUsuario])
    indiceDoUsuario = indiceDoUsuario + 1 
//    indiceDoUsuario += 1
}