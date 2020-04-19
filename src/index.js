import path from 'path'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import router from './router'

const app = express()

//desactiva el "avisador" de que está hecho con express
app.disable('x-powered-by')

//define que está en estado de desarrollo
app.set('env', 'development')

//middleware morgan (se pueden configurar como muestra los log)
app.use(logger('tiny'))

//middleware body-parser
//parsea a json todo los que llega por una petición post
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//vistas
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//enrutado

router(app)





//middleware para error 404, se puede mejorar
app.use((req,res,next) => {
    res.render('404',{
        title: 'Error-404',
        message: 'No existe la ruta'
    })
    next()
})


//enrutar elementos estáticos
app.use('/static', express.static(path.join(__dirname, 'public')))

//server lanzado en el puerto 9000
app.listen('9000', () => {
    console.log('Servidor en marcha (Port:9000)')
})