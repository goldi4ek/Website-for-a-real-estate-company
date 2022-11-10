const uuid = require('uuid')
const path = require('path')
const {Contact} = require('../models/models')
const ApiError = require('../error/ApiError')

class ContactController {
    async create(req, res, next) {
       try {
            const {name, email, phone, message} = req.body
            const contacts = await Contact.create({name, email, phone, message})
            return res.json(contacts)
        } catch (e) {
           next(ApiError.badRequest(e.message))
       }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let contacts;
        contacts = await Contact.findAndCountAll({limit, offset})
        return res.json(contacts)
    }
}

module.exports = new ContactController()