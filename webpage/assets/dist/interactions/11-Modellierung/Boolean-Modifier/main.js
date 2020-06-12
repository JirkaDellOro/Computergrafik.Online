var imgContainer;
var btnIntersect;
var btnUnion;
var btnDifference;
var images = [];
window.addEventListener("load", main);
function main() {
    btnIntersect = document.getElementById("intersect");
    btnUnion = document.getElementById("union");
    btnDifference = document.getElementById("difference");
    imgContainer = document.getElementById("imgcontainer");
    load();
    btnIntersect.onclick = function () { changeState((btnIntersect.id)); };
    btnUnion.onclick = function () { changeState((btnUnion.id)); };
    btnDifference.onclick = function () { changeState((btnDifference.id)); };
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/difference.png", "img/intersect.png", "img/union.png");
function load() {
    imgContainer.style.backgroundImage = "url('img/union.png')";
}
function changeState(e) {
    if (e == "intersect")
        imgContainer.style.backgroundImage = "url('img/intersect.png')";
    if (e == "union")
        imgContainer.style.backgroundImage = "url('img/union.png')";
    if (e == "difference")
        imgContainer.style.backgroundImage = "url('img/difference.png')";
    console.log(e);
}
