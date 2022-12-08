const express = require('express')
const router = express.Router()
const cryptoController = require('../cryptoController/cryptoController')

router.post('/assets', cryptoController.getCrypto)

router.all('/*', function(req, res){
    return res.status(400).send({status: false, message: 'Path not found'})
})

module.exports = router