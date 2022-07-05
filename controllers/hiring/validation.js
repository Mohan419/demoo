const Joi = require('@hapi/joi');
var validate = {
    validationinsert: (params) => {
        var insert = Joi.object({
            AreYouMalaysian: Joi.boolean().required(),
            WheredidyoyKnowStartasker: Joi.string().required(),
            WhatTransporationyouhave: Joi.string().required(),
            Doyouprovideyourowntools: Joi.boolean().required(),
            Whatexperienceyouhave: Joi.array().items(Joi.object().keys({
                categoryName: Joi.string().required(),
                Experience:Joi.number().required(),
            })).required(),
            ContactNumber: Joi.number().required(),
            Name: Joi.string().required(),
            Email: Joi.string().required(),
            EmergencyContact: Joi.number().required(),


        })
        return insert.validate(params)
    },
    fetchparamsvalidate:(params)=>{
        var fetch  = Joi.object({
            Email:Joi.string().required()
        })
        return fetch.validate(params)
    }
}

module.exports = validate;