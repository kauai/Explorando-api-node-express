module.exports = {
    get: (req, res, next) => {
        res.status(200).send({
            title: 'Node store api',
            version: '1.4.0'
        })
    },
    post: (req, res, next) => {
        res.status(200).send(req.body)
    },
    put: ({ params: id, body }, res, next) => {
        res.status(200).send({ id, body })
    },
    deleta: (req, res, next) => {
        res.status(200).send(req.body)
    }
}

