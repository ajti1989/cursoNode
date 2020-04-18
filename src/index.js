//socket comunicacion servidor-cliente cliente-servidor
//SERVIDOR
import net from 'net'

const server = net.createServer(socket => {
    socket.on('data',data => {
        console.log(data.toString())
        socket.write('mundo?')
    })
})

server.on('error',() => console.log('un error'))

server.listen({
    host:'localhost',
    port: '8000',
    exclusive: true
},
    () => console.log(`Servidor socket abierto en ${server.address()}`)
)

