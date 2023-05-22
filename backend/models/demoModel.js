const mongoose = require('mongoose')

const Schema = mongoose.Schema

const demoSchema = new Schema({
    first_name :{
        type:String,
        required:true
    },
    
    last_name :{
        type:String,
        required:true
    },

    company_name:{
        type:String,
        unique:true,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true,
        validate: {
            validator: function(value) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(value);
            },
            message: 'Invalid email address. Please enter a valid email address.'
          }
    },

    mobile:{
        type:Number,
        unique:true,
        required:true,
        validate: {
            validator: function(value) {
              const isValidNumber = !isNaN(value) && Number.isInteger(value)
              const isTenDigits = value.toString().length === 10
              return isValidNumber && isTenDigits
            },
            message: 'Invalid mobile number. Please enter a valid 10-digit mobile number.'
          }
    }
},{timestamps:true})


module.exports = mongoose.model('Demo',demoSchema)