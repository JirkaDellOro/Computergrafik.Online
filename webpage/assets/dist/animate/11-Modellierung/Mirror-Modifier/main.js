var imgContainer;
var xCheck;
var yCheck;
var zCheck;
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
    console.log(axis);
    if (axis === "") {
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_keine_spiegelung.png')";
    }
    else
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_" + axis + ".png')";
}
