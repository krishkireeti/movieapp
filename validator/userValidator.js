const Joi = require('@hapi/joi');

const Schema = Joi.object({
    username: Joi.string().alphanum().required().min(3).max(15),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
        new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
).message('Your password must be at least 8 characters and contain atleast one upper case letter, one lower case letter and one special character').required(),
first_name: Joi.string().required(),
last_name: Joi.string().required()
});

module.exports = Schema;