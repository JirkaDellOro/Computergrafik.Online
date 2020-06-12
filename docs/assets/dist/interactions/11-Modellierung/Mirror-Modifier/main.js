var imgContainer;
var xCheck;
var yCheck;
var zCheck;
var images = [];
window.addEventListener("load", main);
function main() {
    xCheck = document.getElementById("xCheck");
    yCheck = document.getElementById("yCheck");
    zCheck = document.getElementById("zCheck");
    imgContainer = document.getElementById("imgcontainer");
    load();
    xCheck.addEventListener("change", this.changeState);
    yCheck.addEventListener("change", this.changeState);
    zCheck.addEventListener("change", this.changeState);
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/(i)_Mirror_keine_spiegelung.jpg", "img/(i)_Mirror_X.jpg", "img/(i)_Mirror_XY.jpg", "img/(i)_Mirror_XYZ.jpg", "img/(i)_Mirror_XZ.jpg", "img/(i)_Mirror_Y.jpg", "img/(i)_Mirror_YZ.jpg", "img/(i)_Mirror_Z.jpg");
function load() {
    changeState();
}
function changeState() {
    var axis = "";
    if (xCheck.checked == true)
        axis += "X";
    if (yCheck.checked == true)
        axis += "Y";
    if (zCheck.checked == true)
        axis += "Z";
    if (axis === "") {
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_keine_spiegelung.jpg')";
    }
    else
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_" + axis + ".jpg')";
}
