var rangeInputZoom;
var rangeValue;
var currWidth;
var difference;
var img;
var images = [];
var mode;
var activeRadioValue;
var rangeInputDots;
var dotValue;
window.addEventListener("load", main);
function main() {
    rangeInputZoom = document.getElementById("rangeIP1");
    rangeValue = parseFloat(rangeInputZoom.value);
    img = document.getElementById("imgcontainer");
    rangeInputDots = document.getElementById("rangeIP2");
    dotValue = parseFloat(rangeInputDots.value);
    activeRadioValue = "OG";
}
function zoom() {
    console.log(img.style.backgroundSize = 100 * rangeValue + "%");
}
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/RobotAM1.png", "img/RobotAM2.png", "img/RobotAM3.png", "img/RobotAM4.png", "img/RobotAM5.png", "img/RobotFM1.png", "img/RobotFM2.png", "img/RobotFM3.png", "img/RobotFM4.png", "img/RobotFM5.png", "img/RobotOG.png");
function updateZoomSlider(_r) {
    currWidth = img.clientWidth;
    var rangeNewValue = parseFloat(_r.value);
    if (rangeNewValue > rangeValue) {
        difference = (rangeNewValue - rangeValue);
        rangeValue = rangeNewValue;
        zoom();
    }
    else if (rangeNewValue < rangeValue) {
        difference = (rangeValue - rangeNewValue);
        rangeValue = rangeNewValue;
        zoom();
    }
    console.log(rangeValue);
}
function updateDotSlider(_r) {
    dotValue = parseFloat(_r.value);
    updateImage();
}
function updateRadioButtons(_r) {
    if (_r.id == "radio-original") {
        activeRadioValue = "OG";
    }
    else if (_r.id == "radio-amplitude") {
        activeRadioValue = "AM";
    }
    else if (_r.id == "radio-frequency") {
        activeRadioValue = "FM";
    }
    updateImage();
}
function updateImage() {
    if (activeRadioValue == "OG") {
        img.style.backgroundImage = "url('img/RobotOG.png')";
        return;
    }
    img.style.backgroundImage = "url('img/Robot" + activeRadioValue + dotValue + ".png')";
}
