var slider;
var imgContainer;
var images = [];
window.addEventListener("load", main);
function main() {
    slider = document.getElementById("sliderinput");
    imgContainer = document.getElementById("imgcontainer");
    console.log(slider);
    load();
    slider.addEventListener("change", this.changeState);
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/Low_High_Poly_1.jpg", "img/Low_High_Poly_2.jpg", "img/Low_High_Poly_3.jpg", "img/Low_High_Poly_4.jpg", "img/Low_High_Poly_5.jpg", "img/Low_High_Poly_6.jpg");
function load() {
    updateSlider();
}
function updateSlider() {
    var currentIndex = parseInt(slider.value);
    for (var i = 1; i < 7; i++) {
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/Low_High_Poly_" + (currentIndex).toString() + ".jpg')";
        }
    }
}
//# sourceMappingURL=main.js.map