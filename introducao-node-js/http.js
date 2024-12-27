// criando o nosso proprio servidor
//const { response } = require('express')
const http = require('http')

const server =  http.createServer ((request, response) => {
    const {method, statusCode, url} = request

    const bodyPromise = new Promise ((resolve, reject) => {
        let body 

        request.on('data', () => {
            body = JSON.parse(data)             
        })

        request.on('end', data = > {
            resolve(body)
        }) 
    })

    const sports = ['soccer', 'volley', 'basketball', 'tennis']

    if (url === '/') {
        response.write('Hello from node')
        response.end()
        return
    }

    if (url === '/sports') {
        if (method === 'GET') {
            response.write(JSON.stringify(sports))
            response.end()
            return
        }

        if (method === 'POST') {
            const body = await bodyPromise

            console.log(body)
        }
    }

    response.statusCode = 404
    response.write(<h1>Página não encontrada</h1>)
    response.end()
})

server.listen(3000, 'localhost', () => {
    console.log('server running on http://localhost:3000')
})
