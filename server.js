require('dotenv').config()

const express = require("express")
const app = express()
var cors = require('cors');
const port = 3000
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('connected to database'))
app.use(cors());
app.get('/',(req,res)=>{res.json({success:true, message:'sever is working'})})
app.use(express.json())
const userData = require('./routes/userData')
app.use('/user',userData)
app.listen(port,()=> console.log(`Server Started on port ${port}`))