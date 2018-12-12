const mongoose = require('mongoose')
const Product = require('../models/product')
const validationContract = require('../validators/fluentValidator')
const repository = require('../repositories/product-repositorie')

module.exports = {

    get: async (req, res, next) => {
        try{
            const data = await repository.get()
            res.status(200).send(data)
        }catch(error){
            res.status(500).send({
                message: 'Falha ao ler produtos: ' + error
            })
        }
    },

    getBySlug: async (req, res, next) => {
           try {
                const data = await repository.getBySlug(req.params.slug)
                res.status(200).send(data)
           } catch (error) {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
           }
    },


    getById:async (req, res, next) => {
            try {
                const data =await repository.getById(req.params.id)
                res.status(200).send(data)
            } catch (error) {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
            }
    },

    getByTag:async (req, res, next) => {
            try {
                const data = await repository.getByTag(req.params.tag)
                res.status(200).send(data)
            } catch (error) {
                res.status(400).send({
                    message: 'Falha ao ler produtos: ' + error
                })
            }
    },


    post: async (req, res, next) => {
        let contract = new validationContract()
        contract.hasMinLen(req.body.title,3,'O titulo é obrigatorio 3 caracteres')
        contract.hasMinLen(req.body.slug,3,'O slug é obrigatorio 3 caracteres')
        contract.hasMinLen(req.body.description,3,'A descriçao é obrigatoria 3 caracteres')

        //se os dados forem invalidos!!!
        if(!contract.isValid()){
           res.status(400).send(contract.errors()).end();
           return;
        }

        
        try {
            const data = await repository.create(req.body)
            res.status(201).send({ message: 'Produto cadastrado com sucesso' })
        } catch (error) {
            res.status(400).send({ message: 'Falha ao cadastrar um produto' + error })
        }
    },

    put: async (req, res, next) => {
         try {
            const data = repository.update(req.params.id,req.body)
            res.status(200).send({ message: 'Produto atualizado com sucesso' })
         } catch (error) {
            res.status(400).send({ message: 'Falha ao atualizar um produto' + error })
         }
    },

    deleta:async (req, res, next) => {
        console.log(req.params.id)
            try {
               const result = await repository.getById(req.params.id)
               const data = await repository.delete(req.params.id)
               res.status(200).send({ message: 'Produto removido com sucesso',result})
                //res.status(200).send({ message: 'Testando',id:req.params.id})
            } catch (error) {
                res.status(400).send({ message: 'Falha ao remover produto' + error })
            }
    }
}

