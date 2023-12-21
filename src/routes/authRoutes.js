const Router = require('express')

const router = Router()
const controller = require('../controller/authController')

router.get('/login', controller.login)

router.post('login', (req,res) =>{
    res.send()
})
router.get('/register',controller.register);

router.post('/register', (req,res) =>{
    res.send()
})

router.delete('/logout', (req,res) =>{
    res.send()
})

module.exports = router