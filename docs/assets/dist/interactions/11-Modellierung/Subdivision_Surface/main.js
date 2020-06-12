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
function load() {
    changeState();
}
function changeState() {
    console.log("test");
    var currentIndex = parseInt(slider.value);
    for (var i = 0; i < 7; i++) {
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/(i)_SubDiv_" + (currentIndex).toString() + ".png')";
        }
    }
}
//# sourceMappingURL=main.js.map