const express = require('express')
const { products, people } = require('../data')
const validate = require("../validate")
const Joi = require('joi')
    //on the cmd type set NODE_ENV=development
    //this is used to set the environment of your codebase

const getAllUser = (req, res) => {
    res.send(people)
}
const appendUser = (req, res) => {
    const { name, school, age } = req.body
    if (!name) {
        res.status(404).json({ success: true, data: 'invalid pls input a nam' })

    }
    const validCheck = validate(req.body)
    if (validCheck.error) {
        res.status(400).json({ success: true, data: error.details[0].message.replace(/"/g, '') })

    }

    const id = people.length + 1
        //res.json([...people, { id, name, school, age }])
    const newPost = {
        id: people.length + 1,
        name: req.body.name,
        school: req.body.school,
        age: req.body.age
    }
    people.push(newPost)
    res.status(200).json({ success: true, data: newPost })

}

const updateUser = (req, res) => {
    const { id } = req.params
    const { name, school } = req.body
    const upDate = people.find((person) => {
        return person.id === Number(id)
    })
    if (!upDate) {
        //if the id was not found
        res.status(404).send('invalid corse id, it was not found')

    }
    //const result = validate(req.body)
    //the result has three object lets use destructuring
    const { error, value } = validate(req.body)
    if (error) {
        //404 error is a bad request
        res.status(400).send(error.details[0].message.replace(/"/g, ''))

    }

    //using map
    upDate.name = name
    upDate.school = school
    res.status(200).send(upDate)
        //map gets all the data
    const amendData = people.map((getUpdate) => {
            if (getUpdate.id === Number(id)) {
                getUpdate.name = name
                getUpdate.school = school

            }
            return getUpdate
        })
        //res.status(200).json({ success: true, data: amendData })
    res.json({
        success: 'it has been updated',
        data: upDate
    })
}

const getQueriedData = (req, res) => {
    const { user, limit } = req.query
    let getSpecific = [...people]
    if (user) {
        getSpecific = getSpecific.filter((personData) => {
            return personData.name.startsWith(user) || personData.name.includes(user)
        })

    }
    if (limit) {
        getSpecific = getSpecific.slice(0, parseInt(limit))
    }
    if (getSpecific.length < 1)
    //or if(getspecific=' ') 
    {
        res.json({ success: false, data: 'unable to handle your request' })
    }
    res.status(200).send(getSpecific)


}

const deleteUser = (req, res) => {
    const { id } = req.params
    const remainedData = people.filter((delData) => {
        //use the return when using curlly braket in a return function
        return delData.id !== parseInt(id)
    })
    const deletedData = people.find((getDelete) =>
            getDelete.id === parseInt(id)

        )
        // res.json({
        //     success: `data with id ${id} has been successfully deleted`,
        //     data: remainedData
        // })
    const getDat = people.indexOf(deletedData)
    console.log(getDat);
    people.splice(getDat, 1)
    res.json({ success: 'you just deleted this data', data: deletedData })

}

module.exports = { getAllUser, appendUser, updateUser, getQueriedData, deleteUser }