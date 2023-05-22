const express = require('express')

// controller functions 

const {loginUser,signupUser} = require ('../controllers/userController')

const router = express.Router()


// login route


router.post('/login',loginUser)

// login2 route

// router.patch('/login',login2User)

// signup routes 


router.post('/signup',signupUser)


// signup2 routes 

// router.patch('/signup',signup2User)



module.exports = router