const Router = require('express')
const router = new Router()
const purposeRouter = require('./purposeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/purpose', purposeRouter)

module.exports = router