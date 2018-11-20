const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node store api',
        version: '1.4.0'
    })
})

const create = router.post('/', (req, res, next) => {
    console.log(req.body)
    res.status(201).send(req.body)
    next()
})

const put = router.put('/:id', ({ params: id, body }, res, next) => {
    res.status(200).send({ id, body })
})

const del = router.delete('/',(req,res,next) => {
    res.status(200).send(req.body)
})

app.use(express.json())
//app.use(bodyParser.json())//Estao usando mais o express.json()
app.use('/', route)
app.use('/products', create)
app.use('/products', put)
app.use('/products', del)


module.exports = app