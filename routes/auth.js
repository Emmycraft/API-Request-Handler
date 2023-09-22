const express = require('express')
const router = express.Router()
const postLogin = require('../controllers/authController')
    //const { products, people } = require('./data')

router.post('/', postLogin)


module.exports = router