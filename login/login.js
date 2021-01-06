var btnNext = document.getElementById("idNext")
var btnBack = document.getElementById("idBack")
var colorStep = document.getElementsByClassName("step")
var contentBlock = document.getElementsByClassName("block")
var showBack = document.getElementsByClassName("back")
var hideNext = document.getElementsByClassName("next")
let count = 0;
btnNext.addEventListener("click", function () {
    count++
    switch (count) {
        case 1:
            colorStep[count].classList.add("color-step")
            colorStep[count - 1].classList.remove("color-step")
            contentBlock[count].classList.add("show")
            contentBlock[count - 1].classList.add("lost")
            showBack[0].classList.add("show")
            break;
        case 2:
            colorStep[count].classList.add("color-step")
            colorStep[count - 1].classList.remove("color-step")
            contentBlock[count].classList.add("show")
            contentBlock[count - 1].classList.remove("show")
            break;
        case 3:
            colorStep[count].classList.add("color-step")
            colorStep[count - 1].classList.remove("color-step")
            contentBlock[count].classList.add("show")
            contentBlock[count - 1].classList.remove("show")
            break;
        case 4:
            colorStep[count].classList.add("color-step")
            colorStep[count - 1].classList.remove("color-step")
            contentBlock[count].classList.add("show")
            contentBlock[count - 1].classList.remove("show")
            hideNext[0].classList.add("lost")
            break;
        // case 5:
        //     colorStep[count - colorStep.length].classList.add("color-step")
        //     colorStep[count - 1].classList.remove("color-step")
        //     contentBlock[count - colorStep.length].classList.remove("lost")
        //     contentBlock[count - 1].classList.remove("show")
        //     showBack[0].classList.remove("show")
        //     break;
    }
    // if (count == 5) {
    //     count = 0;
    // }
})
btnBack.addEventListener("click", function () {
    switch (count) {
        case 1:
            colorStep[count - 1].classList.add("color-step")
            colorStep[count].classList.remove("color-step")
            contentBlock[count].classList.remove("show")
            contentBlock[count - 1].classList.remove("lost")
            showBack[0].classList.remove("show")
            break;
        case 2:
            colorStep[count].classList.remove("color-step")
            colorStep[count - 1].classList.add("color-step")
            contentBlock[count].classList.remove("show")
            contentBlock[count - 1].classList.add("show")
            break;
        case 3:
            colorStep[count].classList.remove("color-step")
            colorStep[count - 1].classList.add("color-step")
            contentBlock[count].classList.remove("show")
            contentBlock[count - 1].classList.add("show")
            break;
        case 4:
            colorStep[count].classList.remove("color-step")
            colorStep[count - 1].classList.add("color-step")
            contentBlock[count].classList.remove("show")
            contentBlock[count - 1].classList.add("show")
            hideNext[0].classList.remove("lost")
            break;
    }
    count--
})