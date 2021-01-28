var express = require("express")
var top = express()
var pop = 3000;
var path = require("path")
top.use(express.static("./vendor"))
top.get("/index",function(req, res){
    // res.json("anhff")
    res.sendFile(path.join(__dirname,"index.html"))
})
top.get("/blogs",function(req, res){
    res.sendFile(path.join(__dirname,"blogs.html"))
})
top.get("/men-watch",function(req, res){
    res.sendFile(path.join(__dirname,"men-watch.html"))
})
top.get("/address",function(req, res){
    res.sendFile(path.join(__dirname,"address.html"))
})
top.get("/present",function(req, res){
    res.sendFile(path.join(__dirname,"present.html"))
})
top.listen(pop,function(){
    console.log("dđ"+pop);
})
