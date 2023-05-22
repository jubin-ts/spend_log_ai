const express = require('express')
const Demo = require('../models/demoModel')
const {createDemo,getDemo} = require('../controllers/demoController')

const router = express.Router()

router.get('/',getDemo)


router.post('/', createDemo)

  




module.exports = router