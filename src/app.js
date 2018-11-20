const express = require('express')
const app = express()
const router = require('./routes/product-route')
const indexRoute = require('./routes/index-route')

router.use((req, res, next) => {
    console.log(`Url: ${req.url}, Metodo:${req.method}, Time: ${Date.now()}`);
    next();
})

app.use(express.json())
app.use('/',indexRoute)
app.use('/products',router)
// app.use('/products', create)
// app.use('/products', put)
// app.use('/products', del)


module.exports = app