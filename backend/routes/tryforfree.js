const express = require('express')
const Tryforfree = require('../models/tryforfreeModel')

const {getTryforfree,getTryforfree1,createTryforfree} = require('../controllers/tryforfreeController')

const router = express.Router()

router.get('/',getTryforfree)
// router.get('/:id',getTryforfree1)


router.post('/',createTryforfree)




module.exports = router