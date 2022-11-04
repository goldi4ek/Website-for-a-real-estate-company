const Router = require('express')
const router = new Router()
const purposeRouter = require('./purposeRouter')
const userRouter = require('./userRouter')
const contactRouter = require('./contactRouter')

router.use('/user', userRouter)
router.use('/purpose', purposeRouter)
router.use('/contact', contactRouter)

module.exports = router