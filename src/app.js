const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/product-route')
const indexRoute = require('./routes/index-route')

mongoose.connect('mongodb://kauai:kauai2012@ds011913.mlab.com:11913/dbmongo',{
      useNewUrlParser:true
})

//parando na aula 23

app.use(express.json())
app.use('/',indexRoute)
app.use('/products',router)
// app.use('/products', create)
// app.use('/products', put)
// app.use('/products', del)


module.exports = app