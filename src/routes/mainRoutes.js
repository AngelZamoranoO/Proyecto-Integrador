const Router = require('express')
const mainControllers = require('../controller/mainController')

const router = Router()

// corresponde las rutas para las paginas web index desde el backend
router.get('/', mainControllers.home);
router.get('/home', mainControllers.home);
router.get('/contact', mainControllers.about)
router.get('/faq', mainControllers.faqs)

module.exports = router;