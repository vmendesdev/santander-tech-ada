const user = {
    name: 'JoSÉ mAriA',
    email: 'JOSE.M1@gmail.com',
    idade: 23,
    endereco: 'X Street'
}

//for (const key in user) {
//    if(key === 'name' || key === 'email') 
//        user[key] = user[key].toLowerCase()
//    }
//    console.log(user)

for (const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ')
        user[key] = ''
        for (const name of names) {
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim()
        }
    }
    if (key === 'email') {
        user[key] = user[key].toLowerCase()
    }
}

console.log(user)