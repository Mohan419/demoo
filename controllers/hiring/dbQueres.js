const hiring = require("../../app/Models/hiring");

var db={
insertInfo:(params)=>{
var inserthiring = new hiring({
    AreYouMalaysian:params.AreYouMalaysian,
            WheredidyoyKnowStartasker: params.WheredidyoyKnowStartasker,
            WhatTransporationyouhave: params.WhatTransporationyouhave,
            Doyouprovideyourowntools: params.Doyouprovideyourowntools,
            Categorys:params.Whatexperienceyouhave,
            ContactNumber: params.ContactNumber,
            Name:params.Name,
            Email:params.Email,
            EmergencyContact: params.EmergencyContact

})
return inserthiring
},
infoHiring:(params)=>{
    return hiring.find({ Email: new RegExp('^' + params.Email + '$') }, { _id: 0, __v: 0 }).exec()
}
}
module.exports =db;