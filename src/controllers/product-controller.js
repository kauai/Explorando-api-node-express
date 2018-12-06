const mongoose = require('mongoose')
const Product = require('../models/product')
const validationContract = require('../validators/fluentValidator')
const repository = require('../repositories/product-repositorie')

module.exports = {

    get: (req, res, next) => {
            repository.get()
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
            repository
            .getBySlug(req.params.slug)
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
            repository
            .getById(req.params.id)
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
            repository
            .getByTag(req.params.tag)
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
        let contract = new validationContract()
        contract.hasMinLen(req.body.title,3,'O titulo é obrigatorio 3 caracteres')
        contract.hasMinLen(req.body.slug,3,'O slug é obrigatorio 3 caracteres')
        contract.hasMinLen(req.body.description,3,'A descriçao é obrigatoria 3 caracteres')

        //se os dados forem invalidos!!!
        if(!contract.isValid()){
           res.status(400).send(contract.errors()).end();
           return;
        }

        repository.create(req.body)
        .then(item => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso' })
        }).catch(error => {
            res.status(400).send({ message: 'Falha ao cadastrar um produto' + error })
        })
    },

    put: (req, res, next) => {
         repository
        .update(req.params.id,req.body)
        .then(item => {
                res.status(200).send({ message: 'Produto atualizado com sucesso' })
            }).catch(error => {
                res.status(400).send({ message: 'Falha ao atualizar um produto' + error })
            })
    },

    deleta: (req, res, next) => {
            repository
            .delete(req.params.id)
            .then(item => {
                res.status(200).send({ message: 'Produto removido com sucesso' })
            }).catch(error => {
                res.status(400).send({ message: 'Falha ao remover produto' + error })
            })
    }
}

