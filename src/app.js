const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require('../src/controllers/product-controller')

router.use((req, res, next) => {
    console.log(`Url: ${req.url}, Metodo:${req.method}, Time: ${Date.now()}`);
    next();
})

router.get('/',controller.get)
router.post('/products', controller.post)
router.put('/products/:id', controller.put)
router.delete('/products', controller.deleta)

app.use(express.json())
app.use('/',router)
// app.use('/products', create)
// app.use('/products', put)
// app.use('/products', del)


module.exports = app