const Joi = require('joi')


function validate(upDatedCourse) {
    const schema = Joi.object({
        name: Joi.string()
            .min(3).max(20).required(),
        school: Joi.string().min(5).max(100).required(),
        age: Joi.number().integer().min(14).max(35).required()

    })
    return schema.validate(upDatedCourse)

}

//exporting to the user routes
module.exports = validate