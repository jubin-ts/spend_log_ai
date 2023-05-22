const express = require('express')
const Tryforfree = require('../models/tryforfreeModel')

const {getTryforfree,createTryforfree} = require('../controllers/tryforfreeController')

const router = express.Router()

router.get('/',getTryforfree)


router.post('/',createTryforfree)




module.exports = router