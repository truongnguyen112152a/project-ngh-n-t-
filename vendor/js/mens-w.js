var buttonicon=document.getElementById("click-btton")
var saumenufocus=document.getElementById("sau-focus")
// var tatmenu=document.getElementById("anmenu")
var blockdanhmuc = document.getElementById('click-icon')
var saudanhmuc = document.getElementById('block-menu')
var hidedanhmuc = document.getElementById('hide-danhmuc')

buttonicon.addEventListener('click',function(){
    saumenufocus.classList.add("hide-menu")
    console.log("hello")
})
// tatmenu.addEventListener('click', function () {
//     block.classList.remove('hide-menu')
   
// })
// var bienclick=document.getElementById("click-icon")
// var saumenuicon=document.getElementById("saucontent")
// bienclick.addEventListener("click",function(){
//     saumenuicon.classList.add("hide-menu")
// })


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
hidedanhmuc.addEventListener('click', function () {
    saudanhmuc.classList.remove('hide-menu')
    console.log('hello')
})

blockdanhmuc.addEventListener('click', function () {
    saudanhmuc.classList.add('hide-menu')
})
// tat.addEventListener('click', function () {
//     saudanhmuc.classList.remove('hide-menu')
//     console.log('hello')
// })


