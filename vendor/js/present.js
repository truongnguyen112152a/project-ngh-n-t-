function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;//= 99
    // var start = start;
    // var increment = end > start? 1 : -1;
    var increment = null
      if(end > start){
        increment=1
      }else {
        increment=-1
      }//=> = 1
    var stepTime = Math.abs(Math.floor(duration / range));// = 10
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        start += increment;//= 2 start = star + increment 
        obj.innerHTML = start;
        if (start == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("id1280", 1, 1280, 1000);


function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;//= 99
    // var start = start;
    // var increment = end > start? 1 : -1;
    var increment = null
      if(end > start){
        increment=1
      }else {
        increment=-1
      }//=> = 1
    var stepTime = Math.abs(Math.floor(duration / range));// = 10
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        start += increment;//= 2 start = star + increment 
        obj.innerHTML = start;
        if (start == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("id8", 1, 8, 4000);


function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;//= 99
    // var start = start;
    // var increment = end > start? 1 : -1;
    var increment = null
      if(end > start){
        increment=1
      }else {
        increment=-1
      }//=> = 1
    var stepTime = Math.abs(Math.floor(duration / range));// = 10
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        start += increment;//= 2 start = star + increment 
        obj.innerHTML = start;
        if (start == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("id3898", 1, 3898, 500);


function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;//= 99
    // var start = start;
    // var increment = end > start? 1 : -1;
    var increment = null
      if(end > start){
        increment=1
      }else {
        increment=-1
      }//=> = 1
    var stepTime = Math.abs(Math.floor(duration / range));// = 10
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        start += increment;//= 2 start = star + increment 
        obj.innerHTML = start;
        if (start == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("id25", 1, 25, 2300);





var btn_btn =document.getElementById("btn-btn") 

btn_btn.addEventListener('click',function(){
  var idIP = document.getElementById("idIP")
  // console.log("dđ");
  // console.log(typeof idIP.value);
  if(idIP.value.includes('@')){
    // console.log("sssss");
    alert("Đăng Nhập Thành Công")
  }else{
    alert("Hãy Nhập Thông Tin")
    // console.log("ddđ");
  }
})

