const Router = require('express')
const router = new Router()
const purposeController = require('../controllers/purposeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), purposeController.create)
router.get('/', purposeController.getAll)
router.get('/:id', purposeController.getOne)
router.delete('/:id', checkRole('ADMIN'), purposeController.deleteOne)
router.put('/:id', checkRole('ADMIN'), purposeController.updateOne)
module.exports = router