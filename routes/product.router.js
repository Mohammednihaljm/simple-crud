const express=require('express')
const router=express.Router()
const {  getProducts, getProduct, addProduct, updateProduct }=require("../controllers/product.controller")



router.get("/",getProducts)
router.get("/:id",getProduct)

router.post("/",addProduct)
router.put("/:id",updateProduct)





module.exports=router