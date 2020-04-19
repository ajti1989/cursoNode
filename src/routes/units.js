import express from 'express'

const router = express.Router()

router.get('/temario', (req, res) => {
    res.render('temario',{
        temarios: ["ciencias","matemáticas", "fisica"]
    })  
    res.end()
})

export default router