const mongoose = require('mongoose')

const cryptoShchema = new mongoose.Schema({
symbol: String,
name: String,
marketCapUsd: String,
priceUsd: String
}, {timestamps: true})

module.exports = mongoose.model('bitcoin', cryptoShchema)