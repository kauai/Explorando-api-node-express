const mongoose = require('mongoose')
const Product = require('../models/product')

module.exports = {
    get: (req, res, next) => {
        Product.find({ active: true }, 'title price slug')
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
            })
    },

    getBySlug: (req, res, next) => {
        Product.findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
            })
    },


    getById: (req, res, next) => {
        Product.findById(req.params.id)
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
            })
    },

    getByTag: (req, res, next) => {
        Product.find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
            })
    },


    post: (req, res, next) => {
        let product = new Product(req.body)
        product.save().then(item => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso' })
        }).catch(error => {
            res.status(400).send({ message: 'Falha ao cadastrar um produto' + error })
        })
    },

    put: (req, res, next) => {
        Product.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    slug: req.body.slug,
                    price: req.body.price
                }
            }).then(item => {
                res.status(200).send({ message: 'Produto atualizado com sucesso' })
            }).catch(error => {
                res.status(400).send({ message: 'Falha ao atualizar um produto' + error })
            })
    },

    deleta: (req, res, next) => {
        Product.findOneAndRemove(req.params.id)
            .then(item => {
                res.status(200).send({ message: 'Produto removido com sucesso' })
            }).catch(error => {
                res.status(400).send({ message: 'Falha ao remover produto' + error })
            })
    }
}

