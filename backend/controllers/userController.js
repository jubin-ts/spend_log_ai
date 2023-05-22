const User = require ('../models/userModel.js')
const bcrypt = require ('bcrypt')
// const validator = require('validator')

// login user 

const loginUser = async (req,res) => {
    res.json({mssg:'login user'})
}



// login2 user 

// const login2User = async (req,res) => {
//     res.json({mssg:'login2 user'})
// }



// signup user 

const signupUser = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // if User already exists, respond with a message
      return res.status(200).json({ message: 'Please enter your password.' });
    } else {
      // if User doesn't exist, respond with a message
      const user = await User.create({ email });
      return res.status(200).json({ message: 'Please create a password.', user });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

  

// signup2 user

// const signup2User = async (req, res) => {

   

//     const { email, password } = req.body
  
//     try {
//       const existingUser = await User.findOne({ email })
  
//       if (existingUser) {
//         res.status(400).json({ error: 'Email already in use' })
//       }
  
//       const salt = await bcrypt.genSalt(10)
//       const hash = await bcrypt.hash(password, salt)
  
//       
//   }
  


module.exports = {loginUser,signupUser }