
var validationparams = require ('./validation');
var dbQueries = require ('./dbQueres');
var datafetch={
fetch:(params,callback)=>{
    var {error} = validationparams.fetchparamsvalidate(params);
    if(error){
        return callback({
            status:400,
            data:{
                response:0,
                message:error.details[0].message
            }
        })
    }

    var hiringInfo = dbQueries.infoHiring(params);
    hiringInfo.then((founded)=>{
        if(founded){
            return callback({
                status:200,
                data:{
                    response:3,
                    message:"Data Founded Successfully",
                    Info:founded
                }
            })
        }else{
            return callback({
                status:200,
                data:{
                    response:0,
                    message:"Data Not Founded"
                }
            })
        }
    })
}
}
module.exports = datafetch;