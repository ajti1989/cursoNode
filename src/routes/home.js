import express from 'express'

const router = express.Router()

router.get('/', (req, res) =>{
    res.render('home',{
        title: 'Página de temarios',
        message: 'Pincha el enlace para continuar'
    })
    res.end()
})

export default router