//const User = require ('../models/userModel.js')
const Uuser = require ('../models/uuserModel')
const jwt = require('jsonwebtoken')
// const bcrypt = require ('bcrypt')
// const validator = require('validator')


const createToken = (_id) => {
 return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
// login user 

const loginUuser = async (req,res) => {
  const {email, password} = req.body

  try {
    const uuser = await Uuser.login(email, password)

    //create token 

    const token = createToken(uuser._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}



// login2 user 

// const login2User = async (req,res) => {
//     res.json({mssg:'login2 user'})
// }



// signup user 

// const signupUser = async (req, res) => {
//     const { email } = req.body
  
//     try {
//       const existingUser = await User.findOne({ email })
  
//       if (existingUser) {
//         // if User already exists, redirect to the password page
//         res.status(200).json({ message: 'Please enter your password.', existingUser: true })
//       } else {
//         // if User doesn't exist, redirect to the create password page
//         res.status(200).json({ message: 'Please create a password.', existingUser: false })
//       }
//     } catch (error) {
//       res.status(400).json({ error: error.message })
//     }
//   };
  

// signup2 user

const signupUuser = async (req, res) => {

   

    const { email, password } = req.body
  
   
    try {
      const uuser = await Uuser.signup(email, password)

      //create token 

      const token = createToken(uuser._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  


module.exports = {loginUuser,signupUuser }

 // try {
    //   const existingUuser = await User.findOne({ email })
  
    //   if (existingUuser) {
    //     res.status(400).json({ message: 'Enter your password' })
    //   }
    //   if (!existingUuser) {
    //     res.status(400).json({ message: 'Create your password' })
    //   }
  
    //   const salt = await bcrypt.genSalt(10)
    //   const hash = await bcrypt.hash(password, salt)
  
    //   const uuser = await Uuser.create({ email, password: hash })
  
    //   res.status(200).json({ uuser })
    // } catch (error) {
    //   res.status(400).json({ error: error.message })
    // }