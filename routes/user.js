const express = require('express')
const router = express.Router()
const Joi = require('joi')
const validate = require('../validate')
const { products, people } = require('../data')

const { getAllUser, appendUser, updateUser, getQueriedData, deleteUser } = require('../controllers/userController')

router.get('/', getAllUser)
router.post('/', appendUser)
    //getting a particular name using the query string param
router.put('/:id', updateUser)
router.get('/data', getQueriedData)
router.delete('/:id', deleteUser)

module.exports = router