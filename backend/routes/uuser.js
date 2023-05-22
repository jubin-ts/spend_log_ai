const express = require('express')

// controller functions 

const {loginUuser,signupUuser} = require ('../controllers/uuserController')

const router = express.Router()


// login route


router.post('/login',loginUuser)

// login2 route

// router.patch('/login',login2User)

// signup routes 


// router.post('/signup',signupUser)
router.post('/signup',signupUuser)


// signup2 routes 

// router.patch('/signup',signup2User)



module.exports = router