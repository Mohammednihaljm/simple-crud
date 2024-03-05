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





app.delete('/api/product/:id',async(req,res)=>{

  try {
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id) 
    if(!product){
      res.status(400).json({message:"product not found"})  
    }
    res.status(400).json({message:"product delete"})
  } catch (error) {
    res.status(500).json({message:error.message})
    
  }

})


app.listen(port,()=>{
    console.log(`SERVER RUNNING PORT  ${port}`);
})