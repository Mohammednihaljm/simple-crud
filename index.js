const express = require ('express');
const connectDB=require("./config/Db")
const Product=require("./product.model.js")

const app=express()
const port=3000;


connectDB()


app.get('/',(req,res)=>{
    res.send('WELCOME')
})




app.listen(port,()=>{
    console.log(`SERVER RUNNING PORT  ${port}`);
})