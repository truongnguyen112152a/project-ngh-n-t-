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

var listProductWatch = [{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
}, {
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
},
{
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
}, {
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
}, {
    url: "./vendor/image/product-02.jpg",
    title: "Classico",
    price: "700.000 đ"
}]
for (let i = 0; i < listProductWatch.length; i++) {
    let template = `
        <div style="margin-bottom: 2rem;" class="aao item">
            <div class="border-border-border">

                <div class="fontAwesome-heart" style="background-image: url('${listProductWatch[i].url}');">
                    <i class="fas fa-heart-broken hover-heart"></i>
                </div>
                <hr class="hr_card_body">
                <div class="card-body">
                    <h5 class="card-title">${listProductWatch[i].title} ${i}</h5>
                    <p class="card-price">${listProductWatch[i].price}</p>
                    <a href="#" class="">
                        <center>
                            <button class="btnAdd">
                                THÊM VÀO GIỎ
                            </button>
                        </center>
                    </a>
                </div>
            </div>
        </div>
    `
    document.getElementById("list-product-men").innerHTML += template
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
  });

// $(document).ready(function(){
//     $(".owl-carousel-1").owlCarousel({
//         items: 2,
//         loop:true,
//         margin:10,
//         nav:true,
//     });
//   });