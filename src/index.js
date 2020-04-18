import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
app.disable('x-powered-by')

app.set('env', 'development')

//middleware morgan
app.use(morgan('tiny'))

//middleware body-parser
//parsea a json todo los que llega por una petición post
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) =>{
    res.end('Hola mundo')
})

app.listen('9000', () => {
    console.log('Servidor en marcha (Port:9000)')
})