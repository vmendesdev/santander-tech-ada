import express from 'express'
//import {Router} from 'express'
import { config } from 'dotenv'
import path from 'path'
import { readFileSync } from 'fs'

interface IUser [] = [
    {
    name: string
    age: number
    }
]

const users = [
    {
    name: 'Fulano',
    age: 
    },
    {
        name: 'Ciclano',
        age: 35
    }
]
// const app = Router ()

config() 
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300

// Poderia colocar rota de api
app.get('/', (request, response) => {
    const homePagePath = path.join(__dirname, 'home.html')
    const homePage = readFileSync(homePagePath)
    // return response.status(200).send('Hello World')
    return response.status(200).send(homePage)
})

app.get('/api', (request, response) => {
    return response.json(users)
}

app.listen(port,() => {
    console.log(`Serviddor rodando no endereço ${url}:${port}` )
})