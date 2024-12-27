const dns = require ('node:dns')

// const ipv4 = dns.resolve4(urlPesquisada, (err, addresses) => {
//     if (err) {
//         console.log('url não encontrada')
//         return
//     }
//     console.log(addresses)
// })


// resolver.setServers(nameServers[1] ?? 'ns1.google.com') alternativa mais sucinta

async function bootstrap () {
    const searchedUrl = 'google.com'

    console.time('pesquisando url por DNS padrão')
    const addresses = await dns.promisses.resolve4(searchedUrl)
    console.timeEnd('pesquisando url por DNS padrão')
    console.log(addresses)

    const nameServers = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(nameServers[1] ? nameServers[1] : 'ns1.google.com') 

    console.time('pesquisando url por DNS especifico')
    const addressesWithResolver = resolver.resolve4(searchedUrl, (error, addresses) => {
        if (error) {
            console.log('não foi possivel encontra o ipv4')
        }
        console.timeEnd('pesquisando url por DNS especifico')
        console.log(addressesWithResolver)
    })
    
}

bootstrap()