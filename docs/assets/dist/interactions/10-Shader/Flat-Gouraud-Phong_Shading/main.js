var imgContainer;
var flatCheck;
var gouraudCheck;
var phongCheck;
window.addEventListener("load", main);
function main() {
    flatCheck = document.getElementById("flatCheck");
    gouraudCheck = document.getElementById("gouraudCheck");
    phongCheck = document.getElementById("phongCheck");
    imgContainer = document.getElementById("imgcontainer");
    load();
    flatCheck.addEventListener("change", this.changeState);
    gouraudCheck.addEventListener("change", this.changeState);
    phongCheck.addEventListener("change", this.changeState);
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/flat-shader-bg.jpg", "img/gouraud-shader-bg.jpg", "img/phong-shader-bg.jpg");
function load() {
    changeState();
}
function changeState() {
    if (flatCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/flat-shader-bg.jpg')";
    if (gouraudCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/gouraud-shader-bg.jpg')";
    if (phongCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/phong-shader-bg.jpg')";
}
