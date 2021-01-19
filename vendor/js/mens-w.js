var buttonicon=document.getElementById("click-btton")
var saumenufocus=document.getElementById("sau-focus")
// var tatmenu=document.getElementById("anmenu")
var blockdanhmuc = document.getElementById('click-icon')
var saudanhmuc = document.getElementById('saucontent')
var hidedanhmuc = document.getElementById('hide-danhmuc')

buttonicon.addEventListener('click',function(){
    saumenufocus.classList.add('hide-menu')
    console.log("hello")
})

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



// var blockdanhmuc=
// document.getElementById("hide-danhmuc").onclick = function () {
//     document.getElementById("saucontent").style.display = 'none';
//     console.log("hiện")
// };

// document.getElementById("click-icon").onclick = function () {
//     document.getElementById("saucontent").style.display = 'block';
// };


// var blockdanhmuc = document.getElementById('click-icon')
// var saudanhmuc = document.getElementById('block-menu')
// var hidedanhmuc = document.getElementById('hide-danhmuc')
// hidedanhmuc.addEventListener('click', function () {
//     saudanhmuc.classList.remove('hide-menu')
//     console.log('hello')
// })

// blockdanhmuc.addEventListener('click', function () {
//     saudanhmuc.classList.add('hide-menu')
//     console.log("xxx")
// })



