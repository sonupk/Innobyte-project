const express=require('express')
const route=require('./route/routes.js')
const mongoose = require('mongoose')

const app=express();
app.use(express.json())
app.use('/',route)


mongoose.connect("mongodb+srv://sonuk:kamble123@cluster0.vfrmzq9.mongodb.net/gadgets-DB").
then (()=>console.log('Mongob is connected'))

app.listen(process.env.PORT || 3000,function(){
    console.log('Express app running on port'+ (process.env.PORT|| 3000))
})