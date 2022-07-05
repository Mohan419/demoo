var nodemailer = require('nodemailer');
var fs = require('fs')
var mail = {
    HiringSentToMail: function (subject, Email, AreYouMalaysian, ContactNumber, AreYouMalaysian
        , WheredidyoyKnowStartasker, WhatTransporationyouhave, Doyouprovideyourowntools, Whatexperienceyouhave
        , EmergencyContact, Name) {
        fs.readFile(
            "./app/ConfigFiles/hiring.html",
            function (err, data) {
                if (!err) {
                    var ct = Whatexperienceyouhave;
                    var exp = []
                    for (var i = 0; i < ct.length; i++) {
                        var k = ct[i].categoryName;
                        var n = ct[i].Experience;
                       // console.log(k);
                        //console.log(n);
                        exp.push(k+" "+ n+" "+"year"+" "+"Experience")
                    };
                    console.log(exp);
                    var html = data.toString();
                    html = html.replace("#pname#", Name);
                    html = html.replace("#pemail#", Email);
                    html = html.replace("#pphone#", ContactNumber);
                    html = html.replace("#AreYouMalaysian#", AreYouMalaysian);
                    html = html.replace("#WhereDidyouKnowStartasker#", WheredidyoyKnowStartasker);
                    html = html.replace("#WhatTransportationYouhave#", WhatTransporationyouhave);
                    html = html.replace("#DoYouProvideYourOwntools#", Doyouprovideyourowntools);
                    html = html.replace("#WhatExperienceYouHave#", exp);
                    html = html.replace("#Emergency Contact#", EmergencyContact);

                    sendHiringTOMail(Email, subject, html);
                } else {
                    console.log(err);
                }
            }
        );
    },
}
function sendHiringTOMail(Email, subject, html) {
    //DefaultMessageToAdminAccount(toEmail, subject, html);
    var transporter = nodemailer.createTransport({
        //service: config.mailService,
        name: "SMTP",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "softexers@gmail.com",
            pass: "Abcd1234@#",
        },
    });
    var mailOptions = {
        from: "softexers@gmail.com",
        to: Email,
        subject: subject,
        html: html,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}
module.exports = mail;