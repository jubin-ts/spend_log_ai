const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
//const validator = require('validator')

const userSchema = new Schema({
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
    }

    // password:{
    //     type:String,
    // }
})


// static signup method 

userSchema.statics.signup = async function (email)  {
    const exists = await this.findOne({email})

    if (exists) {
       return {message:'Enter your password'}
      }

      if (!exists) {
       return {message:'Create your password'}
      } 

    //  if (!password) {
    //     throw Error ('you must create a password')
    // }
    // if (!validator.isStrongPassword(password)) {
    //     throw Error ('password is not strong enough')
    // }

    // const salt = await bcrypt.genSalt(10)
    // const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email})

    return user
}

module.exports = mongoose.model('user',userSchema)