var validationparams = require('./validation');
var dbqueres = require('./dbQueres');
var Mailer = require('../Core/Mailer')
var hiringinsert = {
    insert: (params, callback) => {
        var { error } = validationparams.validationinsert(params);
        if (error) {
            return callback({
                status: 400,
                data: {
                    response: 0,
                    message: error.details[0].message
                }
            })
        };
        var inserted = dbqueres.insertInfo(params);
        inserted.save((inserted) => {

            if (!inserted) {
                Mailer.HiringSentToMail("Registration - OTP", params.Email,params.AreYouMalaysian,params.ContactNumber,params.AreYouMalaysian
                ,params.WheredidyoyKnowStartasker,params.WhatTransporationyouhave,params.Doyouprovideyourowntools,params.Whatexperienceyouhave
                ,params.EmergencyContact,params.Name );
                return callback({
                    status: 200,
                    data: {
                        response: 3,
                        message: "Data Inserted Successfully"
                    }
                })
            } else {
                return callback({
                    status: 200,
                    data: {
                        response: 0,
                        message: "Data Inserted failure"
                    }
                })
            }
        })
    }
}
module.exports = hiringinsert;