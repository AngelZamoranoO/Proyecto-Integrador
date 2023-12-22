const Router = require('express')
const router = Router()
const adminController = require('../controller/adminController')

// corresponde las rutas para las paginas web index desde el backend
router.get('/', adminController.admin)
router.get('/create', adminController.create)

router.post('/create', (req,res) =>{
    res.send()
})

router.get('/edit/:id', adminController.edit)

router.put('/edit/:id', (req,res) =>{
    res.send()
})

router.delete('/delete', (req,res) =>{
    res.send()
})

module.exports = router