const Router = require('express')
const shopControllers = require('../controller/shopController')

const router = Router()

// corresponde las rutas para las paginas web index desde el backend
router.get('/shop', (req,res)=>res.sendFile('ruta del shop'));
router.get('/shop/item/:id', (req,res)=>res.sendFile('ruta del shop con :id item'));
router.post('/shop/item/:id/add', (req,res)=> res.sendFile('ruta del shop con :id item para agregar'))
router.get('/shop/cart', (req,res)=>res.sendFile('ruta del carrito'))
router.post('/shop/cart', (req,res)=>res.sendFile('ruta del carrito'))

module.exports = router;