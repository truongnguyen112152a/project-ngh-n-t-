var express = require("express");
var app = express();
var gate = 6000;
var array =[{
    id:1,
    name:"Phong",
    password:"1",
    address:"HN"	
    },{
    id:2,
    name:"Sang",
    password:"1",
    address:"HP"	
    },{
    id:3,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
    },{
    id:4,
    name:"Dũng",
    password:"1",
    address:"TQ"	
    }
];

app.get("/user",function(req, res){
    res.json(array)
})
app.get("/user1", function(req,res){
    for(i = 0 ; i<arr.length;i++){
        var number = String(array[i].id);
        // res.json(number)
    }
    res.json(number)
    // console.log(number);
});
// var arr ={
//     id: 5,
//     name: "Mạnh",
//     password: "1",
//     address: "Mỹ"
// }
// array.push(arr)
app.post("/name",function(req,res){
    var arr ={
        id: 5,
		name: "Mạnh",
		password: "1",
		address: "Mỹ"
    }
    array.push(arr)
    res.json("thêm mới thành công")
})
app.put("/name1",function(req,res){
    array[1]={
		id: 2,
		name: "Vinh",
		password: "1",
		address: "Mỹ"
    }
    res.json("cập nhật thành công")
})

// array.shift()
// console.log(array);
app.delete("/name2",function(req,res){
    array.shift()
    console.log(array);
    res.json("xóa thành công")
})  

app.get("/:id/:id2",function(req, res){
  var name =  req.params.id;
  var pass = req.params.id2;
  var numnbe = 0;
  for(let i=0; i< array.length; i++ ){
    if(array[i].name === name &&  array[i].password === pass)
    numnbe++;   
  }
  if(numnbe === 1){
    return res.json("ok nhé")
  }
  return res.json("nhập lại")
})
app.listen(gate);
