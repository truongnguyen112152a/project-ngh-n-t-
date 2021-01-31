var express = require("express");
var app = express();
var gate = 7000;
var obj = { 
    name : " nodemy "
}
app.get("/usre",function(req,res){
    res.json(obj)
})
app.get("/user1",function(req,res){
    res.json(obj.name)
})
app.post("/:user2",function(req,res){
    // var numebr5 = req.body.number;
    var numebr= req.params.number;

    obj.age = +numebr;
    // var obj1={
    //     nnumebr5 : numebr1
    // }
    // obj.post(obj1)
    res.json("thêm mới thành công")
    
})
app.put("/user3/:name",function(req,res){
    var name = req.params.name;
    obj.name = name ; 
    if(name === " nodemy "){
        res.json("cập nhật không thành công");
        return
    } 
    res.json("cập nhật thành công")
})

app.delete("/user4/:name",function(req,res){
    var name = req.params.name

    if(name === "name"){
        delete obj.name
        res.json("xóa thành công")
        return
    }if(name === "age"){
        delete obj.age
        res.json("xóa thành công")
        return
    }
    res.json("xóa không thành công")
    
})    

app.listen(gate,function(){
    console.log(gate);
});