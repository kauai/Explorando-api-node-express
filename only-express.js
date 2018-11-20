const express = require('express')
const debug = require('debug')('nodestr:server')

const app = express()
const port = 3000

app.get('/',(req,res,next) => {
    res.status(200).send({
        title:'Node store api',
        version:'1.4.0'
    })
})


app.listen(port,'localhost',() => {
    console.log('Servidor rodando na porta'+ ` http://localhost:3000`)
})