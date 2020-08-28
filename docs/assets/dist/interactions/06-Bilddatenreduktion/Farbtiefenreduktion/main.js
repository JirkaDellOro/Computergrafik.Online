var twobit;
var fourbit;
var eightbit;
var twentyfourbit;
var fourtyeightbit;
var labelcontainer;
var imgContainer;
var images = [];
window.addEventListener("load", init);
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/robot2.png", "img/robot4.png", "img/robot8.png", "img/robot24.png", "img/robot48.png");
function init() {
    twobit = document.getElementById("2-bit-radio");
    fourbit = document.getElementById("4-bit-radio");
    eightbit = document.getElementById("8-bit-radio");
    twentyfourbit = document.getElementById("24-bit-radio");
    fourtyeightbit = document.getElementById("48-bit-radio");
    labelcontainer = document.getElementById("data-label");
    imgContainer = document.getElementById("image-container");
    updateImage();
}
function updateImage() {
    labelcontainer.innerText = "Datenmenge: ";
    if (twobit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot2.png')";
        labelcontainer.innerText += "18 KB";
    }
    if (fourbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot4.png')";
        labelcontainer.innerText += "32 KB";
    }
    if (eightbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot8.png')";
        labelcontainer.innerText += "96 KB";
    }
    if (twentyfourbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot24.png')";
        labelcontainer.innerText += "136 KB";
    }
    if (fourtyeightbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot48.png')";
        labelcontainer.innerText += "2.150 KB";
    }
}
