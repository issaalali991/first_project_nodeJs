
const express=require("express");

const app=express();

app.get("/hello",(req,res)=>{
res.send("hello")
})

app.get("/hi",(req,res)=>{
  res.send("hi")
  })

app.listen(3000)