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
function load() {
    changeState();
}
function changeState() {
    if (flatCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/flat-shader-bg.png')";
    if (gouraudCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/gouraud-shader-bg.png')";
    if (phongCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/phong-shader-bg.png')";
}
