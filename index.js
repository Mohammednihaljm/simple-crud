const express = require ('express');
const app=express()
const port=3000;


app.get('/',(req,res)=>{
    res.send('WELCOME')
})


app.listen(port,()=>{
    console.log(`SERVER RUNNING PORT  ${port}`);
})