var ySlider;
var mSlider;
var cSlider;
var bSlider;
var yLabel;
var mLabel;
var cLabel;
var bLabel;
var yImg;
var mImg;
var cImg;
var bImg;
window.addEventListener("load", init);
function init() {
    ySlider = document.getElementById("yellow-range");
    mSlider = document.getElementById("magenta-range");
    cSlider = document.getElementById("cyan-range");
    bSlider = document.getElementById("black-range");
    yLabel = document.getElementById("yLabel");
    mLabel = document.getElementById("mLabel");
    cLabel = document.getElementById("cLabel");
    bLabel = document.getElementById("bLabel");
    yImg = document.getElementById("yImg");
    mImg = document.getElementById("mImg");
    cImg = document.getElementById("cImg");
    bImg = document.getElementById("bImg");
}
function rangeChange(_r) {
    var rotatingImg;
    var relatedLabel;
    var color;
    if (_r == ySlider) {
        rotatingImg = yImg;
        relatedLabel = yLabel;
        color = "Gelb";
    }
    if (_r == mSlider) {
        rotatingImg = mImg;
        relatedLabel = mLabel;
        color = "Magenta";
    }
    if (_r == cSlider) {
        rotatingImg = cImg;
        relatedLabel = cLabel;
        color = "Cyan";
    }
    if (_r == bSlider) {
        rotatingImg = bImg;
        relatedLabel = bLabel;
        color = "Schwarz";
    }
    rotatingImg.style.transform = "rotate(" + _r.value.toString() + "deg)";
    relatedLabel.innerText = color + ": " + _r.value.toString() + "°";
}
