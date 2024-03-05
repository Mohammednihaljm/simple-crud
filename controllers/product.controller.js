const Product=require("../product.model.js")


const getProducts=async(req,res)=>{
    try {
        const product=await Product.find({})
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id)
        res.status(200).json(product)
      }
      catch(error){
      res.status(500).json({message:error.message})
      }
}

const addProduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body)
        res.status(200).json(product)
        console.log(req.body)
      }
      catch(error){
       res.status(200).json({message:error.message})
      }
}

const updateProduct=async(req,res)=>{
    try {

        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
         return res.status(400).json({message:"product not found"})
        }
          const updateproduct=await Product.findById(id);
          res.status(200).json(updateproduct)
      } catch (error) {
        res.status(500).json({message:error.message})
      }
}

const deleteProduct=async(req,res)=>{
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
}




module.exports={
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}