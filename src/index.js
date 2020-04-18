import http, { request } from 'http'

const server = http.createServer((request, response) => {
    if(request.method === 'GET'){
        response.write('<h1>Metodo no permitido</h1>')
        response.end()
    }
    response.write('<h1>estás accediendo a un servidor</h1>')
        response.end()
})

server.listen(8000, 'localhost', err => {
    if (err){
        return console.log('Error: ', err)
    }

    console.log('Server abierto en http://LOCALHOST:8000')
})