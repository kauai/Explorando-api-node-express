const mongoose = require('mongoose')
const Product = require('../models/product')

module.exports = {
    get: (req, res, next) => {
        res.status(200).send({
            title: 'Node store api',
            version: '1.4.0'
        })
    },
    post: (req, res, next) => {
        let product = new Product(req.body)
        product.save().then(item => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso' })
        }).catch(error => {
            res.status(400).send({ message: 'Falha ao cadastrar um produto'+ error })
        })
    },
    put: ({ params: id, body }, res, next) => {
        res.status(200).send({ id, body })
    },
    deleta: (req, res, next) => {
        res.status(200).send(req.body)
    }
}

