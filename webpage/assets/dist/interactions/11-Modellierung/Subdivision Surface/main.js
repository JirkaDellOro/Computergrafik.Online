var slider;
var imgContainer;
var images = [];
window.addEventListener("load", main);
function main() {
    slider = document.getElementById("sliderinput");
    imgContainer = document.getElementById("imgcontainer");
    load();
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/(i)_SubDiv_0.jpg", "img/(i)_SubDiv_1.jpg", "img/(i)_SubDiv_2.jpg", "img/(i)_SubDiv_3.jpg", "img/(i)_SubDiv_4.jpg", "img/(i)_SubDiv_5.jpg", "img/(i)_SubDiv_6.jpg");
function load() {
    updateSlider();
}
function updateSlider() {
    var currentIndex = parseInt(slider.value);
    for (var i = 0; i < 7; i++) {
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/(i)_SubDiv_" + (currentIndex).toString() + ".jpg')";
        }
    }
}
//# sourceMappingURL=main.js.map