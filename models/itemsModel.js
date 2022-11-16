const  mongoose  = require("mongoose");

const itemsSchema = mongoose.Schema({
    id: {type:Number, required:true},
    name: {type:String, required:true},
    image: {type:String},
    price: {type:Number, required:true},
    category: {type:String, required:true},
}, {timestamps : true})

const itemsModel = mongoose.model('items', itemsSchema)

module.exports = itemsModel;