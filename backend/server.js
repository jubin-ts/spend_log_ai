const express = require ('express')
const mongoose = require ('mongoose')
require('dotenv').config()


const app = express()

const demoRouter = require('./routes/demo')
const tryforfreeRouter = require('./routes/tryforfree')
const userRouter = require('./routes/user')
const uuserRouter = require('./routes/uuser')


//middleware

app.use(express.json())

app.use((req,res,next)=> {
    console.log(req.path,req.method)
    next()
})

// route 

app.use('/api/demo',demoRouter)
app.use('/api/tryforfree',tryforfreeRouter)
app.use('/api/user',userRouter)
app.use('/api/uuser',uuserRouter)


mongoose 
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () =>{
            console.log("connected to db and listening on port" ,process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })