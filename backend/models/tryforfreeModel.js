const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tryforfreeSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    company_name : {
        type:String,
        unique:true,
        required:true
    },
    company_headquarters : {
        type:String,
        required:true
    },
    company_size : {
        type:Number,
        required:true
    },
    // uuser_id : {
    //     type: String,
    //     required : true
    // }
},{timestamps:true})

module.exports = mongoose.model('Tryforfree',tryforfreeSchema)