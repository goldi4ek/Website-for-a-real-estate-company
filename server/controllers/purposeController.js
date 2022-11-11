const uuid = require('uuid')
const path = require('path')
const {Purpose} = require('../models/models')
const ApiError = require('../error/ApiError')
const {where} = require("sequelize");

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

    async deleteOne(req, res, next) {
        try {
            const {id} = req.params
            const purpose = await Purpose.destroy(
            {
                where: {id},
            }
        )
        return res.json(purpose)
        } catch (e) {
           next(ApiError.badRequest(e.message))
       }
    }

    async updateOne(req, res, next) {
        try {
            const {id} = req.params
            const {name, room, price, img} = req.body
            const purpose = await Purpose.update({name, room, price, img}, {
                where: {id},
                }
                )
            return res.json(purpose)
        } catch (e) {
           next(ApiError.badRequest(e.message))
       }
    }
}


module.exports = new PurposeController()