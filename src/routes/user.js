import express from 'express'

const router = express.Router()

router.get('/:user', (req, res) => {
    res.render('user',{
        user: `Hola ${req.params.user}`
    })
})
router.get('/:user/bio', (req, res) => {
    res.render('user-bio',{
        user: `${req.params.user}`
    })
})

export default router