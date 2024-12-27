const { query } = require('express')
const { url } = require('node:inspector')
const querystring = require('node:querystring')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'verão'
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

const parseUri = querystring.parse(uri)
console.log(uri)
console.log(parseUri)
console.log(parseUri.destino)
console.log(url.parse)

const uri2 = querystring.escape('São Paulo')

console.log(uri2)
const unescapeduri2 = querystring.unescape(uri2) 
console.log(unescapeduri2)
