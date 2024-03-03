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

app.get('/api/products',async(req,res)=>{
try {
    const product=await Product.find({})
    res.status(200).json(product)
    
} catch (error) {
    res.status(500).json({message:error.message})
}
})

app.get('/api/products/:id',async(req,res)=>{

  try{
    const {id}=req.params;
    const product=await Product.findById(id)
    res.status(200).json(product)
  }
  catch(error){
  res.status(500).json({message:error.message})
  }
})

app.put('/api/products/:id',async(req,res)=>{

  try {

    const {id}=req.params;
    const product=await Product.findByIdAndUpdate(id,req.body);
    if(!product){
     return res.status(400).json({message:"product not found"})
    }
      const updateproduct=await product.findById(id)
      res.status(200).json(updateproduct)
  } catch (error) {
    res.status(500).json({message:error.message})
  }

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