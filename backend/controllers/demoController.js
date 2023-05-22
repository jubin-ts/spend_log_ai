const Demo = require('../models/demoModel')

// get all demo data 

const getDemo = async (req,res) =>{
    const demos = await Demo.find({}).sort({createdAt:-1})
    res.status(200).json(demos)
}


// creating new demo


const createDemo = async (req,res) => {
    const {first_name,last_name,company_name,city,email,mobile} = req.body


    //adding doc to db 


    try{

        const existingdemos = await Demo.findOne({ company_name });
      if (existingdemos) {
        return res.status(400).json({ error: 'Company already exists.' });
      }
      

        const existingdemo = await Demo.findOne({ mobile });
        if (existingdemo) {
        return res.status(400).json({ error: 'mobile number already exists.' });
      }

        const demo = await Demo.create({first_name,last_name,company_name,city,email,mobile})
        res.status(200).json(demo)
    } catch (error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    createDemo,getDemo
}