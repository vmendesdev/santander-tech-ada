// criando o nosso proprio servidor
const { response } = require('express')
const http = require('http')

const server =  http.createServer ((request, response) => {
    const {method, statusCode, url} = request
    const sports = ['soccer', 'volley', 'basketball', 'tennis']

    if (url === '/') {
        response.write('Hello from node')
        response.end()
    }

    if (url === '/sports') {
        response.write(JSON.stringify(sports))
        response.end()
    }

    response.statusCode = 404
    response.write(<h1>Página não encontrada</h1>)
})

server.listen(3000, 'localhost', () => {
    console.log('server running on http://localhost:3000')
})
