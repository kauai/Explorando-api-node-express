const express = require('express')
const router = express.Router()
const controller = require('../controllers/product-controller')

router.use((req, res, next) => {
    console.log(`Url: ${req.url}, Metodo:${req.method}, Time: ${Date.now()}`);
    next();
})

router.get('/',controller.get)
router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/', controller.deleta)

module.exports = router