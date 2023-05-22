const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')

const uuserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:true
        // validate: {
        //     validator: function(value) {
        //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //       return emailRegex.test(value);
        //     },
        //     message: 'Invalid email address. Please enter a valid email address.'
        //   }
    },

    password:{
        type:String,
        required:true
    }
})


// static signup method 

uuserSchema.statics.signup = async function (email, password) {
  // try {
    // Validation
    if (!email || !password) {
      throw new Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
      throw new Error('Enter a valid email');
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error('Password not strong enough');
    }

    const exists = await this.findOne({ email });

    if (exists) {
      return {messge:('Enter your password')}
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const uuser = await this.create({ email, password: hash });

    return uuser;
  // } catch (error) {
  //   // Handle the error and return it
  //   return { error: error.message };
  // }
};


// static login method

uuserSchema.statics.login = async function (email,password) {
  if (!email || !password) {
    throw new Error('All fields must be filled');
  }

  const uuser = await this.findOne({ email });
// check this line when creating front end if having issues
    if (!uuser) {
      return {messge:('Create your password')}
    }
    

    const match = await bcrypt.compare(password,uuser.password)

    if (!match) {
      throw Error ('Incorrect Password')
    }

    return uuser
}


module.exports = mongoose.model('uuser',uuserSchema)