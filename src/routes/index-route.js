const express = require('express')
const indexRouter = express.Router()
const controller = require('../controllers/product-controller')

indexRouter.get('/',controller.get)

module.exports = indexRouter