const Router = require('express')
const shopControllers = require('../controller/shopController')

const router = Router()

// corresponde las rutas para las paginas web index desde el backend
router.get('/', shopControllers.shop_view);
router.get('/item/:id', shopControllers.item); // muestra para cualquier id el babyyoda
router.post('item/:id/add', (req,res)=> res.sendFile('ruta del shop con :id item para agregar'))
router.get('/cart', shopControllers.cart)
router.post('/cart', (req,res)=>res.sendFile('ruta del carrito'))

module.exports = router;