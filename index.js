const express = require ('express');
const connectDB=require("./config/Db")
const Product=require("./product.model.js")

const app=express()
const port=3000;


connectDB()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('WELCOME')
})

app.post('/api/produts',async(req,res)=>{
   
  try{
    const product=await Product.create(req.body)
    res.status(200).json(product)
    console.log(req.body)
  }
  catch(error){
   res.status(200).json({message:error.message})
  }

})


app.listen(port,()=>{
    console.log(`SERVER RUNNING PORT  ${port}`);
})