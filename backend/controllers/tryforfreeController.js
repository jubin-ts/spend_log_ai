const Tryforfree = require('../models/tryforfreeModel')

// get all try for free data 

const getTryforfree = async(req,res) =>{
    const tryforfrees = await Tryforfree.find({}).sort({createdAt:-1})
    res.status(200).json(tryforfrees)
}




// creating a new try for free data 

const createTryforfree = async (req, res) => {
    const { company_name, company_headquarters, company_size } = req.body;
  
    try {
      const existingTryforfree = await Tryforfree.findOne({ company_name });
      if (existingTryforfree) {
        return res.status(400).json({ error: 'Company already exists.' });
      }
  
      const tryforfree = await Tryforfree.create({
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
    getTryforfree
}