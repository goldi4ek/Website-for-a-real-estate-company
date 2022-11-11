const Router = require('express')
const router = new Router()
const contactController = require('../controllers/contactController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', contactController.create)
router.get('/', checkRole('ADMIN'), contactController.getAll)
router.delete('/:id', checkRole('ADMIN'), contactController.deleteOne)

module.exports = router