var menu = document.getElementById('menu-icon-bar')
var block = document.getElementById('block-menu')
var btn = document.getElementById('btn-x')
menu.addEventListener('click', function () {
    block.classList.add('hide-menu')
})
btn.addEventListener('click', function () {
    block.classList.remove('hide-menu')
    console.log('hello')
})