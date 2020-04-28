var imgContainer;
var btnIntersect;
var btnUnion;
var btnDifference;
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
