const uuid = require('uuid')
const path = require('path')
const {Purpose} = require('../models/models')
const ApiError = require('../error/ApiError')

class PurposeController {
    async create(req, res, next) {
       try {
            const {name, room, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const purpose = await Purpose.create({name, room, price, img: fileName})

            return res.json(purpose)
        } catch (e) {
           next(ApiError.badRequest(e.message))
       }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let purposes;

        purposes = await Purpose.findAndCountAll({limit, offset})
        return res.json(purposes)
    }

    async getOne(req, res) {
        const {id} = req.params
        const purpose = await Purpose.findOne(
            {
                where: {id},
            }
        )
        return res.json(purpose)
    }
}

module.exports = new PurposeController()