var buttonicon=document.getElementById("click-btton")
var saumenufocus=document.getElementById("sau-focus")
// var tatmenu=document.getElementById("anmenu")
var blockdanhmuc = document.getElementById('click-icon')
var saudanhmuc = document.getElementById('saucontent')
var hidedanhmuc = document.getElementById('hide-danhmuc')
var openmenu = document.getElementById('open-menu')

// buttonicon.addEventListener('click',function(){
//     saumenufocus.classList.add('hide-menu')
//     console.log("hello")
// })

// var bienclick=document.getElementById("click-icon")
// var saumenuicon=document.getElementById("saucontent")
// bienclick.addEventListener("click",function(){
//     saumenuicon.classList.add("hide-menu")
// })
blockdanhmuc.addEventListener('click', function () {
    saudanhmuc.classList.add('hide-menu')
    console.log("xxx")
})
hidedanhmuc.addEventListener('click', function () {
    saudanhmuc.classList.remove('hide-menu')
    console.log('hello')
})
openmenu.addEventListener('click', function () {
    saudanhmuc.classList.remove('hide-menu')
    console.log('hihihi')
})


$(document).ready(function(){
    $("#click-btton").click(function(){
        $("#sau-focus").toggle(2000);
    })
})

