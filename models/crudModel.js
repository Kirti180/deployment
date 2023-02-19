const mongoose=require('mongoose')
crudSchema=mongoose.Schema({
    title:String,
    desc:String,
    user:String
})
crudModel=mongoose.model('notes',crudSchema)
module.exports={crudModel}