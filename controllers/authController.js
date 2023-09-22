const express = require('express')

const { products, people } = require('../data')

const postLogin = (req, res) => {

    const { id, name } = req.body
    if (!name) {
        res.status(404).json({ success: false, data: 'please input a name' })
    }
    res.json({ success: true, data: 'You have succesfully logged in to the app' })
}

module.exports = postLogin