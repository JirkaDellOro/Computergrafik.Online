var slider;
var imgContainer;
var images = [];
window.addEventListener("load", main);
function main() {
    slider = document.getElementById("sliderinput");
    imgContainer = document.getElementById("imgcontainer");
    images = ["img/Low-High-Poly-1.png", "img/Low-High-Poly-2.png", "img/Low-High-Poly-3.png", "img/Low-High-Poly-4.png", "img/Low-High-Poly-5.png", "img/Low-High-Poly-6.png"];
    console.log(slider);
    load();
    slider.addEventListener("change", this.changeState);
}
function load() {
    changeState();
}
function changeState() {
    console.log("test");
    var currentIndex = parseInt(slider.value);
    for (var i = 1; i < 7; i++) {
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/Low-High-Poly-" + (currentIndex).toString() + ".png')";
        }
    }
}
//# sourceMappingURL=main.js.map