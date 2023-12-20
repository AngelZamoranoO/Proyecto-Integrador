const Router = require('express')
const mainControllers = require('../controller/mainController')

const router = Router()

// corresponde las rutas para las paginas web index desde el backend
router.get('/', mainControllers.home);
router.get('/home', mainControllers.home);
router.get('/cart', (req,res)=> res.sendFile('ruta del carro de compra'))
router.get('/item', (req,res)=>res.sendFile('ruta del item'))
router.get('/shop', (req,res)=>res.sendFile('ruta del shop'))

module.exports = router;