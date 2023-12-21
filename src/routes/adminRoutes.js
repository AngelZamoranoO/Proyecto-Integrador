const Router = require('express')
const router = Router()
const adminController = require('../controller/adminController')

// corresponde las rutas para las paginas web index desde el backend
router.get('/', adminController.admin)
router.get('/admin/create', (req,res) =>{
    res.send()
})

router.post('/admin/create', (req,res) =>{
    res.send()
})

router.get('/admin/edit/:id', (req,res) =>{
    res.send()
})

router.put('/admin/edit/:id', (req,res) =>{
    res.send()
})

router.delete('/admin/delete', (req,res) =>{
    res.send()
})

module.exports = router