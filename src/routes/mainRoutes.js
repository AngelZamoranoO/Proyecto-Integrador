import { Router } from "express"

const router = Router()

// corresponde las rutas para las paginas web index desde el backend
router.get('/home', (req,res)=>res.send(__dirname+'src/index.html'))
router.get('/cart', (req,res)=>res.sendFile('ruta del carro de compra'))
router.get('/item', (req,res)=>res.sendFile('ruta del item'))
router.get('/shop', (req,res)=>res.sendFile('ruta del shop'))

module.exports = mainRoutes