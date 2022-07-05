var inserthiring = require('./insert');
var datafetch = require ('./fetchhiring')
var hirings = {
insert:(params,callback)=>{
inserthiring.insert(params,callback);
},
fetch:(params,callback)=>{
    datafetch.fetch(params,callback)
}
}
module.exports = hirings;