var rangeInput;
var currValue;
var difference;
var img;
var images = [];
window.addEventListener("load", main);
function main() {
    rangeInput = document.getElementById("rangeIP");
    currValue = parseFloat(rangeInput.value);
    img = document.getElementById("imgcontainer");
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/waves1.jpg", "img/waves2.jpg", "img/waves3.jpg", "img/waves4.jpg", "img/waves5.jpg", "img/waves6.jpg", "img/waves7.jpg", "img/waves8.jpg", "img/waves9.jpg", "img/waves10.jpg");
function updateSlider(_r) {
    currValue = parseFloat(_r.value);
    img.style.backgroundImage = "url('img/waves" + currValue + ".jpg')";
}
