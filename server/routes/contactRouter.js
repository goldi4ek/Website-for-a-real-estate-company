const Router = require('express')
const router = new Router()
const contactController = require('../controllers/contactController')

router.post('/', contactController.create)
router.get('/', contactController.getAll)

module.exports = router