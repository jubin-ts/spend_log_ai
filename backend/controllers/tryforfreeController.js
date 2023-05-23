const Tryforfree = require('../models/tryforfreeModel')
const mongoose = require('mongoose');

// get all try for free data 

const getTryforfree = async(req,res) =>{
    const tryforfrees = await Tryforfree.find({}).sort({createdAt:-1})
    res.status(200).json(tryforfrees)
}

// const getTryforfree1 = async (req, res) => {
//   const {id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(IDBCursorWithValue)) {
//     return res.status(404).json({error: 'No such file'})
//   }

//   const tryforfree1 = await Tryforfree.findById(id)

//   if (!tryforfree1) {
//     return res.status(404).json({error: 'No such file'})
//   }

//   res.status(200).json(tryforfree1)
// }




// creating a new try for free data 

const createTryforfree = async (req, res) => {
    const { email,company_name, company_headquarters, company_size } = req.body;
  
    try {
      const existingTryforfree = await Tryforfree.findOne({ company_name });
      if (existingTryforfree) {
        return res.status(400).json({ error: 'Company already exists.' });
      }
  
      const tryforfree = await Tryforfree.create({
        email,
        company_name,
        company_headquarters,
        company_size,
      });
      res.status(200).json(tryforfree);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

module.exports = {
    createTryforfree,
    getTryforfree,
    // getTryforfree1
}